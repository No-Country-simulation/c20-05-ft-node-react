import ownerWhitDog from '../../assets/images/owner-whit-dog.webp';
import dogsWalking from '../../assets/images/dogs-walking.webp';
import { Link } from 'react-router-dom';

const JoinUsSection = () => {

    return (
        <div className='h-max gap-8 flex flex-col pb-6 text-cyan-900 justify-center items-center   xl:h-screen md:gap-y-4
        [&_div]:rounded-lg [&_div]:h-full [&_div]:gap-8 [&_div]:bg-white [&_img]:h-96 [&_img]:rounded-3xl [&_div]:justify-center md:[&_section]:w-1/2  [&_section]:flex [&_section]:items-center [&_section]:flex-col [&_section]:gap-5 [&_button]:sn:w-1/3 overflow-hidden p-2'>
            <div className="flex flex-col items-center  md:flex-row-reverse md:justify-between">
                <section >
                    <div className='w-full md:size-3/4 flex flex-col'>
                        <div className='w-max' >
                            <h3 className="text-sm font-bold bg-cyan-100 text-cyan-950 py-2 px-4 rounded-full text-center transition duration-300 hover:bg-cyan-200 ">
                                Unite Dueño
                            </h3>
                        </div>
                        <h4 className='text-2xl break-words font-bold'>
                            Conecta con Cuidadores de Confianza
                        </h4>

                        <p className="text-balance text-xs md:text-sm">
                            Descubre la mejor manera de conectar con cuidadores expertos y dedicados.
                            Nuestra plataforma te ofrece la posibilidad de encontrar al cuidador ideal
                            para tu mascota, asegurando la mayor tranquilidad y confianza.
                        </p>
                        <Link to="/register">
                            <p className=' text-xs underline text-cyan-500 font-extrabold' >Únete a nuestra comunidad y deja a tu mascota en buenas manos.</p>
                        </Link>
                    </div>
                </section>
                <div className='md:w-1/2 '>
                    <img className='md:size-[70%] object-cover mx-auto md:mx-0' src={ownerWhitDog} alt="Dueño con su perro" />
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row" >
                <section>
                    <div className='w-full md:size-3/4 flex flex-col self-start'>
                        <div className='w-max' >
                            <h3 className="text-sm font-bold bg-cyan-100 text-cyan-950 py-2 px-4 rounded-full text-center transition duration-300 hover:bg-cyan-200">
                                Unite Paseador
                            </h3>
                        </div>
                        <h4 className='text-2xl font-bold'>Unite a Nuestra Red de Paseadores Certificados</h4>
                        <p className="text-balance text-xs md:text-sm">
                            Ven a nuestra comunidad de paseadores certificados y experimentados.
                            Conéctate con dueños que necesitan tus habilidades y asegúrate de brindarles
                            a sus mascotas la mejor experiencia de paseo. Con nuestra plataforma, podrás
                            administrar tus horarios y ampliar tu clientela fácilmente.
                        </p>
                        <Link to="/register">
                            <p className='text-justify text-sm md:text-xs text-cyan-500 font-extrabold underline' >¡Haz lo que amas
                                mientras generas ingresos!</p>
                        </Link >
                    </div>
                </section>
                <div className='md:w-1/2 flex '>
                    <img className='md:size-[70%] object-cover  md:mx-0  ' src={dogsWalking} alt="Perros Caminando" />
                </div>
            </div>
        </div>
    );
};

export default JoinUsSection;
