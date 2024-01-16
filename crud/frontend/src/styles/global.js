import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
//todos os itens vao ter:
  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif; //importado no index.html pra funcionar
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
  }
`;

export default Global;
