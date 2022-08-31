import React from "react";
import InputMask from "react-input-mask";

const MaskedInput = ({ value, onChange }) => {

    function handleChange(event) {
        onChange({
            ...event,
        })
    }

    return (
        <InputMask
            className="outline-none"
            mask="999.999.999-99"
            placeholder="Digite seu CPF"
            value={value}
            onChange={onChange}
        />
    )
};

export default MaskedInput; 