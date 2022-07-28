import { isAdminClient } from '@/db/firebase-auth';
import { Auth, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const useClientAuth = (
    auth: Auth
): [User | null | undefined, boolean, boolean] => {
    const [user, userLoading] = useAuthState(auth);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        if (user) {
            const loadAdmin = async () => {
                const admin = await isAdminClient(user.uid);
                setAdmin(admin);
            };
            loadAdmin();
        }
    }, [user]);

    return [user, userLoading, admin];
};

export default useClientAuth;
