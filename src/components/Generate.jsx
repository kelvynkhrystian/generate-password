import React from "react";

class Generate extends React.Component {
  render() {
    return (
      <section>
        <input type="text" placeholder="clique, gere e copie sua senha" />
        <button> Gerar Senha</button>
      </section>
    );
  }
}

export default Generate;