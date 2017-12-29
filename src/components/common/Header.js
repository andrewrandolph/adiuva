import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { connect } from 'react-redux';
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
    console.log(this.props);
    return (
      <div>
        <BurgerMenu className={this.state.menuIsEnabled ? "burgerMenu menuIsExpanded" : "burgerMenu"} onClick={this.handleBurgerClick} menuIsEnabled={this.state.menuIsEnabled}/>
        <nav className={this.state.menuIsEnabled ? "navIsExpanded" : ""}>
          <ul>
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/configureHelpfulLocations" activeClassName="active">Configure Helpful Locations</Link></li>
            <li><Link to="/range" activeClassName="active">Configure Range</Link></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
          </ul>
        </nav>
        <h1 className="appVersion">v1-Pre Beta Release</h1>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    toggled: ownProps.isMenuToggled
  };
}

export default connect(mapStateToProps)(Header);
