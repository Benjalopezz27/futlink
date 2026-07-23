import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { User } from '../../auth/entities/user.entity';

export enum PreferredFoot {
  RIGHT = 'right',
  LEFT = 'left',
  BOTH = 'both',
}

export enum Biotype {
  LONGILINEO = 'Longilíneo',
  NORMOLINEO = 'Normolíneo',
  BREVILINEO = 'Brevilíneo',
}

@Entity('player_profiles')
export class PlayerProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, (user) => user.playerProfile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'user_id', type: 'uuid' })
  userId: string;

  @Column({ name: 'birth_date', type: 'date', nullable: true })
  birthDate: string | null;

  @Column({ type: 'varchar', nullable: true })
  nationality: string | null;

  @Column({ type: 'varchar', nullable: true })
  location: string | null;

  @Column({ type: 'int', nullable: true })
  height: number | null;

  @Column({ type: 'float', nullable: true })
  weight: number | null;

  @Column({
    type: 'enum',
    enum: PreferredFoot,
    nullable: true,
  })
  foot: PreferredFoot | null;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  biotype: Biotype | string | null;

  @Column({ name: 'primary_position', type: 'varchar', nullable: true })
  primaryPosition: string | null;

  @Column({ name: 'specific_role', type: 'varchar', nullable: true })
  specificRole: string | null;

  @Column({ name: 'secondary_role', type: 'varchar', nullable: true })
  secondaryRole: string | null;

  @Column({ name: 'contract_status', type: 'varchar', nullable: true })
  contractStatus: string | null;

  @Column({ name: 'current_club', type: 'varchar', nullable: true })
  currentClub: string | null;

  @Column({ name: 'current_league', type: 'varchar', nullable: true })
  currentLeague: string | null;

  @Column({ type: 'float', nullable: true })
  gpa: number | null;

  @Column({ name: 'graduation_year', type: 'int', nullable: true })
  graduationYear: number | null;

  @Column({ name: 'primary_highlight_url', type: 'varchar', nullable: true })
  primaryHighlightUrl: string | null;

  @Column({ name: 'federation_id', type: 'varchar', nullable: true })
  federationId: string | null;

  // Radar 0-100 Attributes
  @Column({ name: 'attr_speed', type: 'int', default: 50 })
  attrSpeed: number;

  @Column({ name: 'attr_stamina', type: 'int', default: 50 })
  attrStamina: number;

  @Column({ name: 'attr_finishing', type: 'int', default: 50 })
  attrFinishing: number;

  @Column({ name: 'attr_strength', type: 'int', default: 50 })
  attrStrength: number;

  @Column({ name: 'attr_passing', type: 'int', default: 50 })
  attrPassing: number;

  @Column({ name: 'attr_defense', type: 'int', default: 50 })
  attrDefense: number;

  // Match Statistics
  @Column({ name: 'minutes_played', type: 'int', default: 0 })
  minutesPlayed: number;

  @Column({ name: 'matches_played', type: 'int', default: 0 })
  matchesPlayed: number;

  @Column({ type: 'int', default: 0 })
  goals: number;

  @Column({ type: 'int', default: 0 })
  assists: number;

  @Column({ name: 'yellow_cards', type: 'int', default: 0 })
  yellowCards: number;

  @Column({ name: 'red_cards', type: 'int', default: 0 })
  redCards: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  calculateBiotype(): void {
    if (this.height && this.weight && this.height > 0 && this.weight > 0) {
      const heightInMeters = this.height / 100;
      const bmi = this.weight / (heightInMeters * heightInMeters);

      if (bmi < 21) {
        this.biotype = Biotype.LONGILINEO;
      } else if (bmi >= 21 && bmi <= 24.5) {
        this.biotype = Biotype.NORMOLINEO;
      } else {
        this.biotype = Biotype.BREVILINEO;
      }
    }
  }
}
