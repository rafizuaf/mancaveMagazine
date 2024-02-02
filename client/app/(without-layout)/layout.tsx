import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "../../lib/utils"
import '../globals.css';

export const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-plus-jakarta-sans",
})

export const metadata: Metadata = {
    title: "Login | Mancave Magazine",
    description: "Men's lifestyle.",
};

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased scroll-smooth",
                plusJakartaSans.variable
            )}>
                {children}
            </body>
        </html>
    );
}