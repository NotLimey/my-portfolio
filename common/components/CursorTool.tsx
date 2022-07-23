import { CSSProperties, useEffect, useRef } from "react";
import { Style } from "util";
import useMousePosition from "../hooks/useMousePosition";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const CursorTool = () => {
    const ref = useRef<HTMLDivElement>(null)
    const mousePosition = useMousePosition();
    const prefersReducedMotion = usePrefersReducedMotion();

    const transform: null | CSSProperties = prefersReducedMotion
        ? null
        : {
            transform: `translate(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
            display: mousePosition.x === 0 && mousePosition.y === 0 ? "none" : "block",
        };

    return (
        <div className="absolute w-12 h-12 border-white/30 top-0 border-2 rounded-full" style={transform ?? {}} ref={ref}></div>
    );
}

export default CursorTool;