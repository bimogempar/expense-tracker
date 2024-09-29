"use client"

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function Home() {
    const { loading } = useAuth();
    if (loading) return <div>Loading</div>
    return (
        <div className="flex flex-col text-center p-12">
            <h1>expense tracker</h1>
            <h2>save your money before old</h2>
            <div className="mt-12">
                <Link href="/auth/login" className="p-2 outline">continue</Link>
            </div>
        </div>
    );
}
