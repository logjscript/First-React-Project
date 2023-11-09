import { useState } from 'react'
import { Input } from './input.jsx'

export function Section({ name, inputNames, stateValues, handleInput }) {

    return (
        <div className='section'>
            <h1>{name}</h1>
            <Input 
            name={inputNames[0]}
            value={stateValues[inputNames[0]]}
            handleFunction={handleInput}
            />
            <Input 
            name={inputNames[1]}
            value={stateValues[inputNames[1]]}
            handleFunction={handleInput}
            />
            <Input 
            name={inputNames[2]}
            value={stateValues[inputNames[2]]}
            handleFunction={handleInput}
            />
        </div>
    )
}