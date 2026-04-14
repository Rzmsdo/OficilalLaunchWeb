import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import videoHero from '../assets/videoHero.mp4';
import imgHero from '../assets/imgHero.png';



const Hero = () => {

    const text = new SplitType(".bodyUp p:nth-of-type(1)", { types: 'words,chars' });

        useGSAP(() => {
            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
            tl.from(".will-fade", { opacity: 0, y: 20, stagger: 0.3 })
                .from(text.chars, { opacity: 0, y: 50, stagger: 0.05 }, "-=1")
                .from(".bodyUp p:nth-of-type(2)", { opacity: 0, y: 20 }, "-=1")
                .from(".bodyUp p:nth-of-type(3)", { opacity: 0, y: 20 }, "-=0.8")
                .from(".bodyUp p:nth-of-type(4)", { opacity: 0, y: 20 }, "-=0.8")
                .from(".bodyDown .content", { opacity: 0, y: 30, stagger: 0.3 }, "-=1");
        });


    return (
    <>
        <section id="hero" className="mx-auto w-full">
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
        <div className="video">
            <video src={videoHero}
                autoPlay
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