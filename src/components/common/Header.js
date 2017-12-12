import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { Link, IndexLink } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsEnabled: false
    };
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
  }

  handleBurgerClick() {
    this.setState({
      menuIsEnabled: !this.state.menuIsEnabled
    });
  }

  render() {
    return (
      <div>
        <BurgerMenu className={this.state.menuIsEnabled ? "burgerMenu menuIsExpanded" : "burgerMenu"} onClick={this.handleBurgerClick} menuIsEnabled={this.state.menuIsEnabled}/>
        <nav className={this.state.menuIsEnabled ? "navIsExpanded" : ""}>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          <Link to="/configureHelpfulLocations" activeClassName="active">Configure Helpful Locations</Link>
          <Link to="/range" activeClassName="active">Configure Range</Link>
        </nav>
        <h1 className="appVersion">v1-Pre Beta Release</h1>
      </div>
    );
  }
}

export default Header;
