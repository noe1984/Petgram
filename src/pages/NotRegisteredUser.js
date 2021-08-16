import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation} from '../containers/RegisterMutation'


export const NotRegisteredUser = () => {
    const { registerMutation, data, loading, error} = useRegisterMutation()
    
    return (
        <Context.Consumer> 
            {
                ({activateAuth}) => {
                    const onSubmit = ({email, password}) => {
                        // const input = { email, password }
                        // const variables = { input }
                        registerMutation({ variables: {input: {email, password}} })
                        .then(activateAuth)
                    }

                    const errorMsg = error && 'ocurrio un problema o el usuario ya existe'

                    return <>
                        <UserForm onSubmit={onSubmit} title='Registrarse' error={errorMsg} loading={loading} disabled={loading} />
                        <UserForm onSubmit={activateAuth} title='Iniciar Sesion'/>
                    </>
                }
            }
        </Context.Consumer>
    )
}