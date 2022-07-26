import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import CursorTool from '../common/components/CursorTool';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <CursorTool />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
