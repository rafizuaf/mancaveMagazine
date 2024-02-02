'use client'

import React from 'react';
import Link from "next/link"
import { useState } from "react"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function Signup() {
    const [form, setForm] = useState({ email: "", password: "" })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
    // console.log(form);
    return (
        <div className="w-full min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div className="w-full sm:max-w-md p-5 mx-auto">
                <Link href="/">
                    <img src="/mancave-hd-transparent.png" alt="Mancave Magazine" className="w-96 mb-6" />
                </Link>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <Label className="block mb-3 font-semibold" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={(e) => {
                                setForm((prevForm) => ({ ...prevForm, email: e.target.value }));
                            }}
                            placeholder="Enter your email"
                            className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <Label className="block mb-3 font-semibold" htmlFor="password">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={(e) => {
                                setForm((prevForm) => ({ ...prevForm, password: e.target.value }));
                            }}
                            placeholder="Enter your password"
                            className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                        />
                    </div>
                    <div className="mt-6">
                        <Button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 bg-mancave border border-transparent rounded-md font-semibold capitalize text-white/90 hover:bg-red-800 active:bg-red-800 focus:outline-none focus:border-red-800 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                            Sign Up
                        </Button>
                    </div>
                    <div className="mt-3 text-center">
                        <Link href="/login" className="underline hover:text-mancave transition duration-300 text-sm font-semibold">
                            Have an account? Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}