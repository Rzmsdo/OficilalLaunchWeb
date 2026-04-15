import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import videoHero from '../assets/videoHero.mp4';
import imgHero from '../assets/imgHero.png';
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


const Hero = () => {


    const videoRef = useRef<HTMLVideoElement>(null);

        useGSAP(() => {
            const text = new SplitType(".bodyUp p:nth-of-type(1)", { types: 'words,chars' });

            // Animaciones Hero
            gsap.set(".will-fade", { opacity: 0, x: -120 });
            gsap.set("p.name", { opacity: 0 });
            gsap.set(text.chars, { opacity: 0, y: -50 });
            gsap.set(".bodyUp p:nth-of-type(2)", { opacity: 0, x: 120 });
            gsap.set(".bodyUp p:nth-of-type(3)", { opacity: 0, y: 90 });
            gsap.set(".bodyDown .content", { opacity: 0, y: 30 });

            const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });
            tl.to(".will-fade", { opacity: 1, x: 0, stagger: 0.5, delay: 0.3 })
                .to(text.chars, { opacity: 1, y: 0, stagger: 0.04 }, "-=1")
                .to(".bodyUp p:nth-of-type(1)", { opacity: 1, y: 0 }, "-=1")
                .to(".bodyUp p:nth-of-type(2)", { opacity: 1, x: 0 }, "-=1")
                .to(".bodyUp p:nth-of-type(3)", { opacity: 1, y: 0 }, "-=0.8")
                .to(".bodyDown .content", { opacity: 1, y: 0, stagger: 0.4 }, "-=1");

            const video = videoRef.current;
            if (video) {
                video.onloadedmetadata = () => {
                    const exitTime = 1.5;
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
                        .fromTo(".will-fade",       { opacity: 1, x: 0 },    { opacity: 0, x: -120, duration: 1 }, 0)
                        .fromTo("p.name",            { opacity: 1 },          { opacity: 0, duration: 1.5 }, 0)
                        .fromTo(".bodyUp p:nth-of-type(1)", { opacity: 1, y: 0 }, { opacity: 0, y: -120, duration: 1.5 }, 0.2)
                        .fromTo(".bodyUp p:nth-of-type(2)", { opacity: 1, x: 0 }, { opacity: 0, x: 120, duration: 1.5 }, 0.4)
                        .fromTo(".bodyUp p:nth-of-type(3)", { opacity: 1, y: 0 }, { opacity: 0, y: 90, duration: 1.5 }, 0.6)
                        .fromTo(".bodyDown .content", { opacity: 1, y: 0 },   { opacity: 0, y: 30, stagger: 0.15, duration: 1.5 }, 0.8)
                        // Placeholder que ocupa la fase del video en el timeline
                        .to({}, { duration: video.duration }, exitTime);
                };
            }
        }, []);


    return (
    <>
        <section id="hero" className="mx-auto w-full">
            <div id="elements">
            <h2 className="will-fade z-50">¿Estás aprovechando todo el potencial digital de tu negocio?</h2>
            <p className="name">Mandarina Projects</p>
            <div className="centroHero">
                
                <div className="bloqHeIzda will-fade">
                    <img src={imgHero} alt="Hero" className="heroImage" />
                </div>

                <div className="bloqHeDcha">
                    <div className='bodyUp'>
                        
                        <p>Soluciones digitales diseñadas para crecer contigo.</p>
                        <p>Ofrecemos desde el desarrollo de sitios web hasta plataformas SaaS, optimización SEO y creación de productos digitales.</p>
                        <p>Construimos tecnología que impulsa tu negocio.</p>
                    </div>
                </div>
            </div>
            <div className="bodyDown">
            <div className="content">
             <div className="space-y-5 text-xl hidden md:block">
            <p>Tu web</p>
            <p className="subtitle">
                Dinámica <br/> Atractiva <br/> Funcional
            </p>
            
            </div>
            <div className="sas ">
           
            <p className="subtitle text-center">
                Conecta tu negocio  <br/>con tus clientes y
            </p>
             <p className="text-center">maximiza tus resultados.
            </p>
           
            </div>
            </div>
        </div>
        </div>
        <div className="video">
            <video ref={videoRef}
                src={videoHero}
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