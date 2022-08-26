import React from "react";
import InputMask from "react-input-mask";

const MaskedInput = ({ value, onChange}) => {

    function handleChange(event){
    onChange({
        ...event,
    })
}

    return (
        <InputMask 
        mask = "999.999.999-99" 
        value={value} 
        onChange={onChange}
        />
    )
};

export default MaskedInput; 