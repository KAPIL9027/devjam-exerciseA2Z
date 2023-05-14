import React from 'react'
import body_parts from '../dummyData/bodyparts'
import Card from '../components/Card'
const Parts = () => {
  return (
    <main id="bodyparts">
      {
        body_parts.map((p) => {
            return <Card key={p.part} endpoint={`/${p.part}`} title={p.part} url={p.url}/>
        })
      }
    </main>
  )
}

export default Parts
