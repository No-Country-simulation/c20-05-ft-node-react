import React from 'react'
import ReviewsHome from '../../components/SectionReviewsHome/ReviewsHome'
import JoinUsSection from '../../components/JoinUsSection/JoinUsSection'
import CaretakerOrPetContainer from '../../components/CaretakerOrPetContainer/CaretakerOrPetContainer'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Faq from '../../components/FAQSection/Faq'
const Home = () => {
  return (
    <div className='h-max flex flex-col gap-4 px-4 md:px-20'>
      {/* se montara la NavBar */}
      <header className='-mx-4 md:-mx-20' >
        <NavBar />
      </header>

      {/* se montara la seccion Hero*/}
      <div>
        <CaretakerOrPetContainer />

      </div>

      {/* se montara la seccion Reviews */}
      <div className='min-h-max '>
        <ReviewsHome />
      </div>

      {/* se montara la seccion FAQ */}
      <div>
        <Faq />

      </div>

      {/* se montara la seccion Unirse a la plataforma*/}
      <div>
        <JoinUsSection />
      </div>

      {/* se montara Footer */}
      <footer className='-mx-4 md:-mx-20'>
        <Footer />
      </footer>
    </div>
  )
}

export default Home