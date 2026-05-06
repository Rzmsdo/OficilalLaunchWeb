interface NavLink {
    id: string;
    title: string;
}

interface DescripProyec{
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

export { navLinks, descripProyec };
export type { NavLink, DescripProyec };
