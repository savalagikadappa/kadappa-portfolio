import { skillsData, codingProfiles, concepts } from '../data/skills';
import { ArrowUpRight } from 'lucide-react';

export default function Skills() {
    return (
        <section id="skills" className="py-32 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Technical Arsenal</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-center mb-12 text-blue-400">Programming Languages</h3>
                        <div className="relative min-h-[300px] flex items-center justify-center">
                            <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-6">
                                {skillsData.languages.map((skill, index) => (
                                    <div key={index} className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-500 hover:scale-110 cursor-pointer animate-float ${skill.size === 'large' ? 'w-32 h-32 md:w-40 md:h-40' : skill.size === 'medium' ? 'w-24 h-24 md:w-32 md:h-32' : 'w-20 h-20 md:w-24 md:h-24'}`} style={{ animationDelay: skill.delay, animationDuration: `${3 + index * 0.5}s` }}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="text-center relative z-10">
                                            <div className={`${skill.size === 'large' ? 'text-4xl md:text-5xl' : skill.size === 'medium' ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} mb-2`}>{skill.icon}</div>
                                            <div className={`font-medium ${skill.size === 'large' ? 'text-sm md:text-base' : 'text-xs md:text-sm'} text-gray-300 group-hover:text-white transition-colors`}>{skill.name}</div>
                                        </div>
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-center mb-12 text-emerald-400">Frameworks & Libraries</h3>
                        <div className="relative min-h-[300px] flex items-center justify-center">
                            <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-6">
                                {skillsData.frameworks.map((skill, index) => (
                                    <div key={index} className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-500 hover:scale-110 cursor-pointer animate-float ${skill.size === 'large' ? 'w-32 h-32 md:w-40 md:h-40' : skill.size === 'medium' ? 'w-24 h-24 md:w-32 md:h-32' : 'w-20 h-20 md:w-24 md:h-24'}`} style={{ animationDelay: skill.delay, animationDuration: `${3.5 + index * 0.3}s` }}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="text-center relative z-10">
                                            <div className={`${skill.size === 'large' ? 'text-4xl md:text-5xl' : skill.size === 'medium' ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} mb-2`}>{skill.icon}</div>
                                            <div className={`font-medium ${skill.size === 'large' ? 'text-sm md:text-base' : 'text-xs md:text-sm'} text-gray-300 group-hover:text-white transition-colors`}>{skill.name}</div>
                                        </div>
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-green-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-center mb-12 text-orange-400">Tools & Technologies</h3>
                        <div className="relative min-h-[250px] flex items-center justify-center">
                            <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-6">
                                {skillsData.tools.map((skill, index) => (
                                    <div key={index} className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-500 hover:scale-110 cursor-pointer animate-float ${skill.size === 'large' ? 'w-32 h-32 md:w-40 md:h-40' : skill.size === 'medium' ? 'w-24 h-24 md:w-32 md:h-32' : 'w-20 h-20 md:w-24 md:h-24'}`} style={{ animationDelay: skill.delay, animationDuration: `${4 + index * 0.4}s` }}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="text-center relative z-10">
                                            <div className={`${skill.size === 'large' ? 'text-4xl md:text-5xl' : skill.size === 'medium' ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} mb-2`}>{skill.icon}</div>
                                            <div className={`font-medium ${skill.size === 'large' ? 'text-sm md:text-base' : 'text-xs md:text-sm'} text-gray-300 group-hover:text-white transition-colors`}>{skill.name}</div>
                                        </div>
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-red-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-center mb-12 text-purple-400">Core Concepts</h3>
                        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                            {concepts.map((concept, index) => (
                                <div key={index} className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative z-10 text-center"><div className="font-medium text-gray-300 group-hover:text-white transition-colors">{concept}</div></div>
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-8 text-cyan-400">Coding Profiles</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {codingProfiles.map((profile, index) => (
                                <a key={index} href={profile.url} target="_blank" rel="noopener noreferrer">
                                    <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`} />
                                        <div className="relative z-10 flex items-center space-x-3">
                                            <span className="text-2xl">{profile.icon}</span>
                                            <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{profile.name}</span>
                                            <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
