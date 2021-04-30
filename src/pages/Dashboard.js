import React, { useState, useEffect } from 'react'
import { Radio,RadioGroup, FormControlLabel, IconButton, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { NavigateNext, NavigateBefore } from '@material-ui/icons';
import Chart from "react-google-charts";
import { Row, StyledContainer } from '../styled-components/div'
import { StyledCard } from '../styled-components/card'

export default function Dashboard({ weatherData, fetchWeatherData }) {
 const [temp, setTemp] = useState('F');
 const [tempSymbol, setTempSymbol] = useState('°F');
 const [dateArr, setDateArr] = useState([]);
 const [selectedArr, setSelectedArr] = useState([]);
 const [selectedArrNew, setSelectedArrNew] = useState([]);
 const [dateSelected, setDateSelected] = useState(0);
 const [dataAccToDate, setDataAccToDate] = useState({});
 const [dataPointsForGraph, setDataPointsForGraph] = useState([]);

 useEffect(()=>{
  if(temp === 'F') {setTempSymbol('°F'); return fetchWeatherData({ units: 'Imperial' })}
  if(temp === 'C') {{setTempSymbol('°C'); return fetchWeatherData({ units: 'metric' })}}
 },[temp,fetchWeatherData])

 useEffect(()=>{
  let newArr = [['Date', 'Temperature']];
  selectedArr && selectedArr.length > 0 && selectedArr.map(arr => {
   let hr = new Date(arr.dt*1000).getUTCHours()
   console.log(hr)
   let hrString = "";
   if(hr===0){
    hrString = "12 AM"
   }
   if(hr === 12){
    hrString = "12 PM"
   }
   if(hr<12){
    hrString = `${hr} AM`
   }
   if(hr>12){
    hrString = `${hr-12} PM`
   }
   return newArr=[...newArr,[hrString, parseFloat(arr.main.temp)]]
  })
  setSelectedArrNew(newArr)
 },[selectedArr])

 useEffect(()=>{
  let arr = weatherData.list.map(item => {
   let ldt = new Date(item.dt * 1000).getUTCDate()
   return ldt
  })
  setDateArr(arr.filter((val,idx,self)=> self.indexOf(val) === idx))
 },[weatherData,setDateArr])

 useEffect(()=>{
  let arr={};
  dateArr && weatherData && dateArr.map(dt => arr[`${dt}`] = weatherData.list.filter(wd => {
   let ld = new Date(wd.dt*1000).getUTCDate()
   return ld === dt
  }))
 setDataAccToDate(arr)
 },[dateArr,weatherData,setDataAccToDate])

 useEffect(()=>{
  setSelectedArr(dataAccToDate[`${dateSelected}`])
 },[weatherData,temp,dateSelected,setSelectedArr,dataAccToDate])
 console.log("selectedArr:",selectedArr)

 const dateBuilder = (d) => {
  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  let day = days[d.getDay()]
  let date = d.getUTCDate()
  let month = months[d.getUTCMonth()]
  let year = d.getFullYear()
  return `${day}, ${date} ${month} ${year}`
 }
 
 return <StyledContainer maxWidth={false} jc="flex-start">
  <Row jc="space-between" width="50%">
  <RadioGroup name="temp_selector" value={temp} onChange={e => setTemp(e.target.value)} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', width: "100%" }}>
   <FormControlLabel value="F" control={<Radio color="primary" />} label="Fahrenheit"/>
   <FormControlLabel value="C" control={<Radio color="primary" />} label="Celsius"/>
  </RadioGroup>
  </Row>
  <Row width="100%" jc="space-between" >
   <IconButton>
    <NavigateBefore fontSize="large" style={{ color: '#000' }} />
   </IconButton>
   <IconButton>
    <NavigateNext fontSize="large" style={{ color: '#000' }} />
   </IconButton>
  </Row>
  <div>
   {dateArr && dateArr.map((d,idx) =>{
    let temp = 0;
    let avgTemp = 0;
    let len = 1;
    let localArr = dataAccToDate[`${d}`]
    if(localArr){
     localArr.map(item => temp += item.main.temp)
     len = localArr.length
     avgTemp = temp/len;
    }
    let todayDateTemp = new Date().getTime();
    let todatDate = new Date(todayDateTemp + (idx * 86400000))
    return <StyledCard key={d}>
     <CardActionArea style={{ padding: 10 }} onClick={()=>setDateSelected(d)}>
      <CardContent>
       <Typography variant="body2" color="textSecondary" component="p">{dateBuilder(todatDate)}</Typography>
      </CardContent>
      <CardContent>
       <Typography gutterBottom variant="h5" component="h2">{avgTemp.toFixed(1)} {tempSymbol}</Typography>
      </CardContent>
     </CardActionArea>
    </StyledCard>
   })}
  </div>
 {selectedArrNew && selectedArrNew.length > 1 && <Row bg="red" width="100%">
  <Chart height={500} width={"100%"} chartType="ColumnChart" loader={<div>Loading Chart</div>} data={selectedArrNew} options={{
   title: "Temperature Data",
   legend: { position: 'none' },
   chartArea: { width: "30%" },
   hAxis: {
    title: 'Temperature',
    minValue: 0,
  },
  vAxis: {
    title: tempSymbol,
  },
  }} />
  </Row>}
 </StyledContainer>
}