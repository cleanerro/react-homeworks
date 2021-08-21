import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    addUserInKey: (e: KeyboardEvent<HTMLInputElement>) => void

}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, addUserInKey} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)

    return (

        <div className={s.container}>
            <input value={name}
                   onChange={setNameCallback}
                   className={error ? inputClass : ''}
                   onKeyPress={addUserInKey}/>
            <button disabled={!!error} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div className={error && s.textError}>{error}</div>
        </div>
    )
}

export default Greeting
