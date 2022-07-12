import { useEffect, useState } from "react";
import { useWindowScrollPosition, useWindowSize } from "rooks";

export default function usePageIndex() {
    const [pageIndex, setPageIndex] = useState(1);
    const { scrollX, scrollY } = useWindowScrollPosition();
    const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
    // console.log({ scrollX, scrollY, innerWidth, innerHeight, outerHeight, outerWidth })

    // useEffect(() => {
    //     if (scrollY >= pageIndex * innerHeight)
    //         setPageIndex(pageIndex + 1);
    // }, [scrollY])

    return pageIndex;
}