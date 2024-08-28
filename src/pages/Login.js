/**
 * The `Login` component is responsible for rendering the login form and handling the login process.
 * 
 * It uses the `useState` hook to manage the state of the email, password, loading status, and error message.
 * The `handleSubmit` function is called when the login form is submitted, and it attempts to sign in the user with the provided email and password using the `signInWithEmailAndPassword` function from the Firebase Authentication API.
 * If the login is successful, the user is redirected to the `/profile` route using the `useNavigate` hook. If there is an error, the error message is displayed.
 * The component also includes a link to the registration page for users who don't have an account.
 */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { motion } from 'framer-motion';
import { auth } from '../firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        if (!email || !password) {
            setError('Please enter email and password');
            setIsLoading(false);
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Login successful');
            setIsLoading(false);
            setEmail('');
            setPassword('');
            navigate('/profile');
        } catch (error) {
            console.log('Login error:', error);
            setError(error.message);
            setIsLoading(false);
        }
    }; return (
        <section className="bg-background py-12 sm:py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-md shadow-md"
                >
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-primary">Login</h1>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 font-bold">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 font-bold">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <motion.button
                            type="submit"
                            disabled={isLoading}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full px-4 py-2 mt-6 bg-secondary text-white rounded-md focus:outline-none hover:bg-secondary-dark transition duration-300"
                        >
                            {isLoading ? 'Logging in...' : 'Login'}
                        </motion.button>
                    </form>
                    <p className="mt-4 text-center text-sm sm:text-base">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-secondary hover:text-secondary-dark transition duration-300">
                            Register
                        </Link>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default Login;