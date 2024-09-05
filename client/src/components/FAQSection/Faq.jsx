import FaqForm from "./FaqForm"
import FaqContainerAccordion from "./FaqContainerAccordion";

const Faq = () => {
  return (
    <section className='lg:h-dvh flex flex-col justify-center pb-10 sm:pb-0 gap-4'>
      <div className="flex flex-col gap-4 mb-8">
        <h2 className="font-semibold text-2xl md:text-3xl">¡Lo que necesitas saber!</h2>
        <p className="text-sm md:text-base text-gray-500"> Resuelve tus dudas sobre el cuidado de tu mascota aquí. ¡Estamos aquí para ayudarte!</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <FaqContainerAccordion />
        <FaqForm />
      </div>
    </section>
  )
}

export default Faq
