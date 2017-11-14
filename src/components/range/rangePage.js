import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class rangePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      range:
        {
          title: ""
        }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.rangeRow = this.rangeRow.bind(this);
  }

  onTitleChange(event) {
    const range = this.state.range;
    range.title = event.target.value;
    this.setState({
      range: range
    });
  }

  onClickSave() {
    this.state.range.title != '' ? this.props.actions.saverange(this.state.range) : alert("Enter a place");
  }

  onClickDelete(rangeTitle) {
    this.props.actions.deleterange(rangeTitle);
  }

  rangeRow(range, index) {
    return (
      <div key={index}>
        <span>{range.title}</span>
        <button onClick={() => this.onClickDelete(range.title)} className="btn btn-danger">Delete</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>This is a Range Page</h1>
        {this.props.agencies.map(this.rangeRow)}
        <h2>Set Range</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.range.title}
        />
        <input
          type="submit"
          onClick={this.onClickSave}
          value="Save"
        />
      </div>
    );
  }
}

rangePage.propTypes = {
  actions: PropTypes.object.isRequired,
  agencies: PropTypes.array.isRequired
};

rangePage.defaultProps = {
  agencies: []
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

export default connect(mapStateToProps, mapDispatchToProps)(rangePage);
