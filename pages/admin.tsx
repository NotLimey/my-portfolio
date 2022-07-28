import ProtectedRoute from '@/components/ProtectedRoute';

const Admin = () => {
    return (
        <ProtectedRoute>
            <h1>Admin</h1>
        </ProtectedRoute>
    );
};

export default Admin;
