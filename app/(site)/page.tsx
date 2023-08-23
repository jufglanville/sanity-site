import { getProfile } from "@/sanity/sanity.query";
import HeroSvg from "./icons/HeroSvg";
import Skills from "./components/Skills";
import Link from "next/link";
import { BiEnvelope, BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";

export default async function Home() {
  const profile = await getProfile();

  return (
    <>
      <section className="flex items-center xl:flex-row flex-col xl:justify-center justify-between gap-x-12">
        {profile && (
          <div key={profile._id} className="xl:max-w-2xl xl:w-1/2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full mb-6">
              Hey there! I&apos;m{" "}
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent whitespace-nowrap	">
                {profile.fullName}
              </span>
            </h1>
            <h2 className="text-2xl font-bold tracking-tight mb-6 sm:text-3xl lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
              {profile.headline}
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              {profile.shortBio}
            </p>
            <ul className="sm:flex items-center gap-x-8 my-10">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-x-2 hover:text-purple-400 duration-300 mb-1"
              >
                <BiEnvelope className="text-lg" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                className="flex items-center gap-x-2 hover:text-purple-400 duration-300 mb-1"
              >
                <BiLogoGithub className="text-lg" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                className="flex items-center gap-x-2 hover:text-purple-400 duration-300 mb-1"
              >
                <BiLogoLinkedinSquare className="text-lg" />
                LinkedIn
              </a>
            </li>
          </ul>
            <Link
              href="/projects"
              className="hover:text-purple-400 duration-300 text-2xl font-bold tracking-tight  sm:text-3xl lg:leading-[3.7rem] leading-tight bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 bg-clip-text text-transparent"
            >
              Explore My Work
            </Link>
          </div>
        )}
        <div className="w-1/2">
          <HeroSvg />
        </div>
      </section>
      <section className="mt-20 lg:mt-8">
        <h2 className="text-2xl font-bold tracking-tight mb-2 sm:text-3xl lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">Tech I Use</h2>
        <p className="text-zinc-400 mb-8">
          Curious about the tech I play around with? Here&apos;s a glimpse of the
          tools I use as a Full Stack Engineer. From creating smooth interfaces
          to exploring the backend, check out my tech lineup:
        </p>

        <Skills skills={profile.skills} />
      </section>
    </>
  );
}
