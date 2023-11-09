import { useState } from 'react'

export function Input({ name, value, handleFunction }) {
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
                        className='input-text'
                        value={value}
                        onChange={e => handleFunction(e.target.value, name)}
                        />
                ) : (
                    <b>{value}</b>
                )}
            </label>
                <button className='input-btn' type='submit'>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
        </form>
    );
}