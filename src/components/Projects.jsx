import { projects } from '../data/projects';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, ExternalLink, ArrowUpRight, Star } from 'lucide-react';

export default function Projects() {
    return (
        <section id="projects" className="py-32 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Featured Projects</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {projects.filter(p => p.featured).map((project, index) => (
                            <div key={index} className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <div className="flex items-center space-x-2 mb-2"><h3 className="text-2xl font-bold">{project.title}</h3><Star className="text-yellow-400" size={20} /></div>
                                            <p className="text-lg text-gray-400 mb-2">{project.subtitle}</p>
                                            <p className="text-sm text-gray-500">{project.date}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, i) => <Badge key={i} className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors">{tech}</Badge>)}
                                    </div>
                                    <div className="flex space-x-4">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 group bg-transparent">
                                                <Github size={16} className="mr-2" />Code<ArrowUpRight size={14} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </Button>
                                        </a>
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                <Button size="sm" className="bg-white text-black hover:bg-gray-100 group">
                                                    <ExternalLink size={16} className="mr-2" />Live<ArrowUpRight size={14} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                                </Button>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {projects.filter(p => !p.featured).map((project, index) => (
                            <div key={index} className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-sm text-gray-400 mb-3">{project.subtitle}</p>
                                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {project.technologies.slice(0, 3).map((tech, i) => <Badge key={i} className="text-xs bg-white/10 text-white border-white/20">{tech}</Badge>)}
                                    </div>
                                    <div className="flex space-x-2">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"><Button size="sm" variant="ghost" className="p-2 hover:bg-white/10"><Github size={16} /></Button></a>
                                        {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer"><Button size="sm" variant="ghost" className="p-2 hover:bg-white/10"><ExternalLink size={16} /></Button></a>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
