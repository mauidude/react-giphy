import {connect} from 'react-redux';
import {search} from '../actions';
import GifList from '../components/GifList';

const mapStateToProps = (state) => {
  return {
    gifs: state.gifs.gifs
  };
};

export default connect(mapStateToProps, null)(GifList);
