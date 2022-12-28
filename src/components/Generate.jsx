import React from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Section } from '../styles/styles'
import passwordGenerator from '../utils/passwordGenerator'

class Generate extends React.Component {
  state = {
    value: '',
    copy: false,
  };

  setPassword = async () => {
    const senha = passwordGenerator()
    
    this.setState({
      value: senha,
      copied: false,
    })
  }

  render() {
    const {value} = this.state;
    return (
      <Section>
        <label htmlFor="password">
          <input
            type="text"
            placeholder="Clique no botão!" 
            name='password' value={value} 
            onChange={({target: {value}}) => this.setState({value, copied: false})}
          />

          <CopyToClipboard text={value}
            onCopy={() => this.setState({copied: true})}>
            <img src="https://cdn-icons-png.flaticon.com/512/54/54702.png" alt="copiar"/>
          </CopyToClipboard>
          
        </label>

        <button onClick={this.setPassword}>
          Generate Password
        </button>
      </Section>
    );
  }
}

export default Generate;