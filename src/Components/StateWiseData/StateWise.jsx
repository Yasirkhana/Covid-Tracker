import React, { useEffect } from 'react'
import "./SateWise.css"

export const StateWise = () => {
    
    

    const getcovidData= async() =>{
        const res =  await fetch('https://covid19india.org/data.json')
        const actualData = await res.json()
        console.log(actualData.statewise);
    }


    useEffect(() => {
      getcovidData();
        }, [])
    


    return (
    <>
    
    <h1>PAKISTAN COVID-19 DASHBOARD</h1>    
    </>
  )
}
