import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class AgencyPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      agency:
        {
          title: ""
        }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.agencyRow = this.agencyRow.bind(this);
  }

  onTitleChange(event) {
    const agency = this.state.agency;
    agency.title = event.target.value;
    this.setState({
      agency: agency
    });
  }

  onClickSave() {
    this.state.agency.title != '' ? this.props.actions.saveAgency(this.state.agency) : alert("Enter a place");
  }

  onClickDelete(agencyTitle) {
    this.props.actions.deleteAgency(agencyTitle);
  }

  agencyRow(agency, index) {
    return (
      <div key={index}>
        <span>{agency.title}</span>
        <button onClick={() => this.onClickDelete(agency.title)} className="btn btn-danger">Delete</button>
      </div>
    );
  }

  render() {
    return (
      <div className="displayWindow agencies-area-class">
        <h1>Agencies</h1>
        {this.props.agencies.map(this.agencyRow)}
        <h2>Add Emergency Agency</h2>
        <div className="row">
          <input
            className="form-control col-sm-9"
            type="text"
            onChange={this.onTitleChange}
            value={this.state.agency.title}
          />
          <input
            className="btn btn-primary col-sm-2"
            type="submit"
            onClick={this.onClickSave}
            value="Save"
          />
        </div>
      </div>
    );
  }
}

AgencyPage.propTypes = {
  actions: PropTypes.object.isRequired,
  agencies: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    agencies: state.agencies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AgencyPage);
