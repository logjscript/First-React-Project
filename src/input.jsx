import { useState } from 'react'

export function Input({ name }) {
    const [input, setInput] = useState('');
    const [isEditing, setIsEditing] = useState(true);
    return (
        <form className='input-form' onSubmit={e => {
            e.preventDefault();
            setIsEditing(!isEditing);
          }}>
            <label className='input-label'>
                {name}: {' '}
                {isEditing ? (
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        />
                ) : (
                    <b>{input}</b>
                )}
            </label>
                <button className='input-btn' type='submit'>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
        </form>
    );
}