import { isAdminClient } from '@/db/firebase-auth';
import { app, auth } from '@/db/firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useClientAuth from 'common/hooks/useClientAuth';

const Login = () => {
    const [user, isLoading, admin] = useClientAuth(auth);
    const router = useRouter();

    const signInWithGoogle = async () => {
        const auth = getAuth(app);
        const userCredentials = await signInWithPopup(
            auth,
            new GoogleAuthProvider()
        );
        await setDoc(
            doc(getFirestore(app), 'users', userCredentials.user.uid),
            {
                uid: userCredentials.user.uid,
                email: userCredentials.user.email,
                name: userCredentials.user.displayName,
                provider: userCredentials.user.providerData[0].providerId,
                photoUrl: userCredentials.user.photoURL,
            }
        ).then(() => {
            router.push('/admin');
        });
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (user) {
        return (
            <div>
                <h2>You are already logged in</h2>
                {!admin ? (
                    <p>You have no permissions</p>
                ) : (
                    <Link href="/admin">Admin page</Link>
                )}
                <br />
                <button onClick={() => auth.signOut()}>Sign out</button>
            </div>
        );
    }

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col bg-primary text-white">
            <p className="mb-5 text-xl">Login with google: </p>
            <button
                className="bg-white/10 shadow-xl p-2 rounded-full"
                onClick={signInWithGoogle}
            >
                <img id="button-text" src="/google.svg" alt="" />
            </button>
        </div>
    );
};

export default Login;
