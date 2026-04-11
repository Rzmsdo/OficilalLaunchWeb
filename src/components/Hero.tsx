import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import videoHero from '../assets/videoHero.mp4';



const Hero = () => {

    const text = new SplitType(".bodyUp p:nth-of-type(1)", { types: 'words,chars' });




    return (
    <>
        <section id="hero" className="container mx-auto h-full pt-20">
            <h2 className="will-fade z-50">¿Estás aprovechando todo el potencial digital de tu negocio?</h2>
            <div className='bodyUp'>
                <p>Mandarina Projects</p>
                <p>Soluciones digitales diseñadas para crecer contigo.</p>
                <p>Ofrecemos desde el desarrollo de sitios web hasta plataformas SaaS, optimización SEO y creación de productos digitales.</p>
                <p>Construimos tecnología que impulsa tu negocio.</p>
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
                Conecta tu negocio con <br/>tus clientes y
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