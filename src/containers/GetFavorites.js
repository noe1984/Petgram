import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Loading } from '../styles/Loading'
import { ListOfFavs } from '../components/ListOfFavs'


const GET_FAVS = gql`
  query getFavs {
      favs {
      id
      categoryId
      src
      likes
      userId
      }
  }
`

export const GetFavorites = () => {
    const { loading, error, data } = useQuery(GET_FAVS, { fetchPolicy: 'cache-and-network' })
    if(loading) return <Loading />
    if(error) return 'Error'

    const { favs } = data
    return <ListOfFavs favs={favs} />
}

