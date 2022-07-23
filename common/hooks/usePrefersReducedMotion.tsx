import { ChangeEvent, useEffect, useState } from "react";

// Credits for this snippet: Josh W. Comeau (https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/)

const QUERY = '(prefers-reduced-motion: no-preference)';

const isRenderingOnServer = typeof window === 'undefined';

const getInitialState = () => {
    return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;
};

function usePrefersReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(
        getInitialState
    );
    useEffect(() => {
        const mediaQueryList = window.matchMedia(QUERY);
        const listener = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(!event.matches);
        };
        if (mediaQueryList.addEventListener) {
            mediaQueryList.addEventListener('change', listener);
        } else {
            mediaQueryList.addListener(listener);
        }
        return () => {
            if (mediaQueryList.removeEventListener) {
                mediaQueryList.removeEventListener('change', listener);
            } else {
                mediaQueryList.removeListener(listener);
            }
        };
    }, []);
    return prefersReducedMotion;
}

export default usePrefersReducedMotion;