export default function Contact() {
    return (
        <section className="bg-white py-12 max-w-[90%] w-full mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-indigo-800 text-center">Contact</h2>
            <div className="text-center space-y-4 text-lg text-gray-700">
                <p>
                    <span className="font-semibold">Email:</span>{' '}
                    <a href="mailto:kadappasavalagi@gmail.com" className="text-indigo-600 hover:underline">
                        kadappasavalagi@gmail.com
                    </a>
                </p>
                <p>
                    <span className="font-semibold">Phone:</span>{' '}
                    <a href="tel:+918660195703" className="text-indigo-600 hover:underline">
                        +91 8660195703
                    </a>
                </p>
                <p>
                    <span className="font-semibold">LinkedIn:</span>{' '}
                    <a
                        href="https://www.linkedin.com/in/kadappasavalagi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline"
                    >
                        linkedin.com/in/kadappasavalagi
                    </a>
                </p>
            </div>
        </section>
    );
}
