import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import NextAuthProvider from "@/providers/NextAuthProvider";
import BookingLink from "@/components/BookingLink";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VenueVista",
  description: "Event Venue Booking Platform",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950`}>
        <NextAuthProvider session={session}>
          <nav className="bg-gray-900 p-4 fixed w-full top-0 z-50 border-b border-gray-800">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              
              <div
                className="text-white text-xl font-bold px-4 py-2 rounded-lg"
                style={{
                  boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)'
                }}
              >
                Venue
              </div>

              
              <BookingLink />
            </div>
          </nav>
          <main className="pt-16">
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}