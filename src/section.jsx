import { useState } from 'react'
import { Input } from './input.jsx'

export function Section({ name, inputNames }) {
    const [inputValues, setInputValues] = useState({});

    function handleInputChange(value, name) {
        setInputValues({
            ...inputValues, 
            [name]: value,
        });
    }

    return (
        <div className='section'>
            <h1>{name}</h1>
            <Input 
            name={inputNames[0]}
            value={inputValues[inputNames[0]]}
            handleFunction={handleInputChange}
            />
            <Input 
            name={inputNames[1]}
            value={inputValues[inputNames[1]]}
            handleFunction={handleInputChange}
            />
            <Input 
            name={inputNames[2]}
            value={inputValues[inputNames[2]]}
            handleFunction={handleInputChange}
            />
        </div>
    )
}