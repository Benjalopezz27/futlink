import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { RecruiterProfile } from './recruiter-profile.entity';

export enum InstitutionType {
  CLUB = 'Club',
  UNIVERSIDAD = 'Universidad',
  AGENCIA = 'Agencia',
}

@Entity('institutions')
export class Institution {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({
    type: 'enum',
    enum: InstitutionType,
    default: InstitutionType.CLUB,
  })
  type: InstitutionType;

  @Column({ type: 'varchar', nullable: true })
  location: string | null;

  @Column({ name: 'division_league', type: 'varchar', nullable: true })
  divisionLeague: string | null;

  @Column({ type: 'varchar', nullable: true })
  website: string | null;

  @Column({ name: 'logo_url', type: 'varchar', nullable: true })
  logoUrl: string | null;

  @Column({ name: 'is_verified_futlink', default: false })
  isVerifiedFutlink: boolean;

  @OneToMany(
    () => RecruiterProfile,
    (recruiterProfile) => recruiterProfile.institution,
  )
  recruiterProfiles: RecruiterProfile[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
