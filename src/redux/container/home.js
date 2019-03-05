import { connect } from 'react-redux';
import HomeScreen from '../../components/homeScreen';
import {forceUpdate} from '../services/home/action';

const mapStateToProps = (state) => ({
    forceUpdateReply: state.home.forceUpdate,
});

const mapDispatchToProps = (dispatch) => ({
     forceUpdate: (data) => dispatch(forceUpdate(data)),
});

const Home = connect(
 mapStateToProps,
 mapDispatchToProps
)(HomeScreen);

export default Home;

