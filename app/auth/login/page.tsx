"use client"
import React from 'react'
import { supabase } from '@/libs/supabase/supabaseClient';
import { useAuth } from '@/context/AuthContext';
import { redirect } from 'next/navigation';

export default function LoginPage() {
    const { authUser, loading } = useAuth();

    const handleGoogleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
        if (error) {
            console.error('Error logging in with Google:', error.message);
        }
        return data;
    };

    if (loading) return <div>loading...</div>

    if (authUser) {
        redirect('/dashboard/tracker');
    }

    if (!authUser)
        return (
            <div className='flex flex-col text-center p-12'>
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <div>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={handleGoogleLogin}
                    >
                        Sign in with Google
                    </button>
                </div>
            </div>
        );
}
