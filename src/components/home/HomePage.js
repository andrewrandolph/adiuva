import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Mapper from '../../containers/Mapper';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mapClass">
        <Mapper className="actualMap" distance={this.props.distance} agencies={this.props.agencies}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    agencies: state.agencies,
    distance: state.distance
  };
}

HomePage.propTypes = {
  agencies: PropTypes.array,
  distance: PropTypes.number
};

export default connect(mapStateToProps)(HomePage);
