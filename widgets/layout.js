import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
