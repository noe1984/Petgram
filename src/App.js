import React from 'react'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyles'
import { Router } from '@reach/router'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

export const App = () => {

  const UserLogged = ({children}) => {
    return children({isAuth: false})
  }

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
          <Home path='/' />
          <Home path='/pet/:id' />
          <Detail path='/detail/:detailId' />
      </Router>
      <UserLogged>
        {
          ({isAuth}) => 
          isAuth 
          ? <Router>
              <Favs path='/favs' />
              <User path='/user' />
          </Router>
          
          : <Router>
            <NotRegisteredUser path='/favs' />
            <NotRegisteredUser path='/user' />
          </Router>
        }
      </UserLogged>
        <NavBar /> 
    </>
  )
}
