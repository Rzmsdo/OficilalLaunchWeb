import { useRef } from "react";
import { gsap } from '../lib/gsap';
import { useGSAP } from "@gsap/react";

import { descripProyec, descripFreso} from '../../constants/index.ts';
import frescoapp from '../assets/FrescoMovil.png'

const Projects = () => {
    // wrapperRef: div exterior que define el espacio de scroll (100dvh + 900px)
    // GSAP observa este wrapper — sin pin GSAP, sin spacer, sin conflicto con Hero
    const wrapperRef   = useRef<HTMLDivElement>(null);
    const textoProyRef = useRef<HTMLDivElement>(null);
    const textoAppRef  = useRef<HTMLDivElement>(null);

useGSAP(() => {
    const wrapper = wrapperRef.current;
    const textoP  = textoProyRef.current;
    const textoA  = textoAppRef.current;
    if (!wrapper || !textoP || !textoA) return;

    const isMobile = window.innerWidth < 768;
    const xOut = isMobile ? '105vw' : '65vw';

    gsap.timeline({
        scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
        }
    })
    // 0–0.5: sección visible y estática (el usuario puede leer)
    // 0.5–1.5: textos salen izquierda/derecha
    .fromTo(textoP, { x: 0, opacity: 1 }, { x: `-${xOut}`, opacity: 0, ease: 'none', duration: 1 }, 0.5)
    .fromTo(textoA, { x: 0, opacity: 1 }, { x: xOut,        opacity: 0, ease: 'none', duration: 1 }, 0.5);
});

    return (
        <div ref={wrapperRef} style={{ height: 'calc(100dvh + 500px)' }}>
            <div id="proyectos" className="sticky top-0 min-h-dvh w-full overflow-x-hidden">
                <div className='bg-gray-500/20 rounded-2xl md:mb-5 xl:mb-1 px-10 py-1 mt-15'>
                    <h3 className='text-center font-semibold TextoId'>Sistema de fidelizacion de clientes FRESCO</h3>
                </div>
                <div className="container mx-auto h-full pt-5">
                    <h2 className="blur text-center TextoBg">Nuestros Proyectos</h2>

                    <div className='content max-w-8xl'>

                        <div ref={textoProyRef} className='flex flex-col gap-2 items-center w-full md:max-w-[28%] md:items-start TextoProyecto'>
                            <h3 className='text-center text-base md:text-lg font-semibold'>Tres pilares fundamentales de nuestro enfoque</h3>
                            <ul className='w-full space-y-4'>
                                {descripProyec.map((proyecto) => (
                                    <li key={proyecto.id} className='flex flex-col gap-1 w-full'>
                                        <span className='text-sm bg-cyan-400/60 rounded-xl font-semibold px-3 py-1 mb-2 block'>{proyecto.title}</span>
                                        <p className='text-xs pb-3 text-center'>{proyecto.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='app-img Imagen'>
                            <img
                                src={frescoapp}
                                alt="Fresco App — aplicación móvil de fidelización"
                                className="w-full h-full object-contain z-10"
                            />
                        </div>

                        <div ref={textoAppRef} className='flex flex-col gap-2 items-center w-full md:max-w-[28%] md:items-start TextoApp'>
                            <h3 className='text-center text-base md:text-lg font-semibold'>FRESCO: Revolucionando la experiencia de compra</h3>
                            <ul className='w-full space-y-4'>
                                {descripFreso.map((freso) => (
                                    <li key={freso.id} className='flex flex-col gap-1 w-full'>
                                        <span className='text-sm bg-orange-400/60 rounded-xl font-semibold px-3 py-1 mb-2 block'>{freso.title}</span>
                                        <p className='text-xs pb-3 text-center'>{freso.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                    <div className='text-base flex flex-col items-center mt-10 xl:mt-18 px-2'>
                        <p className='font-semibold text-xl text-center TextoFooter'>Sistema adaptable a cualquier tipo de negocio</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects