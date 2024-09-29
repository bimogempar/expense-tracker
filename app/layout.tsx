import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Manage your expense bruh!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="max-w-md mx-auto h-screen">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
