import projects from '../data/projects';
import skills from '../data/skills';
import experience from '../data/experience';
import ProjectCard from '../components/ProjectCard';
import SkillBadge from '../components/SkillBadge';

export default function Home() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <section id="projects" className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Projects</h2>
                <div className="grid gap-6">
                    {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
                </div>
            </section>

            <section id="skills" className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                <div className="flex flex-wrap">{skills.map(s => <SkillBadge key={s} name={s} />)}</div>
            </section>

            <section id="experience">
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                {experience.map((exp, i) => (
                    <div key={i} className="mb-6">
                        <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
                        <p className="text-sm text-gray-500">{exp.period}</p>
                        <ul className="list-disc ml-6 mt-2 text-gray-700">
                            {exp.description.map((d, idx) => <li key={idx}>{d}</li>)}
                        </ul>
                    </div>
                ))}
            </section>
        </main>
    );
}