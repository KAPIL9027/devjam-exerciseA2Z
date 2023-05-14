import React, { useEffect, useState } from 'react'
import backexercises from '../dummyData/backExercises'
import SpecificCard from '../components/SpecificCard'
import { useLocation } from 'react-router-dom'
import axios from 'axios'


const Specific = () => {
    const [state,setState] = useState(null);
    const location = useLocation();
    const callApi = async ()=>{
      const pathname = location.pathname;
      console.log(`${process.env.REACT_APP_API_KEY}`);
const options = {
  method: 'GET',
  url: `https://exercisedb.p.rapidapi.com/exercises${pathname}`,
  headers: {
    'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

try {
  if(!localStorage.getItem(`${pathname}`))
  {
    const response = await axios.request(options);
    console.log(response.data);
    localStorage.setItem(`${pathname}`,JSON.stringify(response.data));
    
  }
	setState(JSON.parse(localStorage.getItem(`${pathname}`)));
} catch (error) {
	console.error(error);
  setState(backexercises);
}
    }
    
    useEffect(()=>{
      callApi();
    },[])

    console.log(state);
  return (
    
    <main id="specific">
      {
        state?.map((exercise)=>{
         return <SpecificCard key={exercise.id} specific={exercise} />
        })
      }
    </main>
  )
}

export default Specific
