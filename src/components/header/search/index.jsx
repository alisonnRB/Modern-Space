"use client";

import Image from "next/image";
import search from "@/assets/header/search.svg";
import { useState } from "react";
import { useSearchParams } from 'next/navigation';
import { useRouter } from "next/navigation";

export default function Search() {
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();


    const handleSubmit = (e) => {
        e.preventDefault();
        const type = searchParams.get('type') ? searchParams.get('type') : "all";
        router.push(`/store/produtos?Search=${searchValue}&type=${type}`);
    };

    return (
        <>
            {!open ? (
                <span onClick={() => setOpen(true)}>
                    <Image
                        src={search}
                        className="w-[70%]"
                        alt="Search icon"
                    />
                </span>
            ) : (
                <form className="absolute right-[7.5%] flex gap-[3%]" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="pl-[1em]"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button type="submit">
                        <Image
                            src={search}
                            className="w-[70%]"
                            alt="Submit search"
                        />
                    </button>
                </form>
            )}
        </>
    );
}
