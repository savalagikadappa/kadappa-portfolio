import { GraduationCap, MapPin, Calendar, Target, BookOpen, Award } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-32 relative z-10">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">About Me</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
                    </div>
                    <div className="max-w-lg mx-auto space-y-6 mb-20">
                        <p className="text-lg text-gray-300 leading-relaxed">I'm a passionate software developer pursuing Computer Science Engineering at KLE Technological University. With a strong foundation in full-stack development and competitive programming, I love turning complex problems into elegant solutions.</p>
                        <p className="text-lg text-gray-300 leading-relaxed">My journey includes impactful internships at Infosys and SkillFlash, where I've built scalable applications and improved system efficiency through innovative approaches.</p>
                    </div>
                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Education Journey</h3>
                            <p className="text-gray-400 max-w-2xl mx-auto">Building a strong academic foundation in computer science and engineering</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center"><GraduationCap className="text-blue-400" size={24} /></div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white">KLE Technological University</h4>
                                                <div className="flex items-center space-x-2 text-sm text-gray-400"><span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">Pursuing</span></div>
                                            </div>
                                        </div>
                                        <div className="text-right"><div className="text-2xl font-bold text-blue-400">8.22</div><div className="text-xs text-gray-400">CGPA</div></div>
                                    </div>
                                    <div className="mb-6">
                                        <h5 className="text-lg font-semibold text-white mb-2">B.E. in Computer Science and Engineering</h5>
                                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                                            <div className="flex items-center space-x-1"><Calendar size={14} /><span>November 2022 - August 2026</span></div>
                                            <div className="flex items-center space-x-1"><MapPin size={14} /><span>Hubballi, Karnataka</span></div>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <h6 className="text-sm font-semibold text-blue-400 mb-3 flex items-center"><Target size={16} className="mr-2" />Key Highlights</h6>
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" /><span>Strong foundation in Computer Science fundamentals</span></li>
                                            <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" /><span>Active participation in coding competitions</span></li>
                                            <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" /><span>Focus on full-stack development and algorithms</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center"><BookOpen className="text-emerald-400" size={24} /></div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white">SJPN PU College</h4>
                                                <div className="flex items-center space-x-2 text-sm text-gray-400"><span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full text-xs">Completed</span></div>
                                            </div>
                                        </div>
                                        <div className="text-right"><div className="text-2xl font-bold text-emerald-400">95.83%</div><div className="text-xs text-gray-400">Percentage</div></div>
                                    </div>
                                    <div className="mb-6">
                                        <h5 className="text-lg font-semibold text-white mb-2">Pre-University (PCMB)</h5>
                                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                                            <div className="flex items-center space-x-1"><Calendar size={14} /><span>2020 - 2022</span></div>
                                            <div className="flex items-center space-x-1"><MapPin size={14} /><span>Nidasoshi, Karnataka</span></div>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <h6 className="text-sm font-semibold text-emerald-400 mb-3 flex items-center"><Target size={16} className="mr-2" />Key Highlights</h6>
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" /><span>Excellent academic performance in Science subjects</span></li>
                                            <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" /><span>Strong mathematical and analytical foundation</span></li>
                                            <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" /><span>Prepared for engineering entrance examinations</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 text-center">
                            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                                <div className="flex items-center justify-center space-x-2 mb-4"><Award className="text-yellow-400" size={24} /><h4 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Consistent Academic Excellence with Strong Technical Focus</h4></div>
                                <p className="text-gray-300 max-w-2xl mx-auto">Maintaining high academic standards while actively engaging in practical software development and competitive programming</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
