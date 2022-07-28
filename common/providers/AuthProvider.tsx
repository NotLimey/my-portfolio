import Loading from '@/components/Loading';
import { User } from 'firebase/auth';
import { createContext } from 'react';

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
    return (
        <AuthContext.Provider value={value}>
            <Loading isLoading={value.isLoading} />
            <div>{value.children}</div>
        </AuthContext.Provider>
    );
};

export default AuthProvider;
