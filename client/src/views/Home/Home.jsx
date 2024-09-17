import ReviewsHome from '../../components/SectionReviewsHome/ReviewsHome'
import JoinUsSection from '../../components/JoinUsSection/JoinUsSection'
import CaretakerOrPetContainer from '../../components/CaretakerOrPetContainer/CaretakerOrPetContainer'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Faq from '../../components/FAQSection/Faq'
import Filters from '../../components/Filters/Filters'

const Home = () => {
  return (
    <div className='h-max flex flex-col gap-4 px-4 md:px-20'>
      <header className='-mx-4 md:-mx-20' >
        <NavBar />
      </header>

      <div className='max-w-[1200px] mx-auto'>
        <Filters />
        <div >
          <CaretakerOrPetContainer />
        </div>
        <div className='min-h-max '>
          <ReviewsHome />
        </div>
        <div className='min-h-max'>
          <Faq />
        </div>
        <div className='pb-10'>
          <JoinUsSection />
        </div>
      </div>
      <footer className='-mx-4 md:-mx-20'>
        <Footer />
      </footer>
    </div>
  )
}

export default Home