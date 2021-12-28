import React from 'react'
import { useGetPhotos } from '../../hoc/useGetPhotos'
import { PhotoCard } from '../PhotoCard'
import { Loading } from '../../styles/Loading'


export const ListOfPhotoCards = (categoryId) => {
  // console.log(categoryId)
  const {loading, error, data} = useGetPhotos(categoryId)
  if (loading) return <Loading />
  if (error) return <p>Error</p>

  return (
    <ul>
      {data.photos.map( photo => (
        <PhotoCard key={photo.id} {...photo} />
        ))}
    </ul>
  ) 
}

