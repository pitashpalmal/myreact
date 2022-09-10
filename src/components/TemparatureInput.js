import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f:'Fahrenheit',
};

export default function TemparatureInput({temperature, scale, onTemparetureChange}) {
    // TemparatureInput({temperature, scale, onTemparetureChange}) is a props Destructuring 
    

    return(
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input type="text" value= {temperature} onChange={(e) => onTemparetureChange(e, scale)}></input>
        </fieldset>
    );
}
