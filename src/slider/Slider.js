import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';
import Loading from '../layout/Loading';
import './slider.css';

const styles = {
  captionContainer: {
    borderLeft: '1px solid #404238',
    marginTop: 15,
    padding: '0 15px 15px',
  },
  image: { height: '50vh' },
  listContainer: { display: 'flex', overflowX: 'scroll', paddingBottom: 50 },
};

const scrollThreshold = 500;

class Slider extends Component {
  componentDidMount() {
    const { actions = {} } = this.props;
    const { getInitialImages = () => {} } = actions;
    getInitialImages();
  }

  handleScroll = event => {
    const { actions = {} } = this.props;
    const { getImages = () => {} } = actions;
    const { clientWidth, scrollLeft, scrollWidth } = event.target || {};
    if (clientWidth + scrollLeft > scrollWidth - scrollThreshold) getImages();
  };

  renderItem = (image, index) => {
    return (
      <div key={index}>
        <img
          alt={image.description}
          src={image.urls.regular}
          style={styles.image}
        />
        {image.user.bio && (
          <div style={styles.captionContainer}>
            <span className="caption">{image.user.bio}</span>
          </div>
        )}
      </div>
    );
  };

  render() {
    const { images, loading } = this.props;
    return loading ? (
      <Loading show />
    ) : (
      <div>
        <h1 className="title">
          <span>More Kong for</span>
          <br />
          <span>your kingdom</span>
        </h1>
        <div onScroll={this.handleScroll} style={styles.listContainer}>
          {images.map((image, index) => this.renderItem(image, index))}
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  actions: PropTypes.object.isRequired,
  images: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

const mapStateToProps = state => {
  const {
    layout: { loading },
    slider: { images = [] },
  } = state;
  return { images, loading };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Slider);
