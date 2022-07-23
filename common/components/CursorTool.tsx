import { CSSProperties, useRef } from "react";
import useMousePosition from "../hooks/useMousePosition";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { classNames } from "../scripts/tailwind";

const CursorTool = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { mouseOverButton, mousePosition } = useMousePosition();
    const prefersReducedMotion = usePrefersReducedMotion();

    const transform: null | CSSProperties =
        prefersReducedMotion || mousePosition.x === null
            ? {}
            : {
                transform: `translate(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
                display:
                    mousePosition.x === 0 && mousePosition.y === 0 ? "none" : "flex",
            };

    return (
        <div className="fixed z-50">
            <div
                className={classNames(
                    "absolute w-12 h-12 border-white/30 top-0 border-2 rounded-full z-50 mouse-pet flex justify-center items-center",
                    mouseOverButton && "mouse-pet-hover bg-primary w-16 h-16"
                )}
                style={transform}
                ref={ref}
            >
                <span className="-tracking-tighter text-xs">OPEN</span>
            </div>
        </div>
    );
};

export default CursorTool;
