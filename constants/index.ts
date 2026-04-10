interface NavLink {
    id: string;
    title: string;
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

export { navLinks };
export type { NavLink };
