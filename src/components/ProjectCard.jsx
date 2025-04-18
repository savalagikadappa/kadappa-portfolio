export default function ProjectCard({ title, description, tech, link, liveLink }) {
    return (
        <div className="w-full bg-white shadow-lg rounded-xl p-6 transition-transform duration-300 hover:scale-105 min-w-[300px] sm:min-w-[350px] lg:min-w-[400px] max-w-[450px]">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 text-center hover:text-indigo-500 transition-colors duration-300">
                {title}
            </h3>

            <p className="text-gray-600 text-sm sm:text-base mb-6 text-center leading-relaxed hover:text-gray-800 transition-colors duration-300">
                {description}
            </p>

            <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
                {tech.map(t => (
                    <li
                        key={t}
                        className="bg-gray-300 text-gray-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full hover:bg-indigo-500 transition-transform duration-300 hover:scale-105"
                    >
                        {t}
                    </li>
                ))}
            </ul>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                {liveLink && (
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-semibold text-indigo-600 hover:text-indigo-700 hover:underline px-4 py-2 rounded-md border-2 border-indigo-600 hover:bg-indigo-100 transition-all duration-300"
                    >
                        View Live Project
                    </a>
                )}
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-semibold text-indigo-600 hover:text-indigo-700 hover:underline px-4 py-2 rounded-md border-2 border-indigo-600 hover:bg-indigo-100 transition-all duration-300"
                    >
                        View Repository
                    </a>
                )}
            </div>
        </div>
    );
}
