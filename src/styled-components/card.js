import styled from 'styled-components'
import { Card } from '@material-ui/core';

const StyledCard = styled(Card)`
 height: auto;
 width: 180px;
 background-color: rgba(255,255,255,0.3);
 display: flex;
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
 margin: 0;
 padding: 10;
 border-radius: 20px;
`;

export {
 StyledCard
}