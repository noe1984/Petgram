import React from 'react'
import styles, { Button, Form, Input, Title } from './styles'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit, title }) => {
    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({email: email.value, password: password.value})
    }

    return (
        <>
            <Title>{title}</Title>
            <Form onSubmit={handleSubmit} >
                <Input placeholder='Email' {...email}/>
                <Input placeholder='Password' type='password' {...password} />
                <Button>{title}</Button>
            </Form>
        </>
    )
}
