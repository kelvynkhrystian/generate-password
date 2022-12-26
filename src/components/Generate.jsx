import React from "react";
import { Section } from '../styles'

class Generate extends React.Component {
  state = {
    value: '',
  };

  generate = async () => {
    const senha = Math.random().toString(36).slice(-10)
    // const senha = Math.random().toString(32).substr(2)
    // console.log('clicou')
    // const text = await navigator.clipboard.readText();
    // alert(text)

    setTimeout(async () => {
      const text = await navigator.clipboard.readText();
      console.log(text);
    }, 2000);

    this.setState({
      value: senha,
    })
  }

  render() {
    const {value} = this.state;
    return (
      <Section>
        <input type="text" placeholder="Clique no botão!" value={value}/>
        <button onClick={this.generate}>
          Gerar Senha
        </button>
      </Section>
    );
  }
}

export default Generate;