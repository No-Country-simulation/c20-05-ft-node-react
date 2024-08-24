import FaqForm from "./FaqForm"
import FaqContainerAccordion from "./FaqContainerAccordion";

const Faq = () => {
  return (
    <section className='h-max sm:h-dvh'>
      <h2>Preguntas frecuentes</h2>
      <div className="flex max-md:flex-col gap-8">
        <FaqContainerAccordion />
        <FaqForm />
      </div>
    </section>
  )
}

export default Faq
