import { getJobs } from "@/sanity/sanity.query";
import { Job } from "./components/Job";

export default async function Experience() {
  const jobs = await getJobs();

  return (
    <section>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:leading-[3.7rem] leading-tight mb-6">
          Work Experience
        </h1>

      <div className="flex flex-col gap-y-24 relative before:absolute before:bottom-0 before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800">
        {jobs.map((job) => (
          <Job key={job._id} job={job} />
        ))}
      </div>
      <div>

      </div>
    </section>
  );
}
