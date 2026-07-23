import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from './entities/user.entity';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthResponseDto, UserPayloadDto } from './dto/auth-response.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UserRole } from './enums/user-role.enum';
import { PlayersService } from '../players/players.service';
import { InstitutionsService } from '../institutions/institutions.service';
import { PlayerOnboardingDto } from './dto/player-onboarding.dto';
import { RecruiterOnboardingDto } from './dto/recruiter-onboarding.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly playersService: PlayersService,
    private readonly institutionsService: InstitutionsService,
  ) {}

  async register(registerDto: RegisterDto): Promise<AuthResponseDto> {
    const { email, password, firstName, lastName, role } = registerDto;

    const existingUser = await this.userRepository.findOne({
      where: { email: email.toLowerCase() },
    });

    if (existingUser) {
      throw new ConflictException('A user with this email already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = this.userRepository.create({
      email: email.toLowerCase(),
      password: hashedPassword,
      firstName,
      lastName,
      role,
      isOnboarded: false,
    });

    const savedUser = await this.userRepository.save(newUser);

    if (role === UserRole.PLAYER) {
      await this.playersService.createInitialProfile(savedUser.id);
    } else if (role === UserRole.RECRUITER) {
      await this.institutionsService.createInitialRecruiterProfile(
        savedUser.id,
      );
    }

    const accessToken = this.generateToken(savedUser);

    return {
      user: this.sanitizeUser(savedUser),
      accessToken,
    };
  }

  async login(loginDto: LoginDto): Promise<AuthResponseDto> {
    const { email, password } = loginDto;

    const user = await this.userRepository.findOne({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Account is deactivated');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = this.generateToken(user);

    return {
      user: this.sanitizeUser(user),
      accessToken,
    };
  }

  async onboardPlayer(
    userId: string,
    onboardingDto: PlayerOnboardingDto,
  ): Promise<AuthResponseDto> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    if (user.role !== UserRole.PLAYER) {
      throw new BadRequestException('Only player accounts can perform player onboarding');
    }

    await this.playersService.updateProfile(userId, onboardingDto);

    user.isOnboarded = true;
    const updatedUser = await this.userRepository.save(user);

    const accessToken = this.generateToken(updatedUser);

    return {
      user: this.sanitizeUser(updatedUser),
      accessToken,
    };
  }

  async onboardRecruiter(
    userId: string,
    onboardingDto: RecruiterOnboardingDto,
  ): Promise<AuthResponseDto> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    if (user.role !== UserRole.RECRUITER) {
      throw new BadRequestException('Only recruiter accounts can perform recruiter onboarding');
    }

    await this.institutionsService.onboardRecruiter(userId, onboardingDto);

    user.isOnboarded = true;
    const updatedUser = await this.userRepository.save(user);

    const accessToken = this.generateToken(updatedUser);

    return {
      user: this.sanitizeUser(updatedUser),
      accessToken,
    };
  }

  async changePassword(
    userId: string,
    changePasswordDto: ChangePasswordDto,
  ): Promise<{ message: string }> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isOldPasswordValid = await bcrypt.compare(
      changePasswordDto.oldPassword,
      user.password,
    );

    if (!isOldPasswordValid) {
      throw new BadRequestException('Current password is incorrect');
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(changePasswordDto.newPassword, salt);
    await this.userRepository.save(user);

    return { message: 'Password updated successfully' };
  }

  async validateUserById(id: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user || !user.isActive) {
      return null;
    }
    return user;
  }

  private generateToken(user: User): string {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      isOnboarded: user.isOnboarded,
    };

    return this.jwtService.sign(payload);
  }

  public sanitizeUser(user: User): UserPayloadDto {
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      isActive: user.isActive,
      isOnboarded: user.isOnboarded,
      createdAt: user.createdAt,
    };
  }
}
