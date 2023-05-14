import React from 'react'
import equipments from '../dummyData/equipments'
import Card from '../components/Card'
const Equipment = () => {
  return (
    <main id="equipments">
      {
        equipments.map((equipment)=>{
            return <Card key={equipment.title} title={equipment.title} url={equipment.url}/>
        })
      }
    </main>
  )
}

export default Equipment
