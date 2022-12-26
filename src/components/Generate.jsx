import React from "react";

class Generate extends React.Component {
  state = {
    value: '',
  };

  generate = async () => {
    const senha = Math.random().toString(36).slice(-10)
    // const senha = Math.random().toString(32).substr(2)
    console.log('clicou')
    this.setState({
      value: senha,
    })
  }

  render() {
    const {value} = this.state;
    return (
      <section className="box-generate">
        <header>
        <img
          src="https://img.freepik.com/icones-gratis/cadeado_318-889192.jpg?w=2000" 
          alt="logo"
        />
        <h2>Gerador de senha aletatória </h2>
        <img
          src="https://img.freepik.com/icones-gratis/cadeado_318-889192.jpg?w=2000" 
          alt="logo"
        />
      </header>
        <input type="text" placeholder="clique, gere e copie sua senha" id="input-senha" value={value}/>
        <button onClick={this.generate}><h2>Gerar Senha</h2></button>
      </section>
    );
  }
}

export default Generate;