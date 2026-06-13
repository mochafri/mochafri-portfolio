// import Navbar from "./assets/components/Navbar"
import Hero from "./assets/components/Hero"
import AboutMe from "./assets/components/AboutMe"
import Project from "./assets/components/Project"
import Contact from "./assets/components/Contact"
import Footer from "./assets/components/Footer"
import Navbar from "./assets/components/Navbar"
import Cursor from "./assets/components/Cursor"

function App() {

  return (
    <div className="relative w-full min-h-screen">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[#00F0FF]/20 blur-[100px] sm:blur-[150px] animate-blob1"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-[#0055FF]/20 blur-[100px] sm:blur-[150px] animate-blob2"></div>
        <div className="absolute top-[40%] left-[30%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#0EA5E9]/20 blur-[100px] sm:blur-[120px] animate-blob3"></div>
      </div>

      <Cursor />
      <Navbar />
      <Hero />
      <AboutMe />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
