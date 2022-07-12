import { useState } from "react";
// import { useLocation } from "react-router-dom";

export default function usePageIndex() {
    const [pageIndex, setPageIndex] = useState(1);
    // const l = useLocation();
    // console.log({ l });

    return pageIndex;
}