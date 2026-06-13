
export default function Footer() {
    return (
        <footer className="mt-20 sm:mt-32 w-full border-t border-white/10">
            <div className="container mx-auto px-5 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/50 text-sm font-avenir55Roman text-center md:text-left">
                        &copy; {new Date().getFullYear()} <span className="text-[#00F0FF] hover:text-white transition-colors"><a href="https://instagram.com/moch.afri" target="_blank" rel="noreferrer">moch.afri</a></span>. All rights reserved.
                    </p>
                    <p className="text-white/50 text-sm font-avenir55Roman text-center md:text-right">
                        Built with React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    )
}
