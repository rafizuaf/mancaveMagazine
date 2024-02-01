'use client'

import React, { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
    // Add any additional props if needed
}

const SearchBar: React.FC<SearchBarProps> = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = (event: FormEvent) => {
        event.preventDefault();
        // Implement your search logic here using the searchTerm state
        console.log("Searching for:", searchTerm);
        // You can perform further actions, such as making an API call or updating search results
    };

    return (
        <>
            <form onSubmit={handleSearch} className="relative w-full mb-5 ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <Input
                    type="text"
                    placeholder="Search"
                    className="pl-12 pr-4"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </form>
        </>
    );
};

export default SearchBar;
