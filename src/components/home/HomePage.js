import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Mapper from '../../containers/Mapper';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Mapper agencies={this.props.agencies}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    agencies: state.agencies
  };
}

export default connect(mapStateToProps)(HomePage);
