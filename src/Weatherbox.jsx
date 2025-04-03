import { useState } from 'react'
import Box from './Box'
import Info from './Info'

export default function Weatherbox(){
   let [weather,setweather]=useState();

   let updateweather=(newinfo)=>{
    setweather(newinfo)
   }

    return <>
        <Box update={updateweather}/>
        <Info info= {weather}/>
    </>
}