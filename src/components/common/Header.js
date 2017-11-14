import React from 'react';
import PropTypes from 'prop-types';
import BurgerMenu from './BurgerMenu';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <div>
      <BurgerMenu />
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        <Link to="/configureHelpfulLocations" activeClassName="active">Configure Helpful Locations</Link>
        <Link to="/range" activeClassName="active">Configure Range</Link>
      </nav>
      <div className="jumbotron">
        <h1 className="appVersion">v1.0 - M'aidez - Pre Beta Release</h1>
      </div>
    </div>
  );
};

export default Header;
