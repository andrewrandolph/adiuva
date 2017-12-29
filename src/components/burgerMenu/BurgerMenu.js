import React from 'react';
import PropTypes from 'prop-types';

const BurgerMenu = ({menuIsEnabled, onClick}) => {
  return (
    <div className = {menuIsEnabled ? "burgerMenu menuIsExpanded" : "burgerMenu"}  onClick={onClick}>Menu
      <div className="tripleBurger1"></div>
      <div className="tripleBurger2"></div>
      <div className="tripleBurger3"></div>
    </div>
  );
};

BurgerMenu.propTypes = {
  menuIsEnabled: PropTypes.boolean,
  onClick: PropTypes.function
};

export default BurgerMenu;