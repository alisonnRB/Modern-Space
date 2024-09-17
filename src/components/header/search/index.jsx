"use client";

import "./index.css";

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
            <span onClick={() => setOpen(true)}>
                <Image
                    src={search}
                    className="min-w-[70%] w-[70%]"
                    alt="Search icon"
                />
            </span>

            {!open ? null

                : (
                    <form className="fixed w-[100%] box flex justify-center pl-[10%]" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="pl-[1em] margin-auto rounded-sm"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </form>
                )}
        </>
    );
}
