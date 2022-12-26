import React from "react";

class Generate extends React.Component {
  state = {
    value: '',
  };

  generate = () => {
    const senha = Math.random().toString(36).slice(-10)
    console.log('clicou')
    this.setState({
      value: senha,
    })
  }

  render() {
    const {value} = this.state;
    return (
      <section className="box-generate">
        <input type="text" placeholder="clique, gere e copie sua senha" id="input-senha" value={value}/>
        <button onClick={this.generate}><h2>Gerar Senha</h2></button>
      </section>
    );
  }
}

export default Generate;