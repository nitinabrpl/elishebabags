
import { result } from 'lodash';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Banner from './Banner';

function Pd() {

    const prm = useParams()
   const [data,setData] = useState();
   useEffect(()=>{
    fetch('https://fakestoreapi.com/products/').then(resp=>resp.json()).then((result)=>{
        setData(result);
        console.warn(data)
        
      
         
     
    })  

   
 },[])


  return (
    <>
        <h1>{data.title}</h1>

        </>
  )
}

export default Pd