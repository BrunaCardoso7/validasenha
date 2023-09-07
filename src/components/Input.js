import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Conteiner } from "./style/Conteiner";
import { ValPassword } from "./style/ValPassword";
function Input() {
    const [value, setValue] = useState(undefined);
    return ( 
    <>
        <Conteiner>
            <p>Sua senha precisa ter:</p>
            <ValPassword><AiFillCheckCircle/>No minimo 1 número!</ValPassword>
            <ValPassword><AiFillCheckCircle/>Pelo menos uma letra Maiúscula!</ValPassword>
            <ValPassword><AiFillCheckCircle/>No minímo 6 letra!</ValPassword>
            <input type="text" value={ value } onChange={ evt => setValue(evt.target.value) }/>
            <button type="submit">salva</button>
        </Conteiner>
    </>
    );
}

export default Input;