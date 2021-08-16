import React, {useState} from 'react'

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setValue] = useState(() => {
      try {
        const item = localStorage.getItem(key)
        return item === null? initialValue : JSON.parse(item) 
      } catch (error) {
        console.log(error)
      }
    })
    
    const setLocalStorage = (value => {
      try {
        localStorage.setItem(key, JSON.stringify(value))
        setValue(value)
        } catch (error) {
          console.log(error) 
        }
      }
    )
  return [storedValue, setLocalStorage]
}

  
  