export default function ProjectCard({ title, description, tech, link }) {
    return (
        <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <ul className="flex flex-wrap gap-2 mt-2 text-sm text-white">
                {tech.map(t => (
                    <li key={t} className="bg-indigo-500 px-2 py-1 rounded">{t}</li>
                ))}
            </ul>
            <a href={link} target="_blank" className="block mt-3 text-indigo-600 hover:underline">View Project</a>
        </div>
    );
}