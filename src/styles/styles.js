import styled from "styled-components";

export const Title = styled.header`
  align-items: center;
  color: white;
  display: flex;
  background: transparent;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  justify-content: space-around;
  position: fixed;
  padding: 10px;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999px;

  img {
    width: 50px;
  }
  h2 {
    text-align: center;
    font-size: large;
  }
  @media (min-width:600px) {

    h2 {
      font-size: xx-large;
      margin: 20px;
    }
  }
`

export const Section = styled.section`
  align-items: center;
  background: transparent;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.9 );
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 20px;
  margin-top: 150px;
  width: 90%;

  label {
    align-items: center;
    background-color: white;
    border-radius: 5px;
    display: flex;
    height: 50px;
    margin-bottom: 10px;
    width: 90%;

  }

  input {
    border: none;
    border-radius: 5px;
    font-size: large;
    font-weight: 700;
    height: 90%;
    outline-color: rgb(0, 0, 0);  
    padding: 0px 20px;
    width: 100%;
  }
  
  img {
    cursor: pointer;
    height: 30px;
    margin: 10px;
    width: 25px;
    opacity: 70%;
  }

  button {
    backdrop-filter: blur( 5.5px );
    background-color: transparent;
    border: 2px solid purple;
    border-radius: 10px;
    box-shadow: 0 1px 11px 0 rgba( 31, 38, 135, 0.1 );
    color: white;
    cursor: pointer;
    font-size: large;
    font-weight: 800;
    padding: 20px 10px;
    width: 90%;
}

  button:active {
    transform: scale(0.98);
  }

  img:active {
    transform: scale(0.75);
  }

  @media (min-width:600px) {

    margin-top: 120px;
    padding: 80px 20px;
    width: 30%;

    input {
      font-size: larger;
      padding: 0px 20px;
    }

    button {
      font-size: larger;
      padding: 20px 60px;
    }
  }
`

