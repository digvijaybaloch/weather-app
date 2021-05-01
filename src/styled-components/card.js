import styled from 'styled-components'
import { Card, CardActionArea } from '@material-ui/core';

const StyledCard = styled(Card)`
 height: ${({ active }) => active ? '166px' : '150px'};
 width: ${({ active }) => active ? '166px' : '150px'};
 background-color: rgba(255,255,255,0.1);
 display: flex;
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
 margin: 0;
 padding: 0;
 border-radius: 10px;
 box-shadow: ${({ active }) => active ? "20px 20px 50px rgba(0,0,0,0.2)" :  "20px 20px 50px rgba(0,0,0,0.1)" };
 border-top: 1px solid rgba(255,255,255,0.5);
 border-left: 1px solid rgba(255,255,255,0.5);
 backdrop-filter: ${({ active }) => active ? "none" : "blur(5px)" };
 @media (max-width: 768px) {
  margin-right: 5px;
  margin-left: 5px;
 }
`;

const StyledCardAction = styled(CardActionArea)`
 display: flex;
 flex-direction: column; 
 align-items: center;
 justify-content: space-around; 
 height:100%;
 padding-left: 10px;
 padding-right: 10px;
 @media (max-width: 768px) {
  padding-left: 5px;
  padding-right: 5px;
 }
`;

export {
 StyledCard, StyledCardAction
}