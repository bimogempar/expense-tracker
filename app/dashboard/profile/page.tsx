"use client"
import React from 'react'
import { useAuth } from '@/context/AuthContext';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default function ProfilePage() {
    const { authUser, logout } = useAuth();
    if (!authUser) {
        return redirect('/')
    }
    const handleLogout = async () => {
        if (window.confirm('sure logout?')) {
            await logout();
        } else {
            console.log('cancel')
        }
    }
    return (
        <div>
            <Image width={100} height={100} src={authUser.user_metadata.avatar_url} alt='User Profile' />
            <h1>{authUser.user_metadata.full_name}</h1>
            <button className='rounded-md' onClick={handleLogout}>logout</button>
        </div>
    )
}
