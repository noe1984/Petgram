import React from 'react'
import { Form, Input, Title, Error } from './styles'
import { useInputValue } from '../../hooks/useInputValue'
import {Loading} from '../../styles/Loading'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ onSubmit, title, error, loading, disabled }) => {
    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({email: email.value, password: password.value})
    }
 
    return (
        <>
            <Form disabled={disabled} onSubmit={handleSubmit} >
                <Title>{title}</Title>
                <Input disabled={disabled} placeholder='Email' {...email}/>
                <Input disabled={disabled} placeholder='Password' type='password' {...password} />
                <SubmitButton disabled={disabled}>{title}</SubmitButton>
            </Form>
            {loading && <Loading height={50}/> }
            {error && <Error>{error}</Error>}
        </>
    )
}
