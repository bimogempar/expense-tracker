// contexts/AuthContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/libs/supabase/supabaseClient';
import { User } from '@supabase/supabase-js';

// Define the shape of the context data
interface AuthContextType {
    authUser: User | null;
    loading: boolean;
    logout: () => Promise<void>;
}

// Create the context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [authUser, setAuthUser] = useState<User | null>(null);  // Fix type here
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSession = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (error) {
                console.error('Error getting user:', error);
            } else {
                setAuthUser(data.user);
            }
            setLoading(false);
        };

        fetchSession();
    }, []);

    const logout = async () => {
        await supabase.auth.signOut();  // Supabase logout function
        setAuthUser(null);              // Reset the authUser state to null
    };

    return (
        <AuthContext.Provider value={{ authUser, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Create a custom hook to use the AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
