import React from 'react'
import { UserForm } from '../components/UserForm'
import Context from '../Context'

export const NotRegisteredUser = () => {
    return (
        <Context.Consumer>
            {
                ({activateAuth}) => {
                    return(
                        <>
                            <UserForm onSubmit={activateAuth} title={'Registrarse'}/>
                            <UserForm onSubmit={activateAuth} title={'Iniciar sesion'}/>
                        </>
                    ) 
                }
            }
        </Context.Consumer>
    )
}
