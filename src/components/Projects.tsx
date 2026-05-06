import { descripProyec } from '../../constants/index.ts';
import frescoapp from '../assets/FrescoMovil.png'

const Projects = () => {
    return (
        <div id="proyectos" className="min-h-dvh w-full">
            <div className="container mx-auto h-full pt-20">
                <h2 className="z-30 ">Nuestros Proyectos</h2>
                <div className='content'>
                    <ul className='space-y-4'>
                        {descripProyec.map((proyecto) => (
                            <li key={proyecto.id} className='flex-col gap-2 '>
                                <h5 className='text-sm bg-gray-600/40 rounded-xl font-semibold mb-2 px-3 py-1'>{proyecto.title}</h5>
                                <p className='text-xs'>{proyecto.description}</p>
                            </li>
                        ))}
                    </ul>
                    <div className='cocktail-img'>
                        <img 
                        src={frescoapp} 
                        alt="Fresco App"
                        className="abs-center masked-img size-full object-contain z-10"
                        />

                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Projects