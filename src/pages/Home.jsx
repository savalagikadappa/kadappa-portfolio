import { useState } from 'react';
import projects from '../data/projects';
import skills from '../data/skills';
import experience from '../data/experience';
import ProjectCard from '../components/ProjectCard';
import SkillBadge from '../components/SkillBadge';
import Contact from '../components/Contact';

export default function Home() {
    // State to toggle resume visibility
    const [showResume, setShowResume] = useState(false);

    // Function to toggle resume visibility
    const toggleResume = () => setShowResume(!showResume);

    return (
        <main className="max-w-7xl mx-auto px-4 py-8 overflow-x-hidden">
            {/* Resume Button */}
            <section id="resume" className="mb-12 flex justify-center items-center">
                <div className="flex justify-center items-center w-full sm:w-1/2">
                    {/* Button to toggle resume visibility */}
                    <button
                        onClick={toggleResume}
                        className="transition duration-300 ease-in-out transform hover:scale-105 text-white bg-indigo-600 hover:bg-indigo-700 font-extrabold text-lg py-3 px-10 rounded-xl shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        {showResume ? "Hide Resume" : "Show Resume"}
                    </button>

                </div>
            </section>

            {/* Resume Section - Shown only if showResume is true */}
            {showResume && (
                <section className="mb-12">
                    <iframe
                        src="/resume.pdf"
                        width="100%"
                        height="600px"
                        className="rounded-lg"
                        style={{
                            border: "none",
                            zoom: "100%",  // Ensure it shows at 100% zoom
                        }}
                    />
                </section>
            )}

            {/* Projects Section */}
            <section id="projects" className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-indigo-800 text-white">Projects</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {projects.map((p, i) => (
                        <ProjectCard key={i} {...p} />
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-indigo-800 max-w-[90%] w-full mx-auto text-white">Skills</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {skills.map(s => <SkillBadge key={s} name={s} icon="💻" />)}
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-12 max-w-[90%] w-full mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-indigo-800 text-white">Experience</h2>
                {experience.map((exp, i) => (
                    <div key={i} className="mb-8 bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold text-indigo-700">{exp.role} @ {exp.company}</h3>
                        <p className="text-sm text-gray-500">{exp.period}</p>
                        <ul className="list-disc ml-6 mt-2 text-gray-700">
                            {exp.description.map((d, idx) => <li key={idx}>{d}</li>)}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Contact Section */}
            <section id="contact" className="mt-16">
                <Contact />
            </section>

        </main>
    );
}