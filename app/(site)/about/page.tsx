import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile, BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import Skills from "../components/Skills";

export default async function About() {
  const profile = await getProfile();

  return (
    <>
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
        <div className="order-2 lg:order-none">
          <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {profile.fullName}
            </span>
            . I live in {profile.location}, where I design the future.
          </h1>

          <div className="flex flex-col gap-y-3 text-zinc-400 leading-relaxed">
            <PortableText value={profile.fullBio} />
          </div>
        </div>

        <div className="flex flex-col justify-self-start gap-y-8 lg:order-1 order-none mb-12 w-full lg:w-auto lg:ml-auto">
          <div>
            <Image
              className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20] mx-auto"
              src={profile.profileImage.image}
              width={400}
              height={400}
              quality={100}
              alt={profile.profileImage.alt}
            />

            <a
              href={`${profile.resumeURL}?dl=${profile.fullName}_resume`}
              className="flex items-center justify-center gap-x-2 bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md duration-200 py-2 text-center cursor-cell font-medium"
            >
              <BiFile className="text-base" /> Download CV
            </a>
          </div>

          <ul>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-end gap-x-2 hover:text-purple-400 duration-300 mb-1"
              >
                <BiEnvelope className="text-lg" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                className="flex items-center justify-end gap-x-2 hover:text-purple-400 duration-300 mb-1"
              >
                <BiLogoGithub className="text-lg" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                className="flex items-center justify-end gap-x-2 hover:text-purple-400 duration-300 mb-1"
              >
                <BiLogoLinkedinSquare className="text-lg" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-20 lg:mt-8 mb-20">
        <h2 className="font-semibold text-4xl mb-4">Let&apos;s Chat</h2>
        <p className="text-zinc-400 mb-8">
          Have a project you&apos;d like to discuss? I&apos;m always open to new
          opportunities, so feel free to reach out to me at{" "}
          <a
            href={`mailto:${profile.email}`}
            className=" hover:text-purple-400 duration-300"
          >
            {profile.email}
          </a>
          . I&apos;ll get back to you as soon as I can!
        </p>
      </section>
    </>
  );
}
