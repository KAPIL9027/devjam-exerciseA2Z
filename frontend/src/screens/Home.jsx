import React from 'react'
import Card from '../components/Card'

const Home = () => {
  return (
     <main id="home">
      <Card title="Body Parts" endpoint="bodyPart" url="https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_640.jpg"/>
      <Card title="Muscles" endpoint="target" url="https://cdn.pixabay.com/photo/2017/11/28/09/16/woman-2983129_960_720.jpg"/>
      <Card title="Equipments" endpoint="equipment" url="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_960_720.jpg"/>
    </main>
   
  )
}

export default Home
