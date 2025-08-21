import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/experiences';

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl" style={{ backgroundImage: `linear-gradient(135deg, ${exp.color.split(' ')[0]}, ${exp.color.split(' ')[1]})` }} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-2xl mb-2">{exp.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                      <p className="text-lg text-blue-400 mb-1">{exp.role}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1"><Calendar size={14} /><span>{exp.period}</span></div>
                        <div className="flex items-center space-x-1"><MapPin size={14} /><span>{exp.location}</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {exp.achievements.map((a, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300 leading-relaxed">{a}</p>
                      </div>
                    ))}
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
