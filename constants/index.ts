interface NavLink {
    id: string;
    title: string;
}

interface DescripProyec{
	id: number;
	title: string;
	description: string;
}
interface DescripFreso{
	id: number;
	title: string;
	description: string;
}

const navLinks: NavLink[] = [
 {
	id: "proyectos",
	title: "Nuestros Proyectos",
 },
 {
	id: "nosotros",
	title: "Sobre Nosotros",
 },
 {
	id: "soluciones",
	title: "Nuestras Soluciones",
 },
 {
	id: "contact",
	title: "Contacto",
 },
];

const descripProyec: DescripProyec[] = [
	{
		id: 1,
		title: "App 'FRESCO' para fidelizacion",
		description: "Aplicación móvil para donde se muestran ofertas, recetas y gestionan los puntos de fidelización.",
	},
	{
		id: 2,
		title: "Plataforma Web FRESCO ",
		description: "Plataforma web que permite a los gerentes de supermercados gestionar las ofertas en segundos con la asistencia de IA.",
	},
	{
		id: 3,
		title: "Backend común FRESCO",
		description: "Backend que soporta tanto la aplicación móvil como la plataforma web FRESCO.",
	},
];


const descripFreso: DescripFreso[] = [
	{
		id: 1,
		title: "Recibe las ofertas al instante",
		description: "Nuestra app notifica al instante sobre las mejores ofertas del catalogo con variedad de temporalidades y criterios.  ",
	},
	{
		id: 2,
		title: "Recetas y comunidad FRESCO",
		description: "Vada oferta con Receta o sugerencia de uso. Además, conecta con otros usuarios para compartir experiencias y consejos culinarios.",
	},
	{
		id: 3,
		title: "Gamificación y premios",
		description: "Sistema de premios y cupones basado en puntos de fidelización, con retos y logros para incentivar la participación y el ahorro.",
	},
	
];

export { navLinks, descripProyec, descripFreso };
export type { NavLink, DescripProyec, DescripFreso };
