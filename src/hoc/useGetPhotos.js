import { gql, useQuery } from '@apollo/react-hooks'

export const useGetPhotos = ({categoryId}) => {
  
    const GET_PHOTOS = gql`
      query GET_PHOTOS($categoryId: ID) {
        photos(categoryId: $categoryId) {
          id
          categoryId
          src
          likes
          userId
          liked
        }
      }
    `
    const { loading, error, data } = useQuery(GET_PHOTOS, { variables: { categoryId } })
    return { loading, error, data }
}