import React from 'react';
import { Link } from 'react-router';
import Mapper from '../../containers/Mapper';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Adiuva</h1>
          <p>A way to add in emergency contacts</p>
        </div>
        <Mapper />
      </div>
    );
  }
}

export default HomePage;
