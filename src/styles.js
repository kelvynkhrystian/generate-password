import styled from "styled-components";

export const Title = styled.header`
  align-items: center;
  color: white;
  display: flex;
  background: transparent;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
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
  }
  @media (min-width:600px) {
    justify-content: center;
    h2 {
      margin: 20px;
    }
  }
`

export const Section = styled.section`
  align-items: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 20px;
  margin-top: 100px;
  width: 90%;
  /* efeito vidro fosco */
  background: transparent;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.9 );
  backdrop-filter: blur( 5.5px );
  -webkit-backdrop-filter: blur( 13.5px );
`