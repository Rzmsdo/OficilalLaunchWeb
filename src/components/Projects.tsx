import { descripProyec, descripFreso} from '../../constants/index.ts';
import frescoapp from '../assets/FrescoMovil.png'

const Projects = () => {
    return (
        <div id="proyectos" className="min-h-dvh w-full">
            <div className="container mx-auto h-full pt-15">
                <h2 className="blur text-center">Nuestros Proyectos</h2>
                
                <div className='content max-w-8xl pt-5'>
                    
                    <div className='space-y-4 flex flex-col gap-2 justify-center items-center max-w-1/3'>
                        <h3>Tres pilares fundamentales de nuestro enfoque</h3>
                        <ul>
                            {descripProyec.map((proyecto) => (
                                <li key={proyecto.id} className='flex-col gap-2 justify-center items-center flex max-w-90 '>
                                    <span className='text-sm max-w-75 bg-cyan-400/60 rounded-xl font-semibold mb-1 px-3 block'>{proyecto.title}</span>
                                    <p className='text-xs pb-6'>{proyecto.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='app-img '>
                        
                        <img 
                        src={frescoapp} 
                        alt="Fresco App"
                        className="abs-center size-full object-contain z-10"
                        />

                    </div>
                    <div className='space-y-4 flex flex-col gap-2 justify-center items-center max-w-1/3'>
                        <h3>FRESCO: Revolucionando la experiencia de compra</h3>
                        <ul>
                            {descripFreso.map((freso) => (
                                <li key={freso.id} className='flex-col gap-2 justify-center items-center flex max-w-90 '>
                                    <span className='text-sm max-w-75 bg-orange-400/60 rounded-xl font-semibold mb-1 px-3 block'>{freso.title}</span>
                                    <p className='text-xs pb-6'>{freso.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='text-base flex flex-col'> 
                    <h3>Sistema de fidelizacion de clientes FRESCO</h3>
                    <p className='font-semibold text-xl'>Adaptable a cualquier tipo de negocio</p>
                </div>
            </div>
        </div>
    )
}
export default Projects