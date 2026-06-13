import heroImage from '../image/profile.png';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useEffect, useRef } from 'react';

// Daftarkan plugin
gsap.registerPlugin(TextPlugin);

export default function Hero() {

    const textRef = useRef(null);
    const portfolioRef = useRef(null);
    const websiteRef = useRef(null);
    const imageRef = useRef(null);
    
    // Refs for floating SVGs
    const shape1Ref = useRef(null);
    const shape2Ref = useRef(null);
    const shape3Ref = useRef(null);

    useEffect(() => {
        const fullText = 'Hello, I’m <span id="nama">Muhammad Afrizal</span>. Welcome to my';

        // Kosongkan teks awal
        textRef.current.innerHTML = '';  

        // Animasi untuk teks pertama
        gsap.to(textRef.current, {
            text: fullText,  // Isi dengan teks secara bertahap
            duration: 3,     // Durasi animasi
            ease: 'power2.inOut',  // Efek easing
        });

        // Animasi untuk teks "Portfolio" dengan delay
        gsap.fromTo(portfolioRef.current, {
            opacity: 0,
            y: 50, // Posisi awal
        }, {
            opacity: 1,
            y: 0,  // Posisi akhir
            duration: 1,
            delay: 3.2,  // Delay setelah animasi teks utama
            ease: 'power2.inOut',
        });

        // Animasi untuk teks "Website" dengan delay
        gsap.fromTo(websiteRef.current, {
            opacity: 0,
            y: 50, // Posisi awal
        }, {
            opacity: 1,
            y: 0,  // Posisi akhir
            duration: 1,
            delay: 3.5,  // Delay lebih lama untuk teks "Website"
            ease: 'power2.inOut',
        });

        // Animasi untuk gambar fade
        gsap.fromTo(imageRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 2,
            delay: 3.7,  // Delay gambar agar muncul setelah teks
            ease: 'power2.inOut',
        });

        // Parallax effect for SVGs
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
            const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1

            if (shape1Ref.current) gsap.to(shape1Ref.current, { x: x * 40, y: y * 40, rotation: x * 45, duration: 1, ease: 'power2.out' });
            if (shape2Ref.current) gsap.to(shape2Ref.current, { x: x * -60, y: y * -60, rotation: x * -90, duration: 1, ease: 'power2.out' });
            if (shape3Ref.current) gsap.to(shape3Ref.current, { x: x * 80, y: y * -40, rotation: x * 120, duration: 1, ease: 'power2.out' });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="Hero" className="h-[650px] sm:h-[80vh] flex justify-center items-center overflow-hidden">
            <div className="flex flex-wrap justify-center w-full">
                <div className="w-full items-center px-3 relative text-center h-[50vh]">
                    {/* Text overlays with z-0 (behind the image) */}
                    <div className="relative z-0 pointer-events-none">
                        <h5 ref={textRef} className="text-[.8em] font-avenirItalic lg:text-[1em] text-white/70"></h5>
                        <div className="mt-10 text-[15vw] leading-[70px] md:leading-[100px] lg:leading-[150px] lg:text-[12vw]">
                            <h1 ref={portfolioRef} className="font-sharpSemiBold25 text-white select-none">Portfolio</h1>
                            <h1 ref={websiteRef} className="font-sharpSemiBold25 text-white select-none">Website</h1>
                        </div>
                    </div>
                    
                    {/* Floating Interactive SVGs */}
                    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
                        <svg ref={shape1Ref} className="absolute top-[20%] left-[15%] w-12 h-12 text-[#00F0FF] opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        
                        <svg ref={shape2Ref} className="absolute top-[60%] right-[15%] w-16 h-16 text-secondary opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <circle cx="12" cy="12" r="10" />
                        </svg>

                        <svg ref={shape3Ref} className="absolute bottom-[10%] left-[30%] w-10 h-10 text-[#0055FF] opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        </svg>
                    </div>
                    
                    {/* Centered Profile Image Wrapper with Vignette and z-10 (layered in front of the text) */}
                    <div 
                        ref={imageRef}
                        className="absolute top-[70px] sm:top-[90px] md:top-[110px] lg:top-[120px] left-1/2 -translate-x-1/2 w-[320px] sm:w-[420px] md:w-[500px] lg:w-[580px] h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] overflow-hidden group cursor-pointer z-10"
                    >
                        <img
                            src={heroImage}
                            alt="profile"
                            className="w-full h-full object-contain object-bottom filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                        />
                        {/* Vignette bottom blur/fade mask */}
                        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none z-20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
