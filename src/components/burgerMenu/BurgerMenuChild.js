import React from 'react';
import PropTypes from 'prop-types';

class BurgerMenuChild extends React.Component {
  toggleClassName() {
    this.props.onClick();
  }
  render() {
    return <div className={this.props.className} onClick={() => this.toggleClassName()} > {this.props.children} </div>
  }
}

export default BurgerMenuChild;
