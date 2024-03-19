import { ProjectCard } from "./ProjectCard";
import data from "../../data/projects.json"
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 sm:p-0">
      <h1 className=" pb-20 text-3xl  sm: md:pt-24 lg:pt-0  font-bold">{'<'}Project{'/>'}</h1>
      <div className="flex flex-col gap-5 items-center">
        <ProjectCard projects={data} />
      </div>
    </main>
  );
}
