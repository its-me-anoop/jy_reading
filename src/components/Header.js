import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuth } from '../hooks/useAuth';

function Header() {
    const { user } = useAuth();

    const handleLogout = async () => {
        await auth.signOut();
    };

    return (
        <header className="bg-primary text-white py-4">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
                {user ? (
                    <Link to="/profile" className="text-xl sm:text-2xl font-bold font-sans mb-4 sm:mb-0">Jesus Youth Reading</Link>
                ) : (
                    <Link to="/" className="text-xl sm:text-2xl font-bold font-sans mb-4 sm:mb-0">Jesus Youth Reading</Link>
                )}
                <nav>
                    <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                        {user ? (
                            <>
                                <li><Link to="/profile" className="hover:text-background-light font-sans">Profile</Link></li>
                                {user.isAdmin && <li><Link to="/admin" className="hover:text-background-light font-sans">Admin</Link></li>}
                                <li><button onClick={handleLogout} className="hover:text-background-light font-sans">Logout</button></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/login" className="hover:text-background-light font-sans">Login</Link></li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;