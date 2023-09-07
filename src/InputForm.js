import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Body } from "./components/style/Body";
import Input from "./components/Input";

function InputForm() {
  return (
    <>
      <GlobalStyle/>
      <Body>
        <h1>Validação de senha</h1>
        <hr/>
        <Input/>

      </Body>
    </>
  );
}

export default InputForm;
