import React, { useState, useEffect } from 'react'
import { Radio,RadioGroup, FormControlLabel, CardContent, Typography } from '@material-ui/core';
import Pagination from '../components/Pagination'
import GraphContainer from '../components/GraphContainer'
import { Row, StyledContainer, CardContainer } from '../styled-components/div'
import { StyledCard, StyledCardAction } from '../styled-components/card'

export default function Dashboard({ weatherData, fetchWeatherData }) {
 const [temp, setTemp] = useState('F');
 const [tempSymbol, setTempSymbol] = useState('°F');
 const [dateArr, setDateArr] = useState([]);
 const [dateTextArr, setDateTextArr] = useState([]);
 const [selectedArr, setSelectedArr] = useState([]);
 const [selectedArrNew, setSelectedArrNew] = useState([]);
 const [dateSelected, setDateSelected] = useState(0);
 const [dataAccToDate, setDataAccToDate] = useState({});
 const [currentPage, setCurrentPage] = useState(1);
 const cardsPerPage = useState(3)[0];
 const indexOfLastCard = currentPage * cardsPerPage;
 const indexOfFirstCard = indexOfLastCard - cardsPerPage;
 const currentCards = dateArr && dateArr.slice(indexOfFirstCard, indexOfLastCard);
 const currentdateTextArr = dateTextArr && dateTextArr.slice(indexOfFirstCard, indexOfLastCard);
 const paginate = number => {
   setCurrentPage(number)
 }
 useEffect(()=>{
  if(temp === 'F') {setTempSymbol('°F'); return fetchWeatherData({ units: 'Imperial' })}
  if(temp === 'C') {setTempSymbol('°C'); return fetchWeatherData({ units: 'metric' })}
 },[temp,fetchWeatherData])
 useEffect(()=>{
  let newArr = [];
  selectedArr && selectedArr.length > 0 && selectedArr.map(arr => {
   let hr = new Date(arr.dt*1000).getUTCHours()
   let hrString = "";
   if(hr===0){
    hrString = "12am"
   }else if(hr === 12){
    hrString = "12pm"
   }else if(hr<12){
    hrString = `${hr}am`
   }else if(hr>12){
    hrString = `${hr-12}pm`
   }
   return newArr=[...newArr,{date: hrString, Temperature: parseFloat(arr.main.temp).toFixed(1)}]
  })
  setSelectedArrNew(newArr)
 },[selectedArr])
 useEffect(()=>{
  let arr = weatherData.list.map(item => {
   let ldt = new Date(item.dt * 1000).getUTCDate()
   return ldt
  })
  setDateArr(arr.filter((val,idx,self)=> self.indexOf(val) === idx))
  let locArr = weatherData.list.map(item => {
    let dt = new Date(item.dt  * 1000).toLocaleDateString('en-US',{
      weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
    })
    return dt;
  })
  setDateTextArr(locArr.filter((val,idx,self)=> self.indexOf(val) === idx))
 },[weatherData,setDateArr])
 useEffect(()=>{
  let arr={};
  dateArr && weatherData && dateArr.map(dt => arr[`${dt}`] = weatherData.list.filter(wd => {
   let ld = new Date(wd.dt*1000).getUTCDate()
   return ld === dt
  }))
 setDataAccToDate(arr)
 setSelectedArrNew([])
 setDateSelected(dateSelected || dateArr[0])
 },[dateArr,weatherData,setDataAccToDate,dateSelected])
 useEffect(()=>{
  setSelectedArr(dataAccToDate[`${dateSelected}`])
 },[weatherData,temp,dateSelected,setSelectedArr,dataAccToDate])
 return <StyledContainer maxWidth={false} jc="flex-start">
  <Row jc="space-between" height="50px" mWidth="80%" width="40%">
  <RadioGroup name="temp_selector" value={temp} onChange={e => setTemp(e.target.value)} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', width: "100%" }}>
   <FormControlLabel value="F" control={<Radio color="primary" />} label="Fahrenheit"/>
   <FormControlLabel value="C" control={<Radio color="primary" />} label="Celsius"/>
  </RadioGroup>
  </Row>
  <Pagination currentPage={currentPage} cardsPerPage={cardsPerPage} totalCards={dateArr.length} paginate={paginate} />
  <CardContainer padding="10px" mt="10px" mb="50px" >
   {currentCards && currentCards.map((d,idx) =>{
    let temp = 0;
    let avgTemp = 0;
    let len = 1;
    let localArr = dataAccToDate[`${d}`]
    if(localArr){
     localArr.map(item => temp += item.main.temp)
     len = localArr.length
     avgTemp = temp/len;
    }
    return <StyledCard key={d} active={d===dateSelected}>
     <StyledCardAction onClick={()=>setDateSelected(d)}>
      <CardContent style={{ padding: 0 }}>
       <Typography align="center"  variant="body2" color="textSecondary" component="p">{currentdateTextArr[idx]}</Typography>
      </CardContent>
      <CardContent style={{ padding: 0 }}>
       <Typography align="center" gutterBottom variant="h5" component="h2">{avgTemp.toFixed(1)} {tempSymbol}</Typography>
      </CardContent>
     </StyledCardAction>
    </StyledCard>
   })}   
  </CardContainer>
 {selectedArrNew && selectedArrNew.length > 1 && <GraphContainer selectedArrNew={selectedArrNew} tempSymbol={tempSymbol} />}
 </StyledContainer>
}