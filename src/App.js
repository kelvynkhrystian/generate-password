import React from 'react';
import Generate from "./components/Generate";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Generate/>
      </>
    );
  }
}

export default App;