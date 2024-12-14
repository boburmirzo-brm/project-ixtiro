import React from "react";
import LazyLoading from "@/components/lazy-loading/LazyLoading";

export const Suspense = ({children})=>{
    return <React.Suspense fallback={<LazyLoading/>}>{children}</React.Suspense>
}
