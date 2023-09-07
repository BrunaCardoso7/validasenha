import React, { useState } from "react";
import { Conteiner } from "./style/Conteiner";
import { ValPassword } from "./style/ValPassword";

function Input() {
    
    const [value, setValue] = useState('');
    const [isButotonDisabled, setButtonDisabled] = useState(true)

    const validationLength = value.length >=8 ? { color: 'green' } : { color: 'red' };
    
    const reg = /[A-Z]/
    const validationUpper = reg.test(value)? {color: 'green'}: {color: 'red'};
    
    const regex = /[0-9]/
    const validationNuber = regex.test(value)? {color: 'green'} : {color: 'red'}
    
    const handleChecked = (evt)=>{
        setValue(evt.target.value)
        
    }



    return ( 
    <>
        <form action="#">
            <Conteiner>
                <p>Sua senha precisa ter:</p>
                <ValPassword style={validationNuber}>✅No minimo 1 número</ValPassword>
                <ValPassword style={validationUpper}>✅Pelo menos uma letra Maiúscula</ValPassword>
                <ValPassword style={validationLength}>✅No minímo 8 caracteres</ValPassword>
                <input type="text" value={ value } onChange={ handleChecked } />
                <button type="submit" disabled={isButotonDisabled}>salva</button>
            </Conteiner>
        </form>

    </>
    );
}

export default Input;