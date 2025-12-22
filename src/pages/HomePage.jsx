import React from 'react'
import Slider from '../components/homeComponents/slider'
import MarketingDetails from '../components/homeComponents/MarketingDetails'
import HallMarks from '../components/homeComponents/HallMarks'
import CollegeList from '../components/homeComponents/CollegeList'
import Programs from '../components/homeComponents/programs'
const HomePage = () => {
  return (
    <div>
      <Slider/>
      <MarketingDetails/>
      <Programs/>
      <HallMarks/>
      <CollegeList/>
    </div>
  )
}

export default HomePage
