import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout({ children, toggleDark, isDark }) {
    return (
        <>
            <Header toggleDark={toggleDark} isDark={isDark} />
            <main>{children}</main>
            <Footer />
        </>
    );
}