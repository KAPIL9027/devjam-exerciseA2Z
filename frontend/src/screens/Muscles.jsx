import React from 'react'
import Card from '../components/Card'
import muscles from '../dummyData/muscles'
const Muscles = () => {
  return (
    <main id="muscles"> 
      {
        muscles.map((muscle)=>{
            return <Card key={muscle.title} title={muscle.target} url={muscle.url}/>
        })
      }
    </main>
  )
}

export default Muscles
