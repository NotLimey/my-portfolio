import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, firestore } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Admin = () => {
    const [user, isUserLoading] = useAuthState(auth);

    const signInWithGithub = async () => {
        const userCredentials = await signInWithPopup(
            auth,
            new GithubAuthProvider()
        );
        await setDoc(doc(firestore, 'users', userCredentials.user.uid), {
            uid: userCredentials.user.uid,
            email: userCredentials.user.email,
            name: userCredentials.user.displayName,
            provider: userCredentials.user.providerData[0].providerId,
            photoUrl: userCredentials.user.photoURL,
        });
    };

    return (
        <div>
            <h1>Admin</h1>
            <button onClick={signInWithGithub}>Sign in with Github</button>
            {isUserLoading ? <p>Loading...</p> : <p>{user?.displayName}</p>}
        </div>
    );
};

export default Admin;
