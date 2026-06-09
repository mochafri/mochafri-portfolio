import Instagram from '../icon/Instagram.svg'
import gmail from '../icon/gmail-2026.svg';
import whatsapp from '../icon/whatsapp.svg';
import LinkedIn from '../icon/LinkedIn.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);


export default function Contact() {

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
                            start: "top 70%", // Trigger animation when the top of the element reaches 80% of the viewport
                            end: "bottom 30%",
                            toggleActions: "play none none none" //Play when entering, reverse when leaving
                        },
                    }
                );
            }
        });
    }, []);

    const datas = [
        { instagram: "Instagram", whatsapp: "Whatsapp", gmail: "Gmail", linkedIn: "LinkedIn" },
        // Data lainnya...
    ];


    return (
        <section id="contact" className="mt-32 sm:mt-40 lg:mt-56 px-5 sm:px-10 lg:max-w-[80%] mx-auto scroll-mt-28 mb-32">
            <div className="container mx-auto">
                <div className="w-full mb-12 md:mb-20" ref={(el) => sectionsRef.current.push(el)}>
                    <h1 className="font-sharpSemiBold25 text-4xl md:text-6xl lg:text-[7rem] text-white tracking-tighter leading-none">Contact me</h1>
                </div>

                <div className="w-full flex flex-col md:flex-row justify-between pt-10" ref={(el) => sectionsRef.current.push(el)}>
                    <div className="md:w-1/3 mb-16 md:mb-0">
                        <div className="mb-12">
                            <h4 className="text-white/50 text-xs font-avenir85Heavy mb-3 uppercase tracking-widest">Location</h4>
                            <p className="text-white text-lg font-avenir55Roman">Bandung, Indonesia<br/>2026</p>
                        </div>
                        <div>
                            <h4 className="text-white/50 text-xs font-avenir85Heavy mb-3 uppercase tracking-widest">Status</h4>
                            <p className="text-white text-lg font-avenir55Roman">Open for Work</p>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex flex-col">
                         <h4 className="text-white/50 text-xs font-avenir85Heavy mb-6 uppercase tracking-widest">Social Media</h4>
                         <div className="flex flex-col w-full">
                             {[
                                 { icon: Instagram, title: 'Instagram', value: datas[0].instagram, link: 'https://www.instagram.com/moch.afri/' },
                                 { icon: LinkedIn, title: 'LinkedIn', value: datas[0].linkedIn, link: 'https://www.linkedin.com/in/moch-afrizal-873b5a28b/' },
                                 { icon: whatsapp, title: 'Whatsapp', value: datas[0].whatsapp, link: 'https://wa.me/6282126030612' },
                                 { icon: gmail, title: 'Gmail', value: datas[0].gmail, link: 'mailto:afrizalmuhammad656@gmail.com' },
                             ].map(({ icon, title, value, link }, i) => (
                                 <a href={link} target="_blank" rel="noreferrer" key={i} className={`text-white hover:text-secondary text-2xl sm:text-3xl font-avenir85Heavy transition-colors py-6 border-t border-white/10 flex justify-between items-center group ${i === 3 ? 'border-b' : ''}`}>
                                     <div className="flex items-center gap-6">
                                         <img src={icon} alt={title.toLowerCase()} className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                                         <span className="truncate">{value}</span>
                                     </div>
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                 </a>
                             ))}
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    )
}
