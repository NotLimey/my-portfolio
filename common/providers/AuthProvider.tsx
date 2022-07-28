import Loading from '@/components/Loading';
import { User } from 'firebase/auth';
import { useRouter } from 'next/router';
import { createContext } from 'react';

interface AuthProviderProps {
    children: React.ReactNode;
    user: User | null | undefined;
    isLoading: boolean;
    isAdmin: boolean;
}

const AuthContext = createContext<AuthProviderProps>({
    children: null,
    user: null,
    isLoading: false,
    isAdmin: false,
});

const AuthProvider = (value: AuthProviderProps) => {
    const router = useRouter();

    return (
        <AuthContext.Provider value={value}>
            <Loading isLoading={value.isLoading} />
            {!value.isLoading && value.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
