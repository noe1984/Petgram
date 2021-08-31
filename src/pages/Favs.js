import React from 'react'
import { GetFavorites } from '../containers/GetFavorites'
import { Layout } from '../components/Layout'

export const Favs = () => {
    return (
        <>
        <Layout title='Tus favoritos' subtitle='Aqui encuentras tus favoritos de Petgram'>
            <GetFavorites />
        </Layout>
        </>
    )
}
