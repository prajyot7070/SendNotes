import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AppContent } from '../context/AppContext';

axios.defaults.withCredentials = true;  // Ensure cookies are sent with every request

const UserLogin = () => {
    const navigate = useNavigate();
    const { backendUrl, setIsLoggedIn, getUserData } = useContext(AppContent);

    const [state, setState] = useState('Login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const endpoint = state === 'Sign Up' ? '/api/auth/register' : '/api/auth/login';
            const payload = state === 'Sign Up' ? { name, userId, email, password } : { userId, password };

            const { data } = await axios.post(`${backendUrl}${endpoint}`, payload);

            if (data.success) {
                setIsLoggedIn(true);
                getUserData();
                navigate('/');
                toast.success(`${state === 'Sign Up' ? 'Account created' : 'Login successful'}!`);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'An unexpected error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-white to-blue-500">
            <div className="bg-blue-100 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm">
                <h2 className="text-3xl font-semibold text-gray-700 text-center mb-3">
                    {state === 'Sign Up' ? 'Create Account' : 'Login'}
                </h2>
                <p className="text-center text-sm mb-6 text-violet-700">
                    {state === 'Sign Up' ? 'Create your account' : 'Login to your account!'}
                </p>

                <form onSubmit={onSubmitHandler}>
                    {state === 'Sign Up' && (
                        <>
                            <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-blue-50">
                                <img src={assets.person_icon} alt="Person Icon" />
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    className="bg-transparent outline-none text-gray-600"
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                />
                            </div>
                            <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-blue-50">
                                <img src={assets.mail_icon} alt="Mail Icon" />
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className="bg-transparent outline-none text-gray-600"
                                    type="email"
                                    placeholder="Email ID"
                                    required
                                />
                            </div>
                        </>
                    )}

                    <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-blue-50">
                        <img src={assets.person_icon} alt="URN Icon" />
                        <input
                            onChange={(e) => setUserId(e.target.value)}
                            value={userId}
                            className="bg-transparent outline-none text-gray-600"
                            type="text"
                            placeholder="Enter College URN"
                            required
                        />
                    </div>

                    <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-blue-50">
                        <img src={assets.lock_icon} alt="Lock Icon" />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="bg-transparent outline-none text-gray-600"
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-900 text-white font-medium"
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : state}
                    </button>
                </form>

                {state === 'Sign Up' ? (
                    <p className="text-gray-600 text-center text-xs my-4">
                        Already have an account?{' '}
                        <span
                            onClick={() => setState('Login')}
                            className="text-blue-900 cursor-pointer underline"
                        >
                            Login here
                        </span>
                    </p>
                ) : (
                    <p className="text-gray-600 text-center text-xs my-4">
                        Don't have an account?{' '}
                        <span
                            onClick={() => setState('Sign Up')}
                            className="text-blue-900 cursor-pointer underline"
                        >
                            Sign Up
                        </span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default UserLogin;
