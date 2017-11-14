import React from 'react';
import PropTypes from 'prop-types';
import BurgerMenuChild from './BurgerMenuChild';
import { Link, IndexLink } from 'react-router';

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsEnabled: this.props.menuIsEnabled
    };
  }
  handleClick() {
    const menuNav = document.querySelector('nav');
    this.setState({
      menuIsEnabled: !this.state.menuIsEnabled
    }, menuNav.classList.toggle("navIsExpanded"));
  }
  render() {
    return (
      <BurgerMenuChild className= {this.state.menuIsEnabled ? "burgerMenu menuIsExpanded" : "burgerMenu"}  onClick={() => this.handleClick()}>Click me if you dare!</BurgerMenuChild>
    );
  }
}

BurgerMenu.propTypes = {
  menuIsEnabled: false
};

BurgerMenu.defaultProps = {
  menuIsEnabled: false
};

export default BurgerMenu;
