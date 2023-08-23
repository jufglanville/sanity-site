import { JobType } from "@/types"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Skills from "../../components/Skills"

interface Props {
  job: JobType
}

export const Job = ({job}: Props) => {
  return (
    <div
    key={job._id}
    className="flex items-start lg:gap-x-6 gap-x-4"
    >
      <a
        href={job.url}
        target="_blank"
        rel="noreferrer noopener"
        className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
      >
        <Image
          src={job.logo}
          className="object-cover"
          alt={`${job.name} logo`}
          fill
        />
      </a>
      <div className="flex flex-col items-start">
        <h3 className="text-xl font-bold">{job.name}</h3>
        <p>{job.jobTitle}</p>
        <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
          {job.startDate.toString()} - {job.endDate.toString()}
        </small>
        <div className="my-4 prose max-w-none">
          <PortableText value={job.description} />
        </div>
        <h4 className="text-xl font-bold my-4">Technologies</h4>
        <Skills skills={job.skills} />
      </div>
    </div>
  )
}
