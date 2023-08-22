import { getProfile } from "@/sanity/sanity.query";

export default async function Footer() {
  const profile = await getProfile();

  //@ts-ignore
  const githubUrl = profile.socialLinks.github;

  return (
    <footer className="mt-auto pt-20">
      <hr className="border-zinc-800" />
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-400">
        <small className=" duration-200 font-mono">
          All rights reserved &copy; {new Date().getFullYear()}
        </small>

        <small className="hover:underline transition-all duration-200">
          <a href={githubUrl} target="_blank" rel="noreferrer noopener">
            Prepared by{" "}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {profile.fullName}
            </span>
          </a>
        </small>
      </div>
    </footer>
  );
}
