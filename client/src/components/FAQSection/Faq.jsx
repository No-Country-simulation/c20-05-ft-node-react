import FaqForm from "./FaqForm"
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <section className='h-max sm:h-dvh'>
      <h2>Preguntas frecuentes</h2>
      <div className="flex max-md:flex-col gap-8">
        <FaqAccordion />
        <FaqForm />
      </div>
    </section>
  )
}

export default Faq
