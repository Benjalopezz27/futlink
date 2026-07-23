import {
  IsArray,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  IsUrl,
} from 'class-validator';
import { InstitutionType } from '../../institutions/entities/institution.entity';

export class RecruiterOnboardingDto {
  @IsOptional()
  @IsUUID()
  institutionId?: string;

  @IsOptional()
  @IsString()
  institutionName?: string;

  @IsOptional()
  @IsEnum(InstitutionType)
  institutionType?: InstitutionType;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  divisionLeague?: string;

  @IsOptional()
  @IsString()
  website?: string;

  @IsOptional()
  @IsUrl()
  logoUrl?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categories?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  modalities?: string[];

  @IsOptional()
  @IsUrl()
  kycDocumentUrl?: string;
}
