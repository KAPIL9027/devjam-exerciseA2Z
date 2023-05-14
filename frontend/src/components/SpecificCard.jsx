import React from 'react'


const SpecificCard = ({specific}) => {
   
  return (
    <div id="specific-card">
    <div className="tutorial">
        <img alt={specific.name} src={specific.gifUrl}/>
    </div>
    <div className="description">
        <p className="desc" id="name"><div className="spec-card-heading">NAME:</div> {specific.name.toUpperCase()}</p>
        <p className="desc" id="bodyPart"><div className="spec-card-heading" >BODY PART:</div> {specific.bodyPart.toUpperCase()}</p>
        <p className="desc" id="targetMuscle"><div className="spec-card-heading" >TARGET MUSCLE:</div> {specific.target.toUpperCase()}</p>
        <p className="desc" id="equipment"><div className="spec-card-heading">EQUIPMENT:</div> {specific.equipment.toUpperCase()}</p>
    </div>
    </div>
  )
}

export default SpecificCard
