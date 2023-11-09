import { useState } from 'react'
import './App.css'
import { Section } from './section.jsx';
import { Form } from './form.jsx'

export default function App() {
  const [inputValues, setInputValues] = useState({
    'Name': '',
    'Email': '',
    'Phone Number': '',
    'School Name': '',
    'Field of Study': '',
    'Date Attended': '',
    'Company Name': '',
    'Position in Organization': '',
    'Responsibilities': '',
  });

    function handleInputChange(value, name) {
        setInputValues({
            ...inputValues, 
            [name]: value,
        });
    }
  return (
    <>
      <Section
        className='general-section'
        name='General Information'
        inputNames={['Name', 'Email', 'Phone Number']}
        stateValues={inputValues}
        handleInput={handleInputChange}
        />
      <Section
        className='education-section'
        name='Education'
        inputNames={['School Name', 'Field of Study', 'Date Attended']}
        stateValues={inputValues}
        handleInput={handleInputChange}
        />
      <Section
        className='experience-section'
        name='Experience'
        inputNames={['Company Name', 'Position in Organization', 'Responsibilities']}
        stateValues={inputValues}
        handleInput={handleInputChange}
        />
      <Form 
        stateValues={inputValues}
      />
    </>
  )
}


