import React from 'react'
import ReviewsHome from '../../components/SectionReviewsHome/ReviewsHome'

const Home = () => {
  return (
    <div className='h-max text-blue-700 text-7xl bg-gray-600 text-center'>
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

      </div>

      {/* se montara Footer */}
      <footer>

      </footer>
    </div>
  )
}

export default Home