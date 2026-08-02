export interface Project {
  id: string;
  name: string;
  company?: string;
  category: 'enterprise' | 'healthcare' | 'security' | 'crm' | 'fintech' | 'ecommerce' | 'saas';
  tagline: string;
  description: string;
  technologies: string[];
  impact: string;
  architecturePoints: string[];
  iconName: string;
  imageUrl?: string;
  demoUrl?: string;
  sourceUrl?: string;
  isPrivate?: boolean;
  featured?: boolean;
  stats?: { label: string; value: string }[];
}

export interface Position {
  company: string;
  role: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  highlights: string[];
  skillsUsed: string[];
  logoBadge?: string;
  logoUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  items: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    usage: string;
    logoSlug?: string;
  }[];
}

export interface ProfileData {
  name: string;
  title: string;
  company: string;
  location: string;
  availability: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  whatsapp: string;
  bio: string[];
  metrics: { label: string; value: string; detail: string }[];
  education: {
    degree: string;
    field: string;
    institution: string;
    location: string;
    period: string;
  };
}
