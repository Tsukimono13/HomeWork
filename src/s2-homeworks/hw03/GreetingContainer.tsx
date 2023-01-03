import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name:string) => void// need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: any) => {
        if (name.trim() !== "") {
            props.addUserCallback(name)
            setName("")
        } else {
            setError("Ошибка! Введите имя!")
        }

        const pureOnBlur = (name: string, setError: any) => {
            if (name === "") {
            setError ("Ошибка! Введите имя!")}
        }// если имя пустое - показать ошибку
        }

        const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: any) => {
        if (e.key === 'Enter' && name) {
            setName("")
        }// если нажата кнопка Enter - добавить
        }


    const setNameCallback = (e: any) => { // need to fix any
        setName('some name') // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = 0 // need to fix
    const lastUserName = 'some name' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
