import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BurgerMenuChild from './BurgerMenuChild';
import { Link, IndexLink } from 'react-router';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/mapActions';

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsEnabled: this.props.menuIsEnabled
    };
  }
  handleClick() {
    this.setState({
      menuIsEnabled: !this.state.menuIsEnabled
    });
    this.props.actions.toggleMenu(this.state.menuIsEnabled);
  }
  render() {
    return (
      <BurgerMenuChild className = {this.state.menuIsEnabled ? "burgerMenu menuIsExpanded" : "burgerMenu"}  onClick = {() => this.handleClick()}>Menu <div className="tripleBurger1"></div> <div className="tripleBurger2"></div> <div className="tripleBurger3"></div> </BurgerMenuChild>
    );
  }
}

BurgerMenu.propTypes = {
  actions: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  return {
    navToggled: state.menuIsEnabled
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);
