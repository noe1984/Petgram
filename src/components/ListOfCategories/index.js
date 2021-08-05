import React, {Fragment, useEffect, useState} from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'
import { Loading } from '../../styles/Loading'
 

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    fetch('https://api-noe1984.vercel.app/categories')
    .then(res => res.json())
    .then(response => {
      setCategories(response)
      setLoading(false)
    })  
  },[])
  return {categories, loading}
}



export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  
  const { categories, loading } = useCategoriesData()


  useEffect(function () {
    const onScroll = e => {
      const newShowfixed = window.scrollY > 200
      showFixed !== newShowfixed && setShowFixed(newShowfixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  },[showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading? <Loading />
        : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  
  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}
