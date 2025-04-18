import { FaPython, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaAws } from 'react-icons/fa';
import {
    SiCplusplus, SiMongodb, SiMysql, SiFlask, SiGithub, SiVercel, SiHeroku,
    SiSelenium, SiOpencv, SiTailwindcss, SiBootstrap, SiCodechef,
    SiLeetcode, SiGeeksforgeeks, SiCodeforces
} from 'react-icons/si';

const icons = {
    'C/C++': <SiCplusplus />,
    'Python': <FaPython />,
    'JavaScript': <FaJsSquare />,
    'HTML/CSS': <i className="devicon-html5-plain-wordmark text-3xl text-orange-600"></i>,
    'React.js': <FaReact />,
    'Node.js': <FaNodeJs />,
    'Express.js': <SiFlask />,
    'Flask': <SiFlask />,
    'MongoDB': <SiMongodb />,
    'MySQL': <SiMysql />,
    'Git': <FaGitAlt />,
    'GitHub': <SiGithub />,
    'AWS': <FaAws />,
    'Vercel': <SiVercel />,
    'Heroku': <SiHeroku />,
    'Selenium': <SiSelenium />,
    'YOLO': <SiOpencv />,
    'OpenCV': <SiOpencv />,
    'Tailwind CSS': <SiTailwindcss />,
    'Bootstrap': <SiBootstrap />,
};

const codingProfiles = [
    {
        name: 'LeetCode',
        icon: <SiLeetcode className="text-yellow-600 text-2xl" />,
        url: 'https://leetcode.com/u/kadappasavalagi/',
    },
    {
        name: 'Codeforces',
        icon: <SiCodeforces className="text-blue-700 text-2xl" />,
        url: 'https://codeforces.com/profile/itskadu',
    },
    {
        name: 'CodeChef',
        icon: <SiCodechef className="text-gray-800 text-2xl" />,
        url: 'https://www.codechef.com/users/kadappasavalag',
    },
    {
        name: 'GeeksforGeeks',
        icon: <SiGeeksforgeeks className="text-green-700 text-2xl" />,
        url: 'https://auth.geeksforgeeks.org/user/kadappasavalagi',
    },
    {
        name: 'GitHub',
        icon: <SiGithub className="text-black text-2xl" />,
        url: 'https://github.com/savalagikadappa',
    },
];

export default function SkillBadge({ name }) {
    const baseClass = "flex flex-col items-center justify-center m-4 text-white text-center ";

    if (name === 'Coding Profiles') {
        return (
            <div className="w-full max-w-[80%] w-full mx-auto">
                <h2 className="text-center text-xl font-bold text-white mb-2">Coding Profiles</h2>
                <div className="flex flex-wrap justify-center">
                    {codingProfiles.map((profile, idx) => (
                        <a
                            key={idx}
                            href={profile.url}
                            target="_blank"
                            rel="noreferrer"
                            className={baseClass}
                        >
                            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full mb-1">
                                {profile.icon}
                            </div>
                            <span className="text-sm font-semibold">{profile.name}</span>
                        </a>
                    ))}
                </div>
                <h2 className="text-center text-xl font-bold text-white mt-6 mb-2 max-w-[80%] w-full mx-auto
">Technical Skills</h2>
                <div className="flex flex-wrap justify-center">
                    {Object.keys(icons).map((skill, idx) => (
                        <div key={idx} className={baseClass}>
                            <span className="text-3xl mb-1">{icons[skill]}</span>
                            <span className="text-sm font-semibold">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return null;
}