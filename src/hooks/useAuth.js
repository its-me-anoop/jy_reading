/**
 * A custom React hook that manages the authentication state of the current user.
 * 
 * This hook uses the Firebase Authentication and Firestore services to retrieve the
 * current user's information and store it in the component's state. It also
 * provides a loading state to indicate when the user data is being fetched.
 * 
 * @returns {object} An object containing the current user data and a loading state.
 * The `user` property is either `null` if the user is not logged in, or an object
 * containing the user's UID, email, and any additional data stored in Firestore.
 * The `isLoading` property is a boolean indicating whether the user data is
 * currently being fetched.
 */
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase';

export function useAuth() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                const userRef = doc(db, 'users', authUser.uid);
                const unsubscribeSnapshot = onSnapshot(userRef, (snapshot) => {
                    if (snapshot.exists()) {
                        const userData = snapshot.data();
                        setUser({
                            uid: authUser.uid,
                            email: authUser.email,
                            ...userData,
                        });
                    } else {
                        setUser(authUser);
                    }
                    setIsLoading(false);
                });

                return () => {
                    unsubscribeSnapshot();
                };
            } else {
                setUser(null);
                setIsLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return { user, isLoading };
}