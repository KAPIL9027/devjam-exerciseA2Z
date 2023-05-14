import React from 'react'
import backexercises from '../dummyData/backExercises'
import SpecificCard from '../components/SpecificCard'
const Specific = () => {
    console.log(backexercises)
  return (
    
    <main id="specific">
      {
        backexercises.map((exercise)=>{
         return <SpecificCard key={exercise.id} specific={exercise}/>
        })
      }
    </main>
  )
}

export default Specific
