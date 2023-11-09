import { Input } from './input.jsx'

export function Section({ name }) {
    return (
        <div className={`${name}-section`}>
            <h1>{name}</h1>
            <Input name='Name'/>
            <Input name='Email'/>
            <Input name='Phone Number'/>   
        </div>
    )
}