export default function Footer() {
    return (
        <footer className="text-center text-sm py-4 text-gray-500 mt-10">
            &copy; {new Date().getFullYear()} Kadappa Savalagi · <a className="text-indigo-500" href="mailto:kadappasavalagi@gmail.com">kadappasavalagi@gmail.com</a>
        </footer>
    );
}