import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  Min,
} from 'class-validator';
import {
  Biotype,
  PreferredFoot,
} from '../../players/entities/player-profile.entity';

export class PlayerOnboardingDto {
  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @IsOptional()
  @IsString()
  nationality?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsInt()
  @Min(100)
  @Max(250)
  height?: number;

  @IsOptional()
  @IsInt()
  @Min(30)
  @Max(150)
  weight?: number;

  @IsOptional()
  @IsEnum(PreferredFoot)
  foot?: PreferredFoot;

  @IsOptional()
  @IsEnum(Biotype)
  biotype?: Biotype;

  @IsOptional()
  @IsString()
  primaryPosition?: string;

  @IsOptional()
  @IsString()
  specificRole?: string;

  @IsOptional()
  @IsString()
  secondaryRole?: string;

  @IsOptional()
  @IsString()
  contractStatus?: string;

  @IsOptional()
  @IsString()
  currentClub?: string;

  @IsOptional()
  @IsString()
  currentLeague?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  minutesPlayed?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  goals?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  assists?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10)
  gpa?: number;

  @IsOptional()
  @IsInt()
  graduationYear?: number;

  @IsOptional()
  @IsUrl()
  primaryHighlightUrl?: string;

  @IsOptional()
  @IsString()
  federationId?: string;
}
