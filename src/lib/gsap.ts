/**
 * Punto central de configuración de GSAP.
 * Importar gsap y ScrollTrigger desde aquí en lugar de desde 'gsap' directamente
 * garantiza que los plugins se registran una sola vez y que todos los componentes
 * comparten la misma instancia.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
