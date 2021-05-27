import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from '../pages/Dashboard';
import { fetchWeatherData } from '../actions/weather';

const mapStateToProps = (state) => ({
 weatherData: state.weather.data,
 error: state.weather.error
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
 fetchWeatherData
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);