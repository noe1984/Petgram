import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export const Home = ({id}) => {
    return (
        <> 
        <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales muy interesantes' >
            <ListOfCategories/>
            <ListOfPhotoCards categoryId={id}/>  
        </Layout>
        </>
    )
}

