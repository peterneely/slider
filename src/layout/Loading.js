import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '70vh',
    justifyContent: 'center',
  },
};

const Loading = ({ show }) =>
  !show ? null : (
    <div style={styles.container}>
      <CircularProgress size={50} />
    </div>
  );

Loading.propTypes = {
  show: PropTypes.bool,
};

export default Loading;
