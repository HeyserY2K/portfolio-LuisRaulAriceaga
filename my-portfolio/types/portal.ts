export interface PortalLocation {
  city: string;
  state_region: string;
  country: string;
}

export interface PortalProfile {
  name: string;
  email: string;
  location: PortalLocation;
}

export interface PortalAbout {
  summary: string;
  skills: string[];
}

export interface PortalProject {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export interface PortalProjects {
  featured: PortalProject[];
}

export interface PortalBlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface PortalBlog {
  posts: PortalBlogPost[];
}

export interface PortalSocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PortalSocial {
  links: PortalSocialLink[];
}

export interface PortalStore {
  description: string;
}

export interface PortalData {
  profile: PortalProfile;
  about: PortalAbout;
  projects: PortalProjects;
  blog: PortalBlog;
  social: PortalSocial;
  store: PortalStore;
}


