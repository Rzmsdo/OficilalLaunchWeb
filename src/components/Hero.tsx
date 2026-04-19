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
            ScrollTrigger.normalizeScroll(true);
            const text = new SplitType(".bodyUp p:nth-of-type(1)", { types: 'words,chars' });

            // Bloquear scroll durante la animación de entrada (compatible con iOS)
            const scrollY = window.scrollY;
            document.body.style.top = `-${scrollY}px`;
            document.body.classList.add('scroll-locked');

            const isMobile = window.innerWidth < 768;
            const xOffset = isMobile ? -60 : -120;
            gsap.set(".will-fade", { opacity: 0, x: xOffset });
            gsap.set("p.name", { opacity: 0, y: -16 });
            gsap.set(text.chars, { opacity: 0, y: -50 });
            gsap.set(".bodyUp p:nth-of-type(2)", { opacity: 0, x: isMobile ? 60 : 120 });
            gsap.set(".bodyUp p:nth-of-type(3)", { opacity: 0, y: 90 });

            const video = videoRef.current;
            let entranceDone = false;
            let metadataReady = false;

            const setupScrollVideo = () => {
                if (!video || !video.duration || !isFinite(video.duration)) return;

                const exitTime = 4;
                const totalTime = exitTime + video.duration;
                const exitRatio = exitTime / totalTime;

                const exitTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#hero",
                        start: "top top",
                        end: `+=${totalTime * 200}`,
                        pin: true,
                        pinSpacing: true,
                        scrub: 1,
                        onUpdate: (self) => {
                            const videoProgress = Math.max(0, (self.progress - exitRatio) / (1 - exitRatio));
                            video.currentTime = videoProgress * video.duration;
                        },
                    }
                });

                exitTl
                    .to(".will-fade",                   { opacity: 0, x: xOffset, duration: 1 }, 0)
                    .to("p.name",                        { opacity: 0, duration: 3 }, 0)
                    .to(".bloqHeIzda",                   { opacity: 0, y: 120, duration: 1.5 }, 0.2)
                    .to(".bodyUp p:nth-of-type(1)",      { opacity: 0, y: -120, duration: 2.5 }, 0.2)
                    .to(".bodyUp p:nth-of-type(2)",      { opacity: 0, x: isMobile ? 60 : 120, duration: 3.5 }, 0.4)
                    .to(".bodyUp p:nth-of-type(3)",      { opacity: 0, y: 90, duration: 4 }, 0.6)
                    .to({}, { duration: video.duration }, exitTime);
            };

            // El pin solo se crea cuando AMBAS condiciones están listas
            const tryActivateScroll = () => {
                if (!entranceDone || !metadataReady) return;
                // Restaurar scroll — método compatible iOS
                const top = document.body.style.top;
                document.body.classList.remove('scroll-locked');
                document.body.style.top = '';
                window.scrollTo(0, -parseInt(top || '0'));
                setupScrollVideo();
            };

            const tl = gsap.timeline({
                defaults: { ease: "power2.out", duration: 1 },
                onComplete: () => {
                    entranceDone = true;
                    tryActivateScroll();
                }
            });

            tl.to("p.name", { opacity: 1, y: 0, delay: 0.2 })
                .to(".will-fade", { opacity: 1, x: 0, stagger: 0.5 }, "-=0.6")
                .to(text.chars, { opacity: 1, y: 0, stagger: 0.04 }, "-=1")
                .to(".bodyUp p:nth-of-type(1)", { opacity: 1, y: 0 }, "-=1")
                .to(".bodyUp p:nth-of-type(2)", { opacity: 1, x: 0 }, "-=1")
                .to(".bodyUp p:nth-of-type(3)", { opacity: 1, y: 0 }, "-=0.8");

            if (video) {
                const onMetadata = () => {
                    if (!video.duration || !isFinite(video.duration)) return;
                    metadataReady = true;
                    tryActivateScroll();
                };

                if (video.readyState >= 1) {
                    onMetadata();
                } else {
                    video.onloadedmetadata = onMetadata;
                }

                video.load();
            }
        }, []);


    return (
    <>
        <section id="hero" className="mx-auto w-full">
            <div id="elements" className="relative z-10 w-full">
            <p className="name">Soluciones web e IA</p>
            <h2 className="will-fade z-50">¿Estás aprovechando todo el potencial digital de tu negocio?</h2>
            <div className="centroHero">
                
                <div className="bloqHeIzda">
                    <img src={imgHero} alt="Hero" className="heroImage" />
                </div>

                <div className="bloqHeDcha">
                    <div className='bodyUp'>
                        
                        <p>Te ofrecemos soluciones digitales <br/>diseñadas para crecer contigo.</p>
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