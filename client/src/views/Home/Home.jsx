import React from 'react'
import ReviewsHome from '../../components/SectionReviewsHome/ReviewsHome'
import JoinUsSection from '../../components/JoinUsSection/JoinUsSection'
import CaretakerOrPetContainer from '../../components/CaretakerOrPetContainer/CaretakerOrPetContainer'

const Home = () => {
  return (
    <div className='h-max'>
      {/* se montara la NavBar */}
      <header>

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

      </div>

      {/* se montara la seccion Unirse a la plataforma*/}
      <div>
        <JoinUsSection />
      </div>

      {/* se montara Footer */}
      <footer>

      </footer>
    </div>
  )
}

export default Home