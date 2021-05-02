import React, { useState } from 'react'
import { IconButton } from '@material-ui/core';
import { NavigateNext, NavigateBefore } from '@material-ui/icons';
import { Row } from '../../styled-components/div';

const Pagination = ({ cardsPerPage, totalCards, currentPage, paginate }) => {
 const pageNumberLimit = useState(5)[0]
 const [maxPageNumberLimit,setMaxPageNumberLimit] = useState(5)
 const [minPageNumberLimit,setMinPageNumberLimit] = useState(0)
 const pageNumbers = []
 for(let i = 0; i <= Math.ceil(totalCards/cardsPerPage); i++){
  pageNumbers.push(i)
 }
 const handleClickPrev = () => {
  if(currentPage === 1){
   return null
  }else{
   paginate(currentPage-1)
   if(currentPage-1<minPageNumberLimit+1){
    setMaxPageNumberLimit(maxPageNumberLimit-pageNumberLimit)
    setMinPageNumberLimit(minPageNumberLimit-pageNumberLimit)
   }
  }
 }
 const handleClickNext = () => {
  if(currentPage === pageNumbers.length-1){
   return null
  }else{
   paginate(currentPage+1)
   if(currentPage+1>maxPageNumberLimit){
    setMaxPageNumberLimit(maxPageNumberLimit+pageNumberLimit)
    setMinPageNumberLimit(minPageNumberLimit+pageNumberLimit)
   }
  }
 }
 return <Row data-testid="paginationRow" width="100%" mWidth="100%" height="50px" jc="space-between">
  <Row>
   {currentPage !== 1 && <IconButton onClick={handleClickPrev}>
    <NavigateBefore fontSize="large" style={{ color: '#000' }} />
   </IconButton>}
  </Row>
  <Row>
  {currentPage !== pageNumbers.length-1 && <IconButton onClick={handleClickNext}>
    <NavigateNext fontSize="large" style={{ color: '#000' }} />
   </IconButton>}
  </Row>
 </Row>
}
export default Pagination