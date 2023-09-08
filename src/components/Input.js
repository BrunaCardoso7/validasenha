import React, { useState } from "react";
import { Conteiner } from "./style/Conteiner";
import { ValPassword } from "./style/ValPassword";

function Input() {
    
    const [value, setValue] = useState('');
    const [isButotonDisabled, setButtonDisabled] = useState(true);    
    
    const handleChecked = (evt)=>{
        const inputValue = evt.target.value
        setValue(inputValue)
        
        const validationLength = value.length >=8;

        const validationUpper = /[A-Z]/.test(inputValue);

        const validationNumber = /[0-9]/.test(inputValue);

        setButtonDisabled(!validationLength || !validationNumber || !validationUpper)
    }
    const handleSubmit = (evt)=>{
        evt.preventDefault()
        alert("senha salva com sucesso cidadão!")
        window.location.reload()
    }
    return ( 
    <>
        <form onSubmit={ handleSubmit }>
            <Conteiner>
                <p>Sua senha precisa ter:</p>
                <ValPassword style={{ color: /[0-9]/.test(value)? 'green': 'red' }}>✅No minimo 1 número</ValPassword>
                <ValPassword style={{ color: /[A-Z]/.test(value)? 'green':'red' }}>✅Pelo menos uma letra Maiúscula</ValPassword>
                <ValPassword style={{ color: value.length >=8? 'green':'red' }}>✅No minímo 8 caracteres</ValPassword>
                <input type="text" value={ value } onChange={ handleChecked } />
                <button type="submit" disabled={isButotonDisabled}>salva</button>
            </Conteiner>
        </form>

    </>
    );
}

export default Input;