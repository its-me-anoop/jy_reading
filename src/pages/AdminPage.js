import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function AdminPage() {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            console.log('User object in AdminPage:', user);
            console.log('isAdmin value in AdminPage:', user.isAdmin);

            if (!user.isAdmin) {
                // User is not an admin, redirect to home page or display an error message
                navigate('/');
            }
        }
    }, [user, navigate]);

    if (!user) {
        // User is not authenticated, redirect to login page
        navigate('/login');
        return null;
    }

    return (
        <section className="bg-background py-12 sm:py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-primary">Admin Dashboard</h1>
                {/* Add your admin-specific content here */}
            </div>
        </section>
    );
}

export default AdminPage;