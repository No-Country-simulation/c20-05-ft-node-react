import React from 'react'
import ReviewsHome from '../../components/SectionReviewsHome/ReviewsHome'
import JoinUsSection from '../../components/JoinUsSection/JoinUsSection'

const Home = () => {
  return (
    <div className='h-max  text-center overflow-hidden'>
      {/* se montara la NavBar */}
      <header>

      </header>

      {/* se montara la seccion Hero*/}
      <div>

      </div>

      {/* se montara la seccion Reviews */}
      <div className='min-h-max w-screen'>
        <ReviewsHome />
      </div>

      {/* se montara la seccion FAQ */}
      <div>

      </div>

      {/* se montara la seccion Unirse a la plataforma*/}
      <div>
        <JoinUsSection/>  
      </div>

      {/* se montara Footer */}
      <footer>

      </footer>
    </div>
  )
}

export default Home