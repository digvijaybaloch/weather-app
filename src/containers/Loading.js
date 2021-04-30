import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '../pages/Loading';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Loading);