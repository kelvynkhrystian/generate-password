import React from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Section } from '../styles/styles'
import passwordGenerator from '../utils/passwordGenerator'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Generate extends React.Component {
  state = {
    value: '',
    copy: false,
  };


  setPassword = async () => {
    
    const senha = passwordGenerator();
    
    this.setState({
      value: senha,
      copied: false,
    })
  }

  toast = () => {
    return toast.success('Senha Copiada', {
      position: "bottom-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    
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
            <img src="https://cdn-icons-png.flaticon.com/512/54/54702.png" alt="copiar" onClick={this.toast} />
          </CopyToClipboard>
          
        </label>

        <button onClick={this.setPassword}>
          Generate Password
        </button>

        <p><ToastContainer/></p>
      </Section>
    );
  }
}

export default Generate;