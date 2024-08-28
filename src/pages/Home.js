import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBible, FaPray, FaUsers } from 'react-icons/fa';

function Home() {
    return (
        <section className="bg-primary py-12 sm:py-20 text-center">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white font-sans">Welcome to Jesus Youth Reading</h1>
                <p className="text-xl sm:text-2xl mb-8 text-background-light font-sans">Join our prayer group and connect with fellow believers.</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-12 mb-12"
            >
                <div className="flex flex-col items-center">
                    <FaBible className="text-4xl sm:text-5xl text-white mb-2" />
                    <p className="text-base sm:text-lg font-semibold text-white font-sans">Daily Readings</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaPray className="text-4xl sm:text-5xl text-white mb-2" />
                    <p className="text-base sm:text-lg font-semibold text-white font-sans">Prayer Sessions</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaUsers className="text-4xl sm:text-5xl text-white mb-2" />
                    <p className="text-base sm:text-lg font-semibold text-white font-sans">Community Events</p>
                </div>
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link to="/register" className="bg-secondary-dark text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-lg sm:text-xl hover:bg-secondary-light transition duration-300 shadow-lg font-sans">
                    Join Our Community
                </Link>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-8 sm:mt-12 text-background-light italic font-sans text-base sm:text-lg"
            >
                "For where two or three gather in my name, there am I with them." - Matthew 18:20
            </motion.p>
        </section>
    );
}

export default Home;