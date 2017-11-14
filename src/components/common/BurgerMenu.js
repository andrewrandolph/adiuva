import React from 'react';
import PropTypes from 'prop-types';
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
BurgerMenu.defaultProps = { menuIsEnabled: false };
class BurgerMenuChild extends React.Component {
  toggleClassName() {
    this.props.onClick();
  }
  render() {
    return <div className={this.props.className} onClick={() => this.toggleClassName()} > {this.props.children} </div>;
  }
}

export default BurgerMenu;
