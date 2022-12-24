import React from "react";

class Generate extends React.Component {
  render() {
    return (
      <section className="box-generate">
        <input type="text" placeholder="clique, gere e copie sua senha" id="input-senha" />
        <button><h2>Gerar Senha</h2></button>
      </section>
    );
  }
}

export default Generate;