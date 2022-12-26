import React from 'react';
import { Title } from '../styles'

class Header extends React.Component {
  render() {
    return (
      <Title>
        <img
          src="https://img.freepik.com/icones-gratis/cadeado_318-889192.jpg?w=2000" 
          alt="logo"
        />
        <h2>Lhama Password Generator</h2>
        <img
          src="https://img.freepik.com/icones-gratis/cadeado_318-889192.jpg?w=2000" 
          alt="logo"
        />
      </Title>
    );
  }
}

export default Header;