export default function SkillBadge({ name }) {
    return (
        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 text-sm rounded-full m-1 inline-block">
            {name}
        </span>
    );
}