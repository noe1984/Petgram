import React from 'react'
import { useGetPhotos } from '../../hoc/useGetPhotos'
import { PhotoCard } from '../PhotoCard'


export const ListOfPhotoCards = (categoryId) => {
  // console.log(categoryId)
  const {loading, error, data} = useGetPhotos(categoryId)
  if (loading) return 'loading'
  if (error) return <p>Error</p>

  return (
    <ul>
      {data.photos.map((photoCard, id) => (
        <PhotoCard key={id} {...photoCard} />
        ))}
    </ul>
  )
}

