import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class AgencyPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course:
        {
          title: ""
        }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({
      course: course
    });
  }

  onClickSave() {
    this.props.actions.saveAgency(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Agencies</h1>
        {this.props.agencies.map(this.courseRow)}
        <h2>Add Emergency Agency</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
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

AgencyPage.propTypes = {
  actions: PropTypes.object.isRequired,
  agencies: PropTypes.array.isRequired
};

AgencyPage.defaultProps = {
  agencies: []
};

function mapStateToProps(state, ownProps) {
  return {
    agencies: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AgencyPage);
