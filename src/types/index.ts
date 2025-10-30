/**
 * Core type definitions for the portfolio application
 * Exports interfaces for projects, skills, and profile data
 */

/**
 * Represents a portfolio project
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  startDate: string;
  endDate: string;
}

/**
 * Represents a technical skill with proficiency level
 */
export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiencyLevel: ProficiencyLevel;
  yearsOfExperience: number;
}

/**
 * Skill categories for organization
 */
export enum SkillCategory {
  LANGUAGES = 'Languages',
  FRAMEWORKS = 'Frameworks',
  TOOLS = 'Tools',
  DATABASES = 'Databases',
  CLOUD = 'Cloud',
  OTHER = 'Other'
}

/**
 * Proficiency levels for skills
 */
export enum ProficiencyLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
  EXPERT = 'Expert'
}

/**
 * Developer profile information
 */
export interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  avatar?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

/**
 * Navigation parameter types for type-safe routing
 */
export type RootStackParamList = {
  Profile: undefined;
  Projects: undefined;
  Skills: undefined;
  Contact: undefined;
  ProjectDetail: { projectId: string };
};