import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mapActions from '../../actions/mapActions';

class aboutAdiuvaApp extends React.Component {

  render() {
    return (
      <div className="aboutAdiuva">
        About Adiuva! - Coming soon...
      </div>
    );
  }
}

export default aboutAdiuvaApp;
