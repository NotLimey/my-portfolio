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
    if (value.isLoading && router.pathname != '/') {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={value}>
            {value.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
