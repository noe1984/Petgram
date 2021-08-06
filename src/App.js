import React from 'react'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyles'
import { Router } from '@reach/router'

export const App = () => {
  const urlParams = new URLSearchParams(location.search)
  const detailId = urlParams.get('detail')
  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId 
        ? <PhotoCardWithQuery id={detailId}/>
        :<Router>
          <Home path='/' />
          <Home path='/pet/:id' />
        </Router> 
      }
    </>
  )
}
