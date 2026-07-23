import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Institution, InstitutionType } from './entities/institution.entity';
import { RecruiterProfile } from './entities/recruiter-profile.entity';

export interface CreateRecruiterOnboardingData {
  institutionId?: string;
  institutionName?: string;
  institutionType?: InstitutionType;
  location?: string;
  divisionLeague?: string;
  website?: string;
  logoUrl?: string;
  title?: string;
}

@Injectable()
export class InstitutionsService {
  constructor(
    @InjectRepository(Institution)
    private readonly institutionRepository: Repository<Institution>,
    @InjectRepository(RecruiterProfile)
    private readonly recruiterProfileRepository: Repository<RecruiterProfile>,
  ) {}

  async createInitialRecruiterProfile(
    userId: string,
  ): Promise<RecruiterProfile> {
    const profile = this.recruiterProfileRepository.create({
      userId,
    });
    return this.recruiterProfileRepository.save(profile);
  }

  async findRecruiterByUserId(
    userId: string,
  ): Promise<RecruiterProfile | null> {
    return this.recruiterProfileRepository.findOne({
      where: { userId },
      relations: ['institution'],
    });
  }

  async onboardRecruiter(
    userId: string,
    data: CreateRecruiterOnboardingData,
  ): Promise<RecruiterProfile> {
    let recruiter = await this.findRecruiterByUserId(userId);
    if (!recruiter) {
      recruiter = await this.createInitialRecruiterProfile(userId);
    }

    if (data.institutionId) {
      const existingInstitution = await this.institutionRepository.findOne({
        where: { id: data.institutionId },
      });
      if (!existingInstitution) {
        throw new NotFoundException('Specified institution was not found');
      }
      recruiter.institution = existingInstitution;
      recruiter.institutionId = existingInstitution.id;
    } else if (data.institutionName) {
      const newInstitution = this.institutionRepository.create({
        name: data.institutionName,
        type: data.institutionType || InstitutionType.CLUB,
        location: data.location || null,
        divisionLeague: data.divisionLeague || null,
        website: data.website || null,
        logoUrl: data.logoUrl || null,
        isVerifiedFutlink: false,
      });

      const savedInstitution = await this.institutionRepository.save(
        newInstitution,
      );
      recruiter.institution = savedInstitution;
      recruiter.institutionId = savedInstitution.id;
    }

    if (data.title) {
      recruiter.title = data.title;
    }

    return this.recruiterProfileRepository.save(recruiter);
  }
}
