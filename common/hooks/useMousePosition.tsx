import { useState, useEffect } from 'react';


// Credits for this snippet: Josh W. Comeau (https://www.joshwcomeau.com/snippets/react-hooks/use-mouse-position/)

type MousePositionType = {
    x: number | null;
    y: number | null;
}

const useMousePosition = () => {
    const [
        mousePosition,
        setMousePosition
    ] = useState<MousePositionType>({ x: null, y: null });

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        const handleMouseLeave = () => {
            setMousePosition({ x: 0, y: 0 });
        };
        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener("mouseout", handleMouseLeave);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener("mouseout", handleMouseLeave);
        };
    }, []);
    return mousePosition;
};

export default useMousePosition;