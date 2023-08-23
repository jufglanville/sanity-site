import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string,
  fullName: string,
  headline: string,
  profileImage: {
    alt: string,
    image: string
  },
  shortBio: string,
  email: string,
  github: string,
  linkedin: string,
  fullBio: PortableTextBlock[],
  location: string,
  resumeURL: string,
  skills: string[],
};

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  description: PortableTextBlock[];
  skills: string[];
  startDate: Date;
  endDate: Date;
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  githubUrl: string;
  skills: string[];
  logo: string;
  coverImage: {
    alt: string | null;
    image: string;
  };
  description: PortableTextBlock[];
};

export type PageType = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};