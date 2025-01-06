"use client";

import { useEffect } from "react";

export default function ProdutoPage() {
    useEffect(() => {
        window.history.back();
    }, []);

    return null;
}