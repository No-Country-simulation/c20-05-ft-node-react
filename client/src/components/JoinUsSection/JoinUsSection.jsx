import ownerWhitDog from '../../assets/images/owner-whit-dog.webp';
import dogsWalking from '../../assets/images/dogs-walking.webp';

const JoinUsSection = () => {
    return (
        <div className='h-max flex flex-col gap-4 justify-center items-center sm:flex-row sm:h-screen bg-gray-100 [&_div]:shadow-lg
        [&_div]:rounded-lg [&_div]:h-full [&_div]:gap-8 [&_div]:bg-white [&_img]:h-96 [&_img]:rounded-md [&_div]:justify-center  [&_section]:flex [&_section]:items-center [&_section]:flex-col [&_section]:gap-5 [&_button]:w-1/3 overflow-hidden p-2'>        
            <div className="flex flex-col items-center px-5 sm:flex-col-reverse">
                <section >
                    <button onClick={()=>{}}>
                        <h3 className="text-lg font-bold bg-purple-100 text-purple-950 py-2 px-4 rounded-full text-center transition duration-300 hover:bg-purple-200 cursor-pointer">
                            Únete como Dueño
                        </h3>
                    </button>
                    <p className="text-center">
                        Descubre la mejor manera de conectar con cuidadores expertos y dedicados.
                        Nuestra plataforma te ofrece la posibilidad de encontrar al cuidador ideal
                        para tu mascota, asegurando la mayor tranquilidad y confianza. Únete a una
                        comunidad donde tu peludo amigo estará siempre en las mejores manos.
                    </p>
                </section>
                <img src={ownerWhitDog} alt="Dueño con su perro" />
            </div>
            <div className="flex flex-col items-center px-5">
                <section>
                    <button  onClick={()=>{}}>
                        <h3 className="text-lg font-bold bg-purple-100 text-purple-800 py-2 px-4 rounded-full text-center transition duration-300 hover:bg-purple-200 cursor-pointer">
                            Únete como Paseador
                        </h3>
                    </button>
                    <p className="text-center">
                        Únete a nuestra comunidad de paseadores certificados y experimentados.
                        Conéctate con dueños que necesitan tus habilidades y asegúrate de brindarles
                        a sus mascotas la mejor experiencia de paseo. Con nuestra plataforma, podrás
                        administrar tus horarios y ampliar tu clientela fácilmente. ¡Haz lo que amas
                        mientras generas ingresos!
                    </p>
                </section>
                <img src={dogsWalking} alt="Perros Caminando" />
            </div>
        </div>
    );
};

export default JoinUsSection;
