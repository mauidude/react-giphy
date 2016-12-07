import React, {Component, PropTypes} from 'react';

export default class GifList extends Component {
  render() {
    return (
      <div>
        {
          this.props.gifs.map((gif, i) => {
            return <img key={i} src={gif.images.fixed_height_small.url} style={{padding: 5}} />;
          })
        }
      </div>
    );
  }
};

GifList.propTypes = {
  gifs: PropTypes.array
};
