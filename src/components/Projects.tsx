import { useRef } from "react";
import { gsap } from '../lib/gsap';
import { useGSAP } from "@gsap/react";

import { descripProyec, descripFreso} from '../../constants/index.ts';
import frescoapp from '../assets/FrescoMovil.png'
import codigoImg from '../assets/codigo.png'
import panelFresco from '../assets/panelFresco.png'
import flechaI from '../assets/flechas.png'
import flechaD from '../assets/flechas.png'

const Projects = () => {
    // wrapperRef: div exterior que define el espacio de scroll (100dvh + 900px)
    // GSAP observa este wrapper — sin pin GSAP, sin spacer, sin conflicto con Hero
    const wrapperRef    = useRef<HTMLDivElement>(null);
    const textoProyRef  = useRef<HTMLDivElement>(null);
    const textoAppRef   = useRef<HTMLDivElement>(null);
    const appImgRef     = useRef<HTMLDivElement>(null);
    const codImgRef     = useRef<HTMLDivElement>(null);
    const panelImgRef   = useRef<HTMLDivElement>(null);
    const flechaIImgRef = useRef<HTMLDivElement>(null);
    const flechaDImgRef = useRef<HTMLDivElement>(null);

useGSAP(() => {
    const wrapper    = wrapperRef.current;
    const textoP     = textoProyRef.current;
    const textoA     = textoAppRef.current;
    const appImg     = appImgRef.current;
    const codImg     = codImgRef.current;
    const panelImg   = panelImgRef.current;
    const flechaIImg = flechaIImgRef.current;
    const flechaDImg = flechaDImgRef.current;
    if (!wrapper || !textoP || !textoA || !appImg || !codImg || !panelImg || !flechaIImg || !flechaDImg) return;

    const isMobile = window.innerWidth < 768;
    const xOut = isMobile ? '105vw' : '65vw';

    // Estado inicial: textos fuera de pantalla (listos para entrar)
    gsap.set(textoP, { x: `-${xOut}`, opacity: 0 }); // entra desde la izquierda
    gsap.set(textoA, { x: xOut,        opacity: 0 }); // entra desde la derecha

    // Desktop: GSAP toma control de los transforms — todos parten en el centro (left:50%)
    if (!isMobile) {
        gsap.set(appImg, { xPercent: -50, yPercent: -50, x: 0 });
        gsap.set([codImg, panelImg, flechaIImg, flechaDImg], {
            xPercent: -50, yPercent: -50, x: '-100vw', opacity: 0,
        });
    }

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
        }
    });

    // Fase 1 (0–0.5): textoP y textoA entran desde los lados
    tl.to(textoP, { x: 0, opacity: 1, ease: 'none', duration: 0.5 }, 0)
      .to(textoA, { x: 0, opacity: 1, ease: 'none', duration: 0.5 }, 0);

    // Fase 2 (0.5–1.5): pausa de lectura (sin tweens)

    // Fase 3 (1.5–2.5): textoP y textoA salen hacia los lados
    tl.to(textoP, { x: `-${xOut}`, opacity: 0, ease: 'none', duration: 1 }, 3)
      .to(textoA, { x: xOut,        opacity: 0, ease: 'none', duration: 1 }, 3);

    // Fase 4 (3–4): solo desktop — app-img se desplaza a la derecha, resto entra desde la izquierda
    // Orden final: panelImg | flechaIImg | codImg | flechaDImg | appImg
    if (!isMobile) {
        tl.to(appImg,     { x: '34vw',  ease: 'none', duration: 1 }, 3)
          .to(flechaDImg, { x: '22vw',  opacity: 1, ease: 'none', duration: 1 }, 3)
          .to(codImg,     { x: '5vw',   opacity: 1, ease: 'none', duration: 1 }, 3)
          .to(flechaIImg, { x: '-12vw', opacity: 1, ease: 'none', duration: 1 }, 3)
          .to(panelImg,   { x: '-29vw', opacity: 1, ease: 'none', duration: 1 }, 3);
    }
});

    return (
        <div ref={wrapperRef} style={{ height: 'calc(100dvh + 1500px)' }}>
            <div id="proyectos" className="sticky top-0 h-dvh w-full overflow-hidden">
                <div className='bg-gray-500/20 rounded-2xl md:mb-3 px-10 py-1 mt-10'>
                    <h3 className='text-center font-semibold TextoId'>Sistema de fidelizacion de clientes FRESCO</h3>
                </div>
                <div className="container mx-auto h-full pt-2">
                    <h2 className="blur text-center TextoBg">Nuestros Proyectos</h2>

                    <div className='content max-w-8xl'>

                        <div ref={textoProyRef} className='flex flex-col gap-1 items-center w-full md:max-w-[28%] md:items-start TextoProyecto'>
                            <h3 className='text-center text-sm md:text-base font-semibold'>Tres pilares fundamentales de nuestro enfoque</h3>
                            <ul className='w-full space-y-2'>
                                {descripProyec.map((proyecto) => (
                                    <li key={proyecto.id} className='flex flex-col gap-1 w-full'>
                                        <span className='text-sm bg-cyan-400/60 rounded-xl font-semibold px-3 py-1 mb-2 block'>{proyecto.title}</span>
                                        <p className='text-xs pb-3 text-center'>{proyecto.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mobile: app-img en flujo normal */}
                        <div className='md:hidden w-4/5 max-w-xs h-52 sm:h-64 rounded-3xl overflow-hidden mx-auto'>
                            <img src={frescoapp} alt="Fresco App" className="w-full h-full object-contain" />
                        </div>

                        <div ref={textoAppRef} className='flex flex-col gap-1 items-center w-full md:max-w-[28%] md:items-start TextoApp'>
                            <h3 className='text-center text-sm md:text-base font-semibold'>FRESCO: Revolucionando la experiencia de compra</h3>
                            <ul className='w-full space-y-2'>
                                {descripFreso.map((freso) => (
                                    <li key={freso.id} className='flex flex-col gap-1 w-full'>
                                        <span className='text-sm bg-orange-400/60 rounded-xl font-semibold px-3 py-1 mb-2 block'>{freso.title}</span>
                                        <p className='text-xs pb-3 text-center'>{freso.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                    <div className='text-base flex flex-col items-center md:mt-5 xl:mt-30 px-2 relative z-10'>
                        <p className="pb-5 text-xl">Sistema adaptable a cualquier tipo de negocio</p>
                        <a
                            href="https://mandarina.com/soluciones"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="TextoFooter inline-flex items-center gap-2 font-semibold text-xl text-center px-8 py-3 rounded-full border border-orange-400/40 bg-orange-500/10 text-orange-300 hover:bg-orange-500/20 hover:border-orange-400/70 transition-all duration-300"
                        >
                            
                            <span aria-hidden="true">→</span>
                            Pulsa aqui para más información
                        </a>
                    </div>
                </div>

                {/* Desktop: imágenes absolutas dentro del sticky div, GSAP controla posición */}
                <div ref={appImgRef} className='hidden md:block app-img'>
                    <img src={frescoapp} alt="Fresco App — aplicación móvil de fidelización" className="w-full flex-1 object-contain min-h-0" />
                    <p className="text-center text-sm font-semibold mt-2">App FRESCO</p>
                </div>
                <div ref={codImgRef} className='hidden md:block back-img'>
                    <img src={codigoImg} alt="Código — backend FRESCO" className="w-full flex-1 object-contain min-h-0" />
                    <p className="text-center text-sm font-semibold mt-5">Backend común</p>
                </div>
                <div ref={panelImgRef} className='hidden md:block panel-img'>
                    <img src={panelFresco} alt="Panel FRESCO" className="w-full flex-1 object-contain min-h-0" />
                    <p className="text-center text-sm font-semibold mt-5">Panel central para administración</p>
                </div>
                <div ref={flechaIImgRef} className='hidden md:block flecha-imgI'>
                    <img src={flechaI} alt="Flecha izquierda" className="w-full h-full object-contain" />

                </div>
                <div ref={flechaDImgRef} className='hidden md:block flecha-imgD'>
                    <img src={flechaD} alt="Flecha derecha" className="w-full h-full object-contain" />
                </div>
            </div>
        </div>
    )
}
export default Projects