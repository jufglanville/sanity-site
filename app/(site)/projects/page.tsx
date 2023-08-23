import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import Skills from "../components/Skills";

export default async function Project() {
  const projects = await getProjects();

  return (
    <>
      <section className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Featured Projects
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed">
        I&apos;ve had my hands full with a bunch of projects over the years, and here&apos;s a sneak peek at a few you can explore:
        </p>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
          >
            <div className="flex items-center gap-x-4 mb-4">
              <Image
                src={project.logo}
                width={60}
                height={60}
                alt={project.name}
                className="bg-zinc-800 rounded-md p-2"
              />
              <div>
                <h2 className="font-semibold mb-1">{project.name}</h2>
                <div className="text-sm text-zinc-400">{project.tagline}</div>
              </div>
            </div>
            <Skills skills={project.skills} small={true} />
          </Link>
        ))}
      </section>
    </>
  );
}
