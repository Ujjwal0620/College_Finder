import React from 'react'
import Hero from '../components/exploreProgramComponents/Hero'
import ProgramsForCourses from '../components/exploreProgramComponents/ProgramsForCourses'
import CollegeList from '../components/homeComponents/CollegeList'
import ExpertCounsellors from '../components/exploreProgramComponents/ExpertCounsellors'

const ExploreProgramPage = () => {
  return (
    <div>
      <Hero/>
      <ProgramsForCourses/>
      <CollegeList/>
      <ExpertCounsellors/>
    </div>
  )
}

export default ExploreProgramPage
