import { auth } from '@/db/firebase';
import { AuthContext } from 'common/providers/AuthProvider';
import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { useContext } from 'react';
import Button from './Button';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const state = useContext(AuthContext);

    if (state.isLoading) return <></>;

    if (!state.user) {
        return (
            <div className="flex justify-center items-center w-full min-h-screen">
                <p>Your not authenticated</p>
                <Link href={'/login'}>
                    <Button text="Login" onClick={() => {}} />
                </Link>
            </div>
        );
    }

    if (!state.isAdmin) {
        return (
            <div className="flex justify-center items-center w-full min-h-screen">
                <p>You dont have permission to access this</p>
                <Button text="Log out" onClick={() => signOut(auth)} />
            </div>
        );
    }

    return <>{children}</>;
};

export default ProtectedRoute;
