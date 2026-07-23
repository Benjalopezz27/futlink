import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import { UserRole } from '../enums/user-role.enum';
import { PlayerProfile } from '../../players/entities/player-profile.entity';
import { RecruiterProfile } from '../../institutions/entities/recruiter-profile.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({
    type: 'varchar',
    default: UserRole.PLAYER,
  })
  role: UserRole;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @Column({ name: 'is_onboarded', default: false })
  isOnboarded: boolean;

  @OneToOne(() => PlayerProfile, (profile) => profile.user)
  playerProfile: PlayerProfile;

  @OneToOne(() => RecruiterProfile, (profile) => profile.user)
  recruiterProfile: RecruiterProfile;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
