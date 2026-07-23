import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayerProfile } from './entities/player-profile.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(PlayerProfile)
    private readonly playerProfileRepository: Repository<PlayerProfile>,
  ) {}

  async createInitialProfile(userId: string): Promise<PlayerProfile> {
    const profile = this.playerProfileRepository.create({
      userId,
    });
    return this.playerProfileRepository.save(profile);
  }

  async findByUserId(userId: string): Promise<PlayerProfile | null> {
    return this.playerProfileRepository.findOne({ where: { userId } });
  }

  async updateProfile(
    userId: string,
    updateData: Partial<PlayerProfile>,
  ): Promise<PlayerProfile> {
    let profile = await this.findByUserId(userId);
    if (!profile) {
      profile = await this.createInitialProfile(userId);
    }

    Object.assign(profile, updateData);
    return this.playerProfileRepository.save(profile);
  }
}
