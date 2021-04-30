import styled from 'styled-components'
import { Box, Container } from '@material-ui/core';

const StyledBox = styled(Box)`
 height: 100vh;
 display: flex; 
 background: linear-gradient(#90e0ef, rgba(144,224,239,0.3));
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
`;

const StyledContainer = styled(Container)`
 height: 100vh;
 display: flex;
 flex-direction: ${({ fd }) => fd || 'column'};
 align-items: ${({ ai }) => ai || 'center'};
 justify-content: ${({ jc }) => jc || 'center'};
`;

const Row = styled.div`
 display: flex;
 flex-direction: row;
 height: ${({ height }) => height || '100px'};
 width: ${({ width }) => width || '100px'};
 background-color: ${({ bg }) => bg || 'transparent'};
 align-items: ${({ ai }) => ai || 'center'};
 justify-content: ${({ jc }) => jc || 'center'};
 margin-top: ${({ mt }) => mt || '0px'};
 margin-bottom: ${({ mb }) => mb || '0px'};
 margin-left: ${({ ml }) => ml || '0px'};
 margin-right: ${({ mr }) => mr || '0px'};
 padding-top: ${({ pt }) => pt || '0px'};
 padding-bottom: ${({ pb }) => pb || '0px'};
 padding-left: ${({ pl }) => pl || '0px'};
 padding-right: ${({ pr }) => pr || '0px'};
`;

export {
 StyledBox, StyledContainer, Row
}