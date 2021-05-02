import styled, {keyframes} from 'styled-components'
import { Box, Container } from '@material-ui/core';


const mercuryUp = keyframes`
  from {
    height: 0px;
  }
  to { 
    height: 88px; 
  } 
`;

const StyledBox = styled(Box)`
 height: 100vh;
 display: flex; 
 background: linear-gradient(320deg, #85a3ce 0%, #f5dadf 74%);
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
`;

const StyledContainer = styled(Container)`
 height: 100vh;
 padding: 0;
 display: flex;
 flex-direction: ${({ fd }) => fd || 'column'};
 align-items: ${({ ai }) => ai || 'center'};
 justify-content: ${({ jc }) => jc || 'center'};
 box-sizing: border-box;
 @media (max-width: 768px) {
  padding-left: 8px;
  padding-right: 8px;
 }
`;

const Row = styled.div`
 display: flex;
 flex-direction: row;
 height: ${({ height }) => height || '100px'};
 width: ${({ width }) => width || '100px'};
 background-color: ${({ bg }) => bg || 'transparent'};
 align-items: ${({ ai }) => ai || 'center'};
 justify-content: ${({ jc }) => jc || 'center'};
 margin-top: ${({ mt }) => mt || '0'};
 margin-bottom: ${({ mb }) => mb || '0'};
 margin-left: ${({ ml }) => ml || '0'};
 margin-right: ${({ mr }) => mr || '0'};
 padding-top: ${({ pt }) => pt || '0'};
 padding-bottom: ${({ pb }) => pb || '0'};
 padding-left: ${({ pl }) => pl || '0'};
 padding-right: ${({ pr }) => pr || '0'};
 box-sizing: border-box;
 @media (max-width: 768px) {
  width: ${({ mWidth }) => mWidth || '100px'};
 }
`;

const CardContainer = styled.div`
 display: flex;
 flex-direction: row;
 width: ${({ width }) => width || '100%'};
 background-color: ${({ bg }) => bg || 'transparent'};
 align-items: ${({ ai }) => ai || 'center'};
 justify-content: ${({ jc }) => jc || 'space-evenly'};
 margin-top: ${({ mt }) => mt || '0'};
 margin-bottom: ${({ mb }) => mb || '0'};
 margin-left: ${({ ml }) => ml || '0'};
 margin-right: ${({ mr }) => mr || '0'};
 padding-top: ${({ pt }) => pt || '0'};
 padding-bottom: ${({ pb }) => pb || '0'};
 padding-left: ${({ pl }) => pl || '0'};
 padding-right: ${({ pr }) => pr || '0'};
 padding: ${({ padding }) => padding || '0'};
 box-sizing: border-box;
 @media (max-width: 768px) {
  justify-content: space-around;
 }
`;

const WrapperDiv = styled.div`
position:  relative;
  width: 30px;
  height:100px;
  border-radius: 30px;
  background: white;
  box-shadow:
    inset 0 -10px 0 rgba(255,255,255,0.1),
    inset 0 -3px 2px rgba(0,0,0,0.05),
    0 3px 3px rgba(0,0,0,0.05),
    0 0 5px rgba(237, 237, 237,1),
    inset 0 -5px 5px rgba(267, 267, 267,1),
    rgba(247, 247, 247,1) 5px -15px 60px 0px;
    &:after {
    content: '';
    position: absolute;
    width:40px;
    left: calc(50% - 20px);
    background: white;
    height: 40px;
    border-radius: 50%;
    bottom:-23px;
    box-shadow: rgba(237, 237, 237,1) 2px 2px 2px;
    border-bottom: 1px rgba(237, 237, 237,1);
    }
`;

const SpineDiv = styled.div`
position: absolute;
  left: calc(50% - 8px);
  width: 16px;
  height: 80px;
  top: 10px;
  z-index: 100;
  border-radius: 10px;
  background: white;
  box-shadow: inset 0px 2px 5px rgba(237, 237, 237,1);
  &:after {
   content: '';
    width: 100%;
    height: 20%;
    bottom:-10px;
    position:absolute;
    left:0;
     z-index: 10123423122;
    border-radius: inherit;
    background:linear-gradient(to top, rgba(109,104,212,1), transparent);
    }
    &:before{
    content:' ';
    z-index:10123423122;
    height: 88px;
    bottom:-8px;
    position: absolute;
    width: 16px;
    border-radius: inherit;
    background:linear-gradient(to top, rgba(109,104,212,1), transparent);
  box-shadow: inset 5px 5px 7px rgba(252, 249, 249,0.3),
    inset -5px 5px 7px rgba(252, 249, 249,0.2);
  animation: ${mercuryUp} 2s infinite;
  }
`;

const BallDiv = styled.div`
position: absolute;
  border-radius:50%;
  width: 25px;
  height:25px;
  left:2px;
  bottom:-16px;
  z-index:100;
  box-shadow: inset 1px 2px 5px rgba(252, 249, 249,0.2);
  background: radial-gradient(circle at center, rgba(126, 121, 217,1),
  rgba(109,104,212,1)
  );
`;


export {
 StyledBox, StyledContainer, Row, CardContainer, WrapperDiv, SpineDiv, BallDiv
}