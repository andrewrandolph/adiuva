import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class rangePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      distance: 1000
    };

    this.onRangeChange = this.onRangeChange.bind(this);
    //this.onClickSave = this.onClickSave.bind(this);
  }

  onRangeChange(event) {
    this.setState({
      distance: event.target.value
    });
  }

  // onClickSave() {
  //   this.state.distance != 0 || this.state.distance >= 50000 ? this.props.actions.saveRange(this.state.distance) : alert("Enter a place");
  // }

  render() {
    return (
      <div>
        <h1>Current Range: {this.state.distance}</h1>
        <input
          type="text"
          onChange={this.onRangeChange}
          value={this.state.distance}
        />
        <input
          type="submit"
          onClick={this.onClickSave}
          value="Update Range"
        />
      </div>
    );
  }
}

rangePage.propTypes = {
  actions: PropTypes.object.isRequired,
  distance: PropTypes.number
};

function mapStateToProps(state, ownProps) {
  return {
    distance: state.distance
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(rangePage);
