

import './index.css'
import { useEffect } from 'react'
import { ScrollTrigger } from './lib/gsap'
import Navbar from './components/Navbar'
import Hero  from './components/Hero'
import Projects  from './components/Projects'

const App = () => {
    // Refresh global de seguridad: garantiza que todos los ScrollTriggers
    // recalculan posiciones una vez que el layout completo (Hero + Projects)
    // está pintado en pantalla por primera vez.
    useEffect(() => {
        const id = requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <main>
            <Navbar/>
            <Hero/>
            <Projects/>
        </main>
    );
}
export default App
