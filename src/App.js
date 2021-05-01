import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import { StylesProvider } from '@material-ui/core/styles';
import { fetchWeatherData } from "./actions/weather";
import { StyledBox, StyledContainer } from './styled-components/div';
import Loading from './pages/Loading';
import Dashboard from './containers/Dashboard';

const App = ({ data, fetchWeatherData }) => {
 useEffect(()=>{
  fetchWeatherData({ units: 'Imperial' })
 },[fetchWeatherData])
 return (<StylesProvider injectFirst>
  <StyledBox>
   <StyledContainer maxWidth="md">
    <Switch>
     {!data ? <Route path="/" render={props => <Loading {...props} />} /> 
     : <Route path="/" render={props => <Dashboard {...props} />} />}
     <Redirect to="/" />
    </Switch>
   </StyledContainer>
  </StyledBox>
 </StylesProvider>);
}

const mapStateToProps = state => ({
 data: state.weather.data
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
 fetchWeatherData  
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
