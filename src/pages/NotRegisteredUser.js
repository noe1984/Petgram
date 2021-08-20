import React, { useContext }from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation} from '../containers/RegisterMutation'
import { useLoginMutation } from '../containers/LoginMutation'


export const NotRegisteredUser = () => {

    const { activateAuth } = useContext(Context)
    const { registerMutation, data, loading, error} = useRegisterMutation()
    const { loginMutation, data: loginData , loading: loginLoading, error: loginError} = useLoginMutation()
    
    const handleRegisterSubmit = ({email, password}) => {
        // const input = { email, password }
        // const variables = { input }
        registerMutation({ variables: {input: {email, password}} })
        .then( response => { 
            const { signup } = response.data
            activateAuth(signup) 
        } )
    }

    const handleLoginSubmit = ({email, password}) => {
        loginMutation({ variables: {input: {email, password}} })
        .then( response => { 
            const { login } = response.data
            activateAuth(login) 
        } )
    }

    const errorMsg = error && 'ocurrio un problema o el usuario ya existe'
    const errorLog = loginError && 'La constraseña no es correcta o el usuario no existe'

    return <>
        <UserForm onSubmit={handleLoginSubmit} title='Iniciar Sesion' error={errorLog} loading={loginLoading} disabled={loginLoading}/>
        <UserForm onSubmit={handleRegisterSubmit} title='Registrarse' error={errorMsg} loading={loading} disabled={loading} />
    </>
}



