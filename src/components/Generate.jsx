import React from "react";
import { Section } from '../styles'

class Generate extends React.Component {
  state = {
    value: '',
    copy: false,
  };

  generate = async () => {
    const senha = Math.random().toString(36).slice(-10)
    // const senha = Math.random().toString(32).substr(2)
    // console.log('clicou')
    

    this.setState({
      value: senha,
      copy:true,
    })

    // const text = await navigator.clipboard.readText();
    // alert(text)
  }

  render() {
    const {value} = this.state;
    return (
      <Section>
        <label htmlFor="password">
          <input type="text" placeholder="Clique no botão!" name='password' value={value}/>
          <img src="https://cdn-icons-png.flaticon.com/512/54/54702.png" alt="copiar" />
        </label>
        <button onClick={this.generate}>
          Gerar Senha
        </button>
      </Section>
    );
  }
}

export default Generate;