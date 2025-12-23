import React from 'react'
import Carousel from '../components/homeComponents/carousel'
import MarketingDetails from '../components/homeComponents/MarketingDetails'
import HallMarks from '../components/homeComponents/HallMarks'
import CollegeList from '../components/homeComponents/CollegeList'
import Programs from '../components/homeComponents/programs'
const HomePage = () => {
  return (
    <div>
      <Carousel/>
      <MarketingDetails/>
      <Programs/>
      <HallMarks/>
      <CollegeList/>
    </div>
  )
}

export default HomePage
