import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FaCalendarCheck, FaGithub, FaPlayCircle } from "react-icons/fa";

export type ProjectProps = {
    projects: {
        name: string
        description: string
        date: string
        demo?: string
        tag: string[]
        github: string
    }[],
}
const ProjectCard = ({ projects }: { projects: ProjectProps }) => {
    
    return (
        <>
            {projects.projects.map((project,index) => {
                return <Card key={index} className=" bg-slate-50 shadow-md px-10  max-w-lg">
                    <CardHeader className="w-full  m-0">
                        {/* <div className="overflow-hidden rounded-md">
          <Image src={ project.imageLocation ? project.image : '/qadasolat.jpeg'} alt={project.name} width={3000} height={0} className="h-auto w-auto object-cover transition-all hover:scale-105"/>
        </div> */}
                        {/* <Image src={project.image} alt={project.name} width={300} height={300} /> */}
                    </CardHeader>
                    <CardTitle className="mb-1 select-none">
                        {project.name}
                    </CardTitle>
                    <small className="text-muted-foreground flex items-center gap-4">
                        <div>
                            <FaCalendarCheck className="inline-block" />{' ' + project.date}
                        </div>
                        <div className="hover:text-foreground">
                            <FaGithub className="inline-block mr-1" />
                            <Link className="hover:underline" href={project.github}>{project.github.split('/').pop()}</Link>
                        </div>
                        {project.demo && <div>
                            <FaPlayCircle className="inline-block mr-1"/>
                            <Link className="hover:underline" href={project.demo}>{'Demo'}</Link>
                        </div>}
                    </small>
                    <CardDescription className="text-primary py-3">
                        {project.description}
                    </CardDescription>
                    <CardContent>
                        <div className="flex flex-row gap-1 flex-grow mt-2 flex-wrap">
                            {project.tag.map((tag, tagIndex) => (
                                <Button key={tagIndex} className="hover:bg-primary hover:text-background cursor-default" variant="outline">{tag}</Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            })}
        </>

    )
};

export { ProjectCard };