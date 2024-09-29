"use client"
import React from 'react'
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const { loading } = useAuth();
    const segment = useSelectedLayoutSegment();

    if (loading) return <div>loading..</div>

    return (
        <div className='flex flex-col h-screen'>
            <div className="flex-grow max-w-md w-full mx-auto p-4">
                {children}
            </div>

            <div className='w-full bg-gray-50 shadow-md fixed bottom-0 max-w-md mx-auto text-sm'>
                <div className="flex justify-between gap-0">
                    <Link
                        href="/dashboard/tracker"
                        className={`py-2 w-full text-center flex flex-col hover:cursor-pointer ${segment === 'tracker' ? 'bg-gray-100' : ''
                            }`}
                    >
                        <span>📊</span>
                        <span className="text-[11px]">Tracker</span>
                    </Link>

                    <Link
                        href="/dashboard/profile"
                        className={`py-2 w-full text-center flex flex-col hover:cursor-pointer ${segment === 'profile' ? 'bg-gray-100' : ''
                            }`}
                    >
                        <span>👤</span>
                        <span className="text-[11px]">Profile</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
