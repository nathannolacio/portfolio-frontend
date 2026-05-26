import Image from "next/image";
import Button from "../../ui/Button";
import { Project } from "../../../data/projects";
import Badge from "../../ui/Badge";
import TypeBadge from "./TypeBadge";
import StatusBadge from "./StatusBadge";
import { IoIosClose } from "react-icons/io";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-800/80 p-4">
        <div className="relative flex flex-col gap-6 w-full max-w-6xl max-h-[calc(100vh-4rem)] overflow-y-auto rounded-3xl bg-neutral-50 p-8">

            <Button 
                variant="ghost"
                size="sm"
                className="absolute right-4 top-4 rounded-full"
                onClick={onClose}
                aria-label="Close modal"
            >
                <IoIosClose size={32} />
            </Button>

            <div className="flex flex-col gap-4 sm:flex-row items-center justify-between">
                <div className="flex flex-col items-center md:flex-row gap-6">
                    <h2 className="text-2xl font-semibold text-slate-900">{project.title}</h2>

                    <div className="flex flex-wrap gap-4 justify-center items-center md:justify-end">
                        <TypeBadge type={project.type} />
                        <Badge 
                            text={project.category}
                            className="border-zinc-400 bg-zinc-100/70 text-zinc-500"
                        />
                        <StatusBadge status={project.status} />
                    </div>
                </div>
            </div>

            

            <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">

                {/* Overview + Technologies block  */}
                <div className="flex flex-col gap-8 rounded-3xl border border-zinc-200 p-4 shadow-sm">
                    
                    <div className="relative h-56 overflow-hidden rounded-3xl bg-zinc-100 border border-zinc-200">
                        {project.preview ? (
                            <Image src={project.preview} alt={project.title} fill className="object-cover" />
                        ) : (
                            <div className="flex h-full items-center justify-center text-zinc-400">
                                No preview available
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.18em]">Overview</p>    
                            <p className="mt-2 text-slate-700">{project.shortDescription}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.18em]">Technologies</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <Badge
                                        key={tech}
                                        text={tech}
                                        className="border-zinc-300 bg-zinc-100 text-zinc-600"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Description + Features + Images block */}
                <div className="space-y-6">
                    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-slate-900">Description</h3>
                        <p className="mt-3 text-slate-600 leading-7">{project.fullDescription}</p>
                    </div>

                    <div className="gap-4">
                        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-[0.18em]">Features</h4>
                            <ul className="mt-3 space-y-2 text-slate-600">
                                {project.features?.map((feature) => (
                                    <li key={feature} className="flex gap-2">   
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                    </div>

                    {project.images?.length ? (
                        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-[0.18em]">Images</h4>
                            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                {project.images.map((image) => (
                                    <div key={image.id} className="relative h-40 overflow-hidden rounded-2xl bg-zinc-100">
                                        <Image src={image.src} alt={`${project.title} image`} fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                {project.liveUrl ? (
                    <Button color="cyan" onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}>Live Demo</Button>
                ) : null}
                {project.githubUrl ? (
                    <Button variant="outline" onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}>GitHub</Button>
                ) : null}
            </div>
        </div>
    </div>
  );
}
