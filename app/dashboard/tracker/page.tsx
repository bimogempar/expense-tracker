"use client"
import React from 'react'
import { useAuth } from '@/context/AuthContext';
import { redirect } from 'next/navigation';

export default function TrackerPage() {
    const { authUser } = useAuth();
    if (!authUser) {
        return redirect('/')
    }
    return (
        <div>
            <h1>Hello, {authUser.user_metadata.full_name}</h1>
        </div>
    )
}
