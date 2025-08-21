import { Button } from './ui/button';
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-32 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Let's Connect</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                                    <p className="text-gray-300 leading-relaxed">Ready to collaborate on exciting projects or discuss opportunities? I'm always open to connecting with fellow developers and innovators.</p>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4"><div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center"><Mail className="text-blue-400" size={20} /></div><div><div className="font-medium">Email</div><div className="text-gray-400">kadappasavalagi@gmail.com</div></div></div>
                                    <div className="flex items-center space-x-4"><div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center"><Phone className="text-green-400" size={20} /></div><div><div className="font-medium">Phone</div><div className="text-gray-400">+91 8660195703</div></div></div>
                                    <div className="flex items-center space-x-4"><div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center"><Linkedin className="text-blue-500" size={20} /></div><div><div className="font-medium">LinkedIn</div><div className="text-gray-400">kadappasavalagi</div></div></div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <a href="mailto:kadappasavalagi@gmail.com"><Button className="w-full bg-white text-black hover:bg-gray-100 group"><Mail size={16} className="mr-2" />Email Me<ArrowUpRight size={14} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></Button></a>
                                    <a href="https://www.linkedin.com/in/kadappasavalagi" target="_blank" rel="noopener noreferrer"><Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 group bg-transparent"><Linkedin size={16} className="mr-2" />LinkedIn<ArrowUpRight size={14} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></Button></a>
                                </div>
                                <a href="https://github.com/savalagikadappa" target="_blank" rel="noopener noreferrer"><Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 group bg-transparent"><Github size={16} className="mr-2" />View GitHub Profile<ArrowUpRight size={14} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></Button></a>
                                <div className="pt-6"><div className="text-center text-gray-400 text-sm">Available for freelance projects and full-time opportunities</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
