import React from 'react';
import Generate from "./components/Generate";
import Header from "./components/Header";
import './App.css'
import Filtros from './components/Filtro';

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <main>
          <Generate/>
          <Filtros />
        </main>
        
      </>
    );
  }
}

export default App;