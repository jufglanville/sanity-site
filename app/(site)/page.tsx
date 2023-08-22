import { getProfile } from "@/sanity/sanity.query";
import HeroSvg from "./icons/HeroSvg";

export default async function Home() {
  const profile = await getProfile();

  return (
    <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
      {profile && (
        <div key={profile._id} className="lg:max-w-2xl max-w-2xl w-1/2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {profile.fullName}
            </span>
            ,
          </h1>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
            {profile.headline}
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            {profile.shortBio}
          </p>
          <ul className="flex items-center gap-x-6 my-10">
            {Object.entries(profile.socialLinks)
              .sort()
              .map(([key, value], id) => (
                <li key={id}>
                  <a
                    href={value}
                    rel="noreferer noopener"
                    className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
                  >
                    {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      )}
      <div className="w-1/2">
        <HeroSvg />
      </div>
    </section>
  );
}
