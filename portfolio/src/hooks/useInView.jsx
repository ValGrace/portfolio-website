import { useEffect, useState, useRef} from "react";

export function useInView({threshold, rootMargin}) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    // observer.unobserve(entry.target); // Unobserve after first intersection
                }
                
            },
            {
                threshold: threshold || 0.1,
                rootMargin: rootMargin || "0px",
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    }, [threshold, rootMargin]);
    return [ref, isInView];
}