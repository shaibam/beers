import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function usePageIndex() {
    const l = useLocation();

    const pageIndexMemo = useMemo(() => {
        const p = l.pathname.split('/');            
        return parseInt(p[2]) || 1;
    }, [l.pathname])

    return pageIndexMemo;
}