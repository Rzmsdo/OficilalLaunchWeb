import { descripProyec, descripFreso} from '../../constants/index.ts';
import frescoapp from '../assets/FrescoMovil.png'

const Projects = () => {
    return (
        <div id="proyectos" className="min-h-dvh w-full">
            <div className='bg-gray-500/30 rounded-2xl md:mb-5 xl:mb-1 px-10 py-1 mt-15 ' >
            <h3 className='text-center font-semibold'>Sistema de fidelizacion de clientes FRESCO</h3>
            </div>
            <div className="container mx-auto h-full pt-5">
                <h2 className="blur text-center">Nuestros Proyectos</h2>
                
                
                <div className='content max-w-8xl '>
                    

                    <div className='flex flex-col gap-2 items-center w-full md:max-w-[28%] md:items-start'>
                        <h3 className='text-center text-base md:text-lg font-semibold'>Tres pilares fundamentales de nuestro enfoque</h3>
                        <ul className='w-full space-y-4'>
                            {descripProyec.map((proyecto) => (
                                <li key={proyecto.id} className='flex flex-col gap-1 w-full'>
                                    <span className='text-sm bg-cyan-400/60 rounded-xl font-semibold px-3 py-1 mb-2 block'>{proyecto.title}</span>
                                    <p className='text-xs pb-3 text-center'>{proyecto.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='app-img'>
                        <img
                            src={frescoapp}
                            alt="Fresco App — aplicación móvil de fidelización"
                            className="w-full h-full object-contain z-10"
                        />
                    </div>

                    <div className='flex flex-col gap-2 items-center w-full md:max-w-[28%] md:items-start'>
                        <h3 className='text-center text-base md:text-lg font-semibold'>FRESCO: Revolucionando la experiencia de compra</h3>
                        <ul className='w-full space-y-4'>
                            {descripFreso.map((freso) => (
                                <li key={freso.id} className='flex flex-col gap-1 w-full'>
                                    <span className='text-sm bg-orange-400/60 rounded-xl font-semibold px-3 py-1 mb-2 block'>{freso.title}</span>
                                    <p className='text-xs pb-3 text-center '>{freso.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <div className='text-base flex flex-col items-center md:items-center mt-10 xl:mt-18 px-2'>
                    
                    <p className='font-semibold text-xl text-center md:text-center'>Sistema adaptable a cualquier tipo de negocio</p>
                </div>
            </div>
        </div>
    )
}
export default Projects