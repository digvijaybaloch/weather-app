import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from '../pages/Dashboard';
import { fetchWeatherData, convertTemperature } from '../actions/weather';

const mapStateToProps = (state) => ({
 weatherData: state.weather.data,
 error: state.weather.error
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
 fetchWeatherData, convertTemperature
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);