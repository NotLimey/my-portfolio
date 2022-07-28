import Loading from '@/components/Loading';
import { User } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

export interface AuthProviderProps {
    children: React.ReactNode;
    user: User | null | undefined;
    isLoading: boolean;
    isAdmin: boolean;
}

export const AuthContext = createContext<AuthProviderProps>({
    children: null,
    user: null,
    isLoading: false,
    isAdmin: false,
});

const AuthProvider = (value: AuthProviderProps) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!value.isLoading) {
            setTimeout(() => setIsLoading(false), 200);
        }
    }, [value.isLoading]);

    return (
        <AuthContext.Provider value={value}>
            <Loading isLoading={isLoading} />
            <div>{value.children}</div>
        </AuthContext.Provider>
    );
};

export default AuthProvider;
