import {connect} from 'react-redux';
import {search} from '../actions';
import App from '../components/App';

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (query) => {
      dispatch(search(query));
    }
  }
};

export default connect(null, mapDispatchToProps)(App);
