import { styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function Info({info}) {

  let hoturl="https://images.unsplash.com/photo-1504370805625-d32c54b16100?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=scott-goodwill-7KrWmnpRafw-unsplash.jpg";
  let coldurl="https://images.unsplash.com/photo-1477468572316-36979010099d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=paul-pastourmatzis-r0J9sGBWFOc-unsplash.jpg"
  let rainurl="https://images.unsplash.com/photo-1501691223387-dd0500403074?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=nick-nice-ve-R7PCjJDk-unsplash.jpg"

 if(info){
    return (
      <>
      <Card  style={{margin:"10px",width:"400px"}}>
        <CardMedia
          style={{height:"200px"}}
          component="img"
          alt="Weather"
          height="140"
          image={info.humidity>60 ? rainurl : info.temp>15 ? hoturl : coldurl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{textDecorationLine:"underline"}}>
          <b>{info.city} {info.humidity>60 ?<ThunderstormIcon/>  : info.temp>15 ? <SunnyIcon/> : <AcUnitIcon/>}</b>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component='div'>
            <p >Humidity:{info.humidity}</p>
            <p>Temperature:{info.temp}&#8451;</p>
            <p>Max-temp:  {info.maxtemp}&#8451;</p>
            <p>Min-temp:{info. mintemp}&#8451;</p>
          </Typography>
        </CardContent>
      </Card>
      
      </>
    );
  }
  }