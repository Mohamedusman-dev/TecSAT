export interface StatData {
  label: string;
  value: number;
  suffix: string;
}

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  slug: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
}

export interface IndustryCardProps {
  imageSrc: string;
  title: string;
}

export interface TestimonialProps {
  clientName: string;
  company: string;
  reviewText: string;
  rating: number;
  avatarSrc: string;
}

export interface ProjectProps {
  imageSrc: string;
  title: string;
  category: 'Civil' | 'Interior' | 'HVAC' | 'Electrical' | 'Waterproofing' | 'Audit';
}
