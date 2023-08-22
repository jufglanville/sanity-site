import { groq } from "next-sanity";
import client from "./sanity.client";
import { JobType, ProfileType, ProjectType, PageType } from "@/types";

export async function getProfile(): Promise<ProfileType> {
  return client.fetch(
    groq`*[_type == "profile"][0]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      "skills": skills[]->name,
    }`
  );
}

export async function getJobs(): Promise<JobType[]> {
  return client.fetch(
    groq`*[_type == "job"] | order(endDate desc){
    _id,
    name,
    jobTitle,
    "logo": logo.asset->url,
    url,
    description,
    startDate,
    endDate,
    "skills": skills[]->name,
  }`
  );
}

export async function getProjects(): Promise<ProjectType[]> {
  return client.fetch(
    groq`*[_type == "project"]{
    _id,
    name,
    "slug": slug.current,
    tagline,
    "skills": skills[]->name,
    "logo": logo.asset->url,
  }`
  );
}

export async function getSingleProject(slug: string): Promise<ProjectType> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      projectUrl,
      githubUrl,
      skills,
      coverImage { alt, "image": asset->url },
      tagline,
      "skills": skills[]->name,
      description
    }`,
    { slug }
  );
}

export async function getPages(): Promise<PageType[]> {
  return client.fetch(
    groq`*[_type == "page"] {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`
  )
}

export async function getPage(slug: string): Promise<PageType> {
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content,
    }`,
    { slug }
  )
}

