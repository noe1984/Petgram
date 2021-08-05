import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { GlobalStyle } from './styles/GlobalStyles'

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
        : <> 
          <ListOfCategories />
          <ListOfPhotoCards categoryId={1}/> 
        </>
      }
    </>
  )
}
