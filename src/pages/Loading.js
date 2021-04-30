import React from 'react'
// import CircularProgress from '@material-ui/core/CircularProgress';
import tenor from '../assets/images/tenor.gif'

export default function Loading() {
 return <React.Fragment>
  <img height="100px" width="100px" src={tenor} alt="Loading..." />
  {/* <CircularProgress /> */}
  </React.Fragment>
}