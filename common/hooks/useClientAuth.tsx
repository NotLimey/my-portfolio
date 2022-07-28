import { isAdminClient } from '@/db/firebase-auth';
import { Auth, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const useClientAuth = (
    auth: Auth
): [User | null | undefined, boolean, boolean] => {
    const [user, userLoading] = useAuthState(auth);
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        if (user) {
            const loadAdmin = async () => {
                const admin = await isAdminClient(user.uid);
                setAdmin(admin);
                setAdminLoading(false);
            };
            loadAdmin();
        }
    }, [user]);

    return [user, userLoading || adminLoading, admin];
};

export default useClientAuth;
