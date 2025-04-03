import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Box({update}){
     
    let [City,setCity]=useState("")
    let [error,seterr]=useState(false);

    let API_URL=import.meta.env.VITE_API_URL
    let API_KEY=import.meta.env.VITE_API_KEY
    
    function handleinput(event){
      setCity(event.target.value)
    }

    async function handleSumbit(event){

      error && seterr(false);
      
      try{
        event.preventDefault();
        let response= await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`)
        let fresponse=await response.json();
        setCity("");
        console.log(fresponse);
        update({
          city:City,
          temp:fresponse.main.temp,
          humidity:fresponse.main.humidity,
          maxtemp:fresponse.main.temp_max,
          mintemp:fresponse.main.temp_min,
        })
      }
      catch(err){ 
        seterr(true)
      }
      
    }

    return(
      <form onSubmit={handleSumbit}>
       <TextField id="standard-basic" label="City" variant="standard" value={City} onChange={handleinput}/>
       <br />
       <Button variant="contained" type='sumbit' style={{margin:"10px"}}>Contained</Button>
       {error && <p>No such place exist</p>}
      </form>
    )
}