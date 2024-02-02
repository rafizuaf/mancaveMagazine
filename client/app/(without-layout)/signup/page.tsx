import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function SignUp() {
    return (
        <div className="w-full min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div className="w-full sm:max-w-md p-5 mx-auto">
                <img src="/mancave-hd-transparent.png" alt="Mancave Magazine" className="w-96 mb-4" />
                <form>
                    <div className="mb-4">
                        <label className="block mb-1 font-semibold" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-semibold" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                        />
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 bg-mancave border border-transparent rounded-md font-semibold capitalize text-white/90 hover:bg-red-800 active:bg-red-800 focus:outline-none focus:border-red-800 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                            Sign Up
                        </button>
                    </div>
                    <div className="mt-6 text-center">
                        <Link href="/login" className="underline hover:text-mancave transition duration-300 text-lg font-semibold">
                            Have an account? Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}