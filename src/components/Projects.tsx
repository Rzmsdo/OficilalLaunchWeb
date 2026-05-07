import { descripProyec } from '../../constants/index.ts';
import frescoapp from '../assets/FrescoMovil.png'

const Projects = () => {
    return (
        <div id="proyectos" className="min-h-dvh w-full">
            <div className="container mx-auto h-full pt-20">
                <h2 className="blur text-center">Nuestros Proyectos</h2>
                
                <div className='content max-w-100'>
                    
                    <ul className='space-y-4 '>
                        <h4>Tres pilares fundamentales de nuestro enfoque</h4>
                        {descripProyec.map((proyecto) => (
                            <li key={proyecto.id} className='flex-col gap-2 justify-center items-center flex '>
                                
                                <h5 className=' text-sm max-w-75 bg-gray-600/40 rounded-xl font-semibold mb-2 px-3 py-1'>{proyecto.title}</h5>
                                <p className='text-xs mb-6'>{proyecto.description}</p>
                            </li>
                        ))}
                    </ul>
                    <div className='app-img '>
                        
                        <img 
                        src={frescoapp} 
                        alt="Fresco App"
                        className="abs-center size-full object-contain z-10"
                        />

                    </div>
                </div>
                <div className='text-base max-h-10 mt-40'> <h3>Sistema de fidelizacion de clientes FRESCO</h3></div>
            </div>
        </div>
    )
}
export default Projects