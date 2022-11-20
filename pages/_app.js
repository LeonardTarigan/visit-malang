import GlobalProvider from '../context/GlobalContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <GlobalProvider>
            <Component {...pageProps} />
        </GlobalProvider>
    );
}

export default MyApp;
