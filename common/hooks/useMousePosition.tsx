import { useState, useEffect } from 'react';


// Inspiration for this snippet: Josh W. Comeau (https://www.joshwcomeau.com/snippets/react-hooks/use-mouse-position/)

type MousePositionType = {
    x: number | null;
    y: number | null;
}

const useMousePosition = () => {
    const [
        mousePosition,
        setMousePosition
    ] = useState<MousePositionType>({ x: null, y: null });

    const [mouseOverButton, setMouseOverButton] = useState(false)

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        const handleMouseLeave = () => {
            setMousePosition({ x: 0, y: 0 });
        };
        const handleMouseOver = (e: MouseEvent) => {
            if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLAnchorElement || (e.target as HTMLObjectElement).id === 'button-text') {
                setMouseOverButton(true);
                return;
            }
            setMouseOverButton(false);
        }
        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener("mouseout", handleMouseLeave);
        window.addEventListener('mouseover', handleMouseOver);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener("mouseout", handleMouseLeave);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);
    return { mousePosition, mouseOverButton };
};

export default useMousePosition;