import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import CursorTool from '../common/components/CursorTool';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthProvider from 'common/providers/AuthProvider';
import useClientAuth from 'common/hooks/useClientAuth';
import { auth } from '@/db/firebase';

function MyApp({ Component, pageProps }: AppProps) {
    const [user, isLoading, admin] = useClientAuth(auth);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <AuthProvider isAdmin={admin} isLoading={isLoading} user={user}>
            <CursorTool />
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default MyApp;
