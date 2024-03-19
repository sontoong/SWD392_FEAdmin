import { languages } from "../../constants/language";

export type ExperienceLevel = "junior" | "senior" | "expert";

export type OptionalRequirements = {
  minimumCompletedProjects:
    | "all"
    | "<3 projects"
    | "5-10 projects"
    | ">10 projects";
  rating: "all" | ">3 stars" | ">4 stars";
  nation: string;
  language: languages;
  skills: Skill[];
  questions?: string[];
};

export type Skill = {
  label: string;
  value: string;
};

export type SkillField = {
  label: string;
  value: string;
};

export type Field = {
  label: string;
  value: string;
};

export interface Contract {
  fund: number;
  depositType: "full" | "period ";
  date: number;
}

export interface Project {
  id: string;
  title: string;
  language: languages;
  projectField: SkillField;
  description: string;
  contract: Contract;
  funding: "hourly" | "fixed";
  initialFunding: number;
  freelancerRequirement: ExperienceLevel;
  optionalRequirements: OptionalRequirements;
  timeToComplete: "<1 month" | "1-3 month" | ">3 month";
  publishedTime: number;
  createdBy: string;
  createdById: string;
  paidAmount: number;
  projectType: "longterm" | "shortterm" | "unknown";
  isCompleted: boolean;
  isVerified: boolean;
  privacy: "public" | "private" | "freelancer";
  applicationCount: number;
  inviteSent: number;
  inviteAccepted: number;
  freelancerCount: number;
}

export interface CreateProject {
  title: string;
  projectField: string;
  description: string;
  contract: Contract;
  funding: "hourly" | "fixed";
  initialFunding?: number;
  freelancerRequirement?: ExperienceLevel;
  timeToComplete: "<1 month" | "1-3 months" | ">3 months";
  createdBy: string;
  privacy: "public" | "private" | "freelancer";
  projectType: "longterm" | "shortterm" | "unknown";
  optionalRequirements: OptionalRequirements;
}

export interface FreelancerProject extends Project {
  startDate: number;
  endDate?: number;
  status: "doing" | "stopped" | "contracting" | "verifying" | "denied";
  signature?: string;
}

export interface OutsideProject {
  title: string;
  jobRole: string;
  description: string;
  startEndDate: [number, number];
  images?: { name: string; url?: string; file?: File }[];
  projectDocumentImages?: {
    image: { name: string; url?: string; file?: File };
    description: string;
  }[];
}

export interface EnterpriseProject extends Project {
  status: "hiring" | "closed" | "doing";
}
