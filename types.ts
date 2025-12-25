
export interface GeneratedContent {
  title: string;
  shortDescription: string;
  storyDescription: string;
  metaDescription: string;
  tags: string[];
  slug: string;
}

export enum ViewMode {
  GENERATOR = 'GENERATOR',
  DOCUMENTATION = 'DOCUMENTATION'
}

export interface ProductInput {
  name: string;
  category: string;
  features: string;
  targetAudience: string;
}
