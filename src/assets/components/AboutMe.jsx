import html5 from '../icon/html5.svg';
import css3 from '../icon/css3.svg';
import javascript from '../icon/javascript.svg';
import bootstrap from '../icon/bootstrap.svg';
import tailwindcss from '../icon/tailwindcss.svg';
import react from '../icon/react.svg';
import laravel from '../icon/laravel.svg';
import codeigniter from '../icon/codeigniter.svg';
import git from '../icon/git.svg';
import mysql from '../icon/mysql.svg';
import php from '../icon/php.svg';
import postgresql from '../icon/postgresql.svg';
import typescript from '../icon/typescript.svg';
import nuxt from '../icon/nuxt.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
    const sectionsRef = useRef([]); // Declare sectionsRef here

    useEffect(() => {
        sectionsRef.current.forEach((section) => {
            if (section) {
                gsap.fromTo(
                    section,
                    { opacity: 0, y: 50 }, // Start state
                    {
                        opacity: 1,
                        y: 0, // End state
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%", // Trigger animation when the top of the element reaches 80% of the viewport
                            end: "bottom 20%",
                            toggleActions: "play none none reverse", // Play when entering, reverse when leaving
                        },
                    }
                );
            }
        });
    }, []);

    const capabilities = [
        {
            title: "Database Management",
            description: "Designing robust data structures and managing databases using PostgreSQL and SQL, ensuring efficient data flow.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            )
        },
        {
            title: "Frontend Engineering",
            description: "Building responsive, modern user interfaces utilizing React, JavaScript, and TypeScript.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            title: "API & System Integration",
            description: "Seamlessly connecting diverse systems and integrating complex APIs for smooth interactions.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            )
        },
        {
            title: "Internal Systems",
            description: "Proven experience in developing tailored internal tools to optimize business operations.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            title: "Agile & Independent",
            description: "Thriving in fast-paced environments with the ability to take ownership of projects independently.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ];

    return (
        <section id="AboutMe" className="mt-32 sm:mt-40 lg:mt-56 px-5 scroll-mt-28 flex justify-center">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full sm:max-w-[85%] lg:max-w-[80%]">
                        {/* Title at the top */}
                        <div className="judul w-full text-center mb-12" ref={(el) => sectionsRef.current.push(el)}>
                            <h1 className="shadow-text">About Me</h1>
                            <h1 className="section-text -mt-7">About Me</h1>
                        </div>

                        {/* 2-Column Grid for Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                            {/* Left Column (Who Am I & Skills) */}
                            <div className="flex flex-col gap-6">
                                <div
                                    ref={(el) => sectionsRef.current.push(el)}
                                    className="who p-6 sm:p-8 rounded-[24px] bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl flex-1 transform hover:-translate-y-1 hover:border-[#00F0FF]/20 transition-all duration-300 hover:shadow-[#00F0FF]/5"
                                >
                                    <h2 className="font-avenir85Heavy text-2xl mb-4 text-white/90">Who Am I?</h2>
                                    <p className="font-avenir55Roman text-sm leading-relaxed text-white/80">
                                        Hello, my name is Muhammad Afrizal, a full-stack web developer with a D3 degree in Software Application Engineering from Telkom University. I am passionate about crafting visually appealing and user-friendly web interfaces that enhance the digital experience. With a strong foundation in software engineering and a focus on front-end development, I am dedicated to creating websites that are both functional and aesthetically pleasing. Thank you for visiting my portfolio, and I look forward to connecting!
                                    </p>
                                </div>

                                <div
                                    ref={(el) => sectionsRef.current.push(el)}
                                    className="skills p-6 sm:p-8 rounded-[24px] bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl transform hover:-translate-y-1 hover:border-[#00F0FF]/20 transition-all duration-300 hover:shadow-[#00F0FF]/5"
                                >
                                    <h2 className="font-avenir85Heavy text-2xl mb-4 text-white/90">Skills</h2>
                                    <div className="skill flex flex-wrap justify-center gap-4 sm:gap-6 items-center mt-6">
                                        <img src={html5} alt="html" className="w-8 sm:w-10 lg:w-12 hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                                        <img src={css3} alt="css" className="w-8 sm:w-10 lg:w-12 hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                                        <img src={javascript} alt="javascript" className="w-8 sm:w-10 lg:w-12 hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                                        <img src={bootstrap} alt="bootstrap" className="w-8 sm:w-10 lg:w-12 hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                                        <img src={tailwindcss} alt="tailwindcss" className="w-8 sm:w-10 lg:w-12 hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                                        <img src={react} alt="react" className="w-8 sm:w-10 lg:w-12 hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                                        <img src={nuxt} alt="nuxt" className="w-8 sm:w-10 lg:w-12 hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                                        <img src={typescript} alt="typescript" className="w-8 sm:w-10 lg:w-12 hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                                        <img src={laravel} alt="laravel" className="w-8 sm:w-10 lg:w-12 hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                                        <img src={codeigniter} alt="codeigniter" className="w-8 sm:w-10 lg:w-12 hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                                        <img src={php} alt="php" className="w-8 sm:w-10 lg:w-12 hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                                        <img src={mysql} alt="mysql" className="w-8 sm:w-10 lg:w-12 hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                                        <img src={postgresql} alt="postgresql" className="w-8 sm:w-10 lg:w-12 hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                                        <img src={git} alt="git" className="w-8 sm:w-10 lg:w-12 hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                                    </div>
                                </div>
                            </div>

                            {/* Right Column (What Can I Do?) */}
                            <div
                                ref={(el) => sectionsRef.current.push(el)}
                                className="what-i-do p-6 sm:p-8 rounded-[24px] bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl transform hover:-translate-y-1 hover:border-[#00F0FF]/20 transition-all duration-300 hover:shadow-[#00F0FF]/5 flex flex-col justify-start"
                            >
                                <h2 className="font-avenir85Heavy text-2xl mb-6 text-white/90">What Can I Do?</h2>
                                <div className="space-y-4">
                                    {capabilities.map((item, index) => (
                                        <div key={index} className="flex gap-4 group">
                                            <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-[#00F0FF]/10 flex items-center justify-center group-hover:bg-[#00F0FF]/20 transition-colors duration-300">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-sharpSemiBold25 text-base text-white/90 group-hover:text-[#00F0FF] transition-colors duration-300">{item.title}</h3>
                                                <p className="font-avenir55Roman text-sm leading-relaxed text-white/70 mt-1">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
