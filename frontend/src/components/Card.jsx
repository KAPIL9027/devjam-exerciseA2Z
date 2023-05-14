import React from 'react'
import { Link} from 'react-router-dom'

const Card = ({title,url,endpoint}) => {
    console.log(window.location.href);
    console.log(process.env.BASE_URL);
  return (
    
    <div className="card" id="body-parts" style={{backgroundImage: `url(${url})`}}>
      <Link to={`${window.location.pathname}${endpoint}`}>
       <h2 className="card-heading" >{title.toUpperCase()}</h2>
       <div id="home-card-btn">{">"}</div>
       </Link>
      </div>
  )
}

export default Card
