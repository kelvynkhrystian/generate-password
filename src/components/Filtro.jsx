import React from "react";

class Filtros extends React.Component {
  render() {
    return (
      <section className="box-checkbox">
        <h1 id="filtro">Filtros</h1>
        <label htmlFor="maiusculas">
         <input type="checkbox" name="maiusculas"/>Maiúsculas
       </label>
       <label htmlFor="minusculas">
         <input type="checkbox" name="minusculas"/>Minúsculas
       </label>
       <label htmlFor="minusculas">
         <input type="checkbox" name="maiusculas"/>Números
       </label>
       <label htmlFor="maiusculas">
         <input type="checkbox" name="maiusculas"/>Símbolos
       </label>
      </section>
    );
  }
}

export default Filtros;