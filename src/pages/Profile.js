import React from 'react';
import { useAuth } from '../hooks/useAuth';

function Profile() {
    const { user } = useAuth();

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <section className="bg-background py-12 sm:py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-md shadow-md">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-primary">Profile</h1>
                    <div className="flex flex-col items-center">
                        {user.profilePictureUrl && (
                            <img
                                src={user.profilePictureUrl}
                                alt="Profile"
                                className="w-32 h-32 rounded-full mb-4"
                            />
                        )}
                        <p className="text-xl font-semibold mb-2">{user.name}</p>
                        <p className="text-gray-600 mb-4">{user.email}</p>
                        <p className="text-gray-600 mb-2">Phone: {user.phoneNumber}</p>
                        <p className="text-gray-600 mb-2">Address: {user.address}</p>
                        <p className="text-gray-600">Date of Birth: {user.dateOfBirth}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;