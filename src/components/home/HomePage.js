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
        <div className="jumbotron">
          <h1>Adiuva</h1>
          <p>A way to add in emergency contacts</p>
        </div>
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
