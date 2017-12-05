import React from 'react';
import PropTypes from 'prop-types';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BurgerMenu />
        <nav>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          <Link to="/configureHelpfulLocations" activeClassName="active">Configure Helpful Locations</Link>
          <Link to="/range" activeClassName="active">Configure Range</Link>
        </nav>
        <h1 className="appVersion">v1.0 - M'aidez - Pre Beta Release</h1>
      </div>
    );
  }
}

export default Header;
