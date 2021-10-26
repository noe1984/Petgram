import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = ({id}) => {
    return (
        <> 
        <Layout title='Tu app de fotos de gatitos' subtitle='Con Petgram puedes encontrar fotos de animales muy interesantes' >
            <ListOfCategories/>
            <ListOfPhotoCards categoryId={id}/>  
        </Layout>
        </>
    )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
    return prevProps.id === props.id
})
