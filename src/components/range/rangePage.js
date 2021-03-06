import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mapActions from '../../actions/mapActions';

class rangePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      distance: ''
    };

    this.onRangeChange = this.onRangeChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onRangeChange(event) {
    this.setState({
      distance: event.target.value
    });
  }

  onClickSave() {
    this.state.distance >= 100 && this.state.distance <= 50000 ? this.props.actions.saveRange(this.state.distance) : alert("Enter another distance");
  }

  render() {
    return (
      <div className="displayWindow range-area-class">
        <h1>Current Range: {this.props.distance} M</h1>
        <div className="row">
          <input
            className="form-control col-sm-9"
            type="text"
            onChange={this.onRangeChange}
            value={this.state.distance}
          />
          <input
            className="btn btn-primary col-sm-2"
            type="submit"
            onClick={this.onClickSave}
            value="Update Range"
          />
        </div>
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
    distance: Number(state.distance)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(mapActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(rangePage);
