import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { Loading } from '../styles/Loading'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const PhotoCardWithQuery = ({ id }) => {
    const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, { variables: {id } })

    if (error) return <h2>Internal Server Error</h2>
    if (loading) return <Loading />
    return (
        <PhotoCard {...data.photo} />
    )
}