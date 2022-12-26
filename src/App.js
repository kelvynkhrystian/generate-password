import React from 'react';
import Generate from "./components/Generate";
import Header from "./components/Header";
import './App.css'

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <main>
          <Generate/>
        </main>
        
      </>
    );
  }
}

export default App;