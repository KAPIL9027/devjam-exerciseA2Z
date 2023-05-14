import React from 'react'
import { Link,useLocation} from 'react-router-dom'

const Card = ({title,url}) => {
    const location = useLocation();
    console.log(location);
    console.log(window.location.href);
  return (
    
    <div className="card" id="body-parts" style={{backgroundImage: `url(${url})`}}>
      <Link to={`/${title.split(" ")[0]}`}>
       <h2 className="card-heading" >{title.toUpperCase()}</h2>
       <div id="home-card-btn">{">"}</div>
       </Link>
      </div>
  )
}

export default Card
