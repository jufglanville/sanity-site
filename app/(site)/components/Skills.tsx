interface Props {
  skills: string[];
  small?: boolean;
}

const Skills = ({ skills, small = false }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <div key={skill} className={`${small ? 'text-xs' : 'text-base'} bg-zinc-800 rounded-md px-2 py-1`}>
          {skill}
        </div>
      ))}
    </div>
  );
};

export default Skills;
