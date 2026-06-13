import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
    const cursorDotRef = useRef(null);
    const cursorRingRef = useRef(null);

    useEffect(() => {
        const dot = cursorDotRef.current;
        const ring = cursorRingRef.current;

        // Hide default cursor on desktop
        document.body.style.cursor = 'none';

        const onMouseMove = (e) => {
            gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.3, ease: 'power2.out' });
        };

        const onMouseEnter = () => {
            gsap.to(ring, { scale: 1.5, backgroundColor: 'rgba(0, 240, 255, 0.2)', duration: 0.3 });
            gsap.to(dot, { scale: 0, duration: 0.3 });
        };

        const onMouseLeave = () => {
            gsap.to(ring, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
            gsap.to(dot, { scale: 1, duration: 0.3 });
        };

        window.addEventListener('mousemove', onMouseMove);
        
        // Add hover effect to interactive elements
        const attachInteractions = () => {
            const interactables = document.querySelectorAll('a, button, input, textarea, .cursor-pointer');
            interactables.forEach((el) => {
                el.style.cursor = 'none'; // Ensure default cursor is hidden on hover
                el.addEventListener('mouseenter', onMouseEnter);
                el.addEventListener('mouseleave', onMouseLeave);
            });
        };

        // Attach initially
        attachInteractions();

        // Optional: Re-attach on DOM mutations if necessary (simple timeout for demo)
        setTimeout(attachInteractions, 1000);

        return () => {
            document.body.style.cursor = 'auto';
            window.removeEventListener('mousemove', onMouseMove);
            const interactables = document.querySelectorAll('a, button, input, textarea, .cursor-pointer');
            interactables.forEach((el) => {
                el.style.cursor = 'auto';
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return (
        <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999]">
            <div ref={cursorDotRef} className="absolute top-0 left-0 w-2 h-2 bg-[#00F0FF] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div ref={cursorRingRef} className="absolute top-0 left-0 w-8 h-8 border border-[#00F0FF] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
    );
}
