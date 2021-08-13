import React, { useState } from 'react'
import styles, { Button, Form, Input, Title } from './styles'

const useInputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const onChange = (e) => setValue(e.target.value)
    return{
        value,
        onChange
    }
}


export const UserForm = ({ onSubmit, title }) => {
    const email = useInputValue('')
    const password = useInputValue('')
    
    return (
        <>
            <Title>{title}</Title>
            <Form onSubmit={onSubmit} >
                <Input placeholder='Email' {...email}/>
                <Input placeholder='Password' type='password' {...password} />
                <Button>{title}</Button>
            </Form>
        </>
    )
}
