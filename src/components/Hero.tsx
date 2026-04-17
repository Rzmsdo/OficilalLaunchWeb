import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import videoHero from '../assets/videoHero_kf.mp4';
import videoHeroMov from '../assets/videoHeroMov_kf.mp4';
import imgHero from '../assets/imgHero.png';
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


const Hero = () => {


    const videoRef = useRef<HTMLVideoElement>(null);

        useGSAP(() => {
            const text = new SplitType(".bodyUp p:nth-of-type(1)", { types: 'words,chars' });

            // Animaciones Hero
            const isMobile = window.innerWidth < 768;
            const xOffset = isMobile ? -60 : -120;
            gsap.set(".will-fade", { opacity: 0, x: xOffset });
            gsap.set("p.name", { opacity: 0 });
            gsap.set(text.chars, { opacity: 0, y: -50 });
            gsap.set(".bodyUp p:nth-of-type(2)", { opacity: 0, x: isMobile ? 60 : 120 });
            gsap.set(".bodyUp p:nth-of-type(3)", { opacity: 0, y: 90 });

            const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });
            tl.to(".will-fade", { opacity: 1, x: 0, stagger: 0.5, delay: 0.3 })
                .to(text.chars, { opacity: 1, y: 0, stagger: 0.04 }, "-=1")
                .to(".bodyUp p:nth-of-type(1)", { opacity: 1, y: 0 }, "-=1")
                .to(".bodyUp p:nth-of-type(2)", { opacity: 1, x: 0 }, "-=1")
                .to(".bodyUp p:nth-of-type(3)", { opacity: 1, y: 0 }, "-=0.8");

            const video = videoRef.current;
            if (video) {
                const setupScrollVideo = () => {
                    if (!video.duration || !isFinite(video.duration)) return;

                    const exitTime = 4;
                    const totalTime = exitTime + video.duration;
                    const exitRatio = exitTime / totalTime;

                    const exitTl = gsap.timeline({
                        scrollTrigger: {
                            trigger: "#hero",
                            start: "top top",
                            end: `+=${totalTime * 200}`,
                            pin: true,
                            anticipatePin: 1,
                            scrub: true,
                            onUpdate: (self) => {
                                const videoProgress = Math.max(0, (self.progress - exitRatio) / (1 - exitRatio));
                                video.currentTime = videoProgress * video.duration;
                            },
                        }
                    });

                    // Salida en dirección inversa a la entrada
                    exitTl
                        .fromTo(".will-fade",       { opacity: 1, x: 0 },    { opacity: 0, x: xOffset, duration: 1 }, 0)
                        .fromTo("p.name",            { opacity: 1 },          { opacity: 0, duration: 3 }, 0)
                        .fromTo(".bloqHeIzda", { opacity: 1, y: 0 }, { opacity: 0, y: 120, x: 0, delay: 1, duration: 1.5 }, 0.2)
                        .fromTo(".bodyUp p:nth-of-type(1)", { opacity: 1, y: 0 }, { opacity: 0, y: -120, delay: 2, duration: 2.5 }, 0.2)
                        .fromTo(".bodyUp p:nth-of-type(2)", { opacity: 1, x: 0 }, { opacity: 0, x: isMobile ? 60 : 120, delay: 2, duration: 3.5 }, 0.4)
                        .fromTo(".bodyUp p:nth-of-type(3)", { opacity: 1, y: 0 }, { opacity: 0, y: 90, delay: 2, duration: 4 }, 0.6)
                        .to({}, { duration: video.duration }, exitTime);
                };

                // Si los metadatos ya están disponibles (readyState >= 1), configurar directamente
                if (video.readyState >= 1) {
                    setupScrollVideo();
                } else {
                    video.onloadedmetadata = setupScrollVideo;
                }

                // Forzar carga en móvil (Safari/Android ignoran preload="auto")
                video.load();
            }
        }, []);


    return (
    <>
        <section id="hero" className="mx-auto w-full">
            <div id="elements" className="relative z-10 w-full">
            <h2 className="will-fade z-50">¿Estás aprovechando todo el potencial digital de tu negocio?</h2>
            <p className="name">Soluciones web e IA</p>
            <div className="centroHero">
                
                <div className="bloqHeIzda">
                    <img src={imgHero} alt="Hero" className="heroImage" />
                </div>

                <div className="bloqHeDcha">
                    <div className='bodyUp'>
                        
                        <p>Soluciones digitales diseñadas<br/>para crecer contigo.</p>
                        <p>Somos tu solución más completa: Plataformas SaaS, Webs, optimización SEO, Inteligencia Artificial, Apps Movil y creación de productos digitales.</p>
                        <p>Construimos tecnología que impulsa tu negocio.</p>
                    </div>
                </div>
            </div>
         
        </div>
        <div className="video">
            <video ref={videoRef}
                src={window.innerWidth <= 768 ? videoHeroMov : videoHero}
                playsInline 
                muted 
                preload="auto"
                />
        </div>
        
        </section>
  </>
        )
}
export default Hero