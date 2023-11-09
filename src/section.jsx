import { useState } from 'react'
import { Input } from './input.jsx'

function makeInputs(inputNames, stateValues, handleInput) {
    return inputNames.map((inputName, index) => (
      <Input
        key={index}
        name={inputName}
        value={stateValues[inputName]}
        handleFunction={handleInput}
      />
    ));
  }

export function Section({ name, inputNames, stateValues, handleInput }) {
    return (
        <div className='section'>
          <h1>{name}</h1>
          {makeInputs(inputNames, stateValues, handleInput)}
        </div>
      );
}