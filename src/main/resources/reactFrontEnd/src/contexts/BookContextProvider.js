import React, { createContext, useState, useEffect } from 'react'

export const BookContext = createContext()

export default function BookContextProvider(props) {
  const [allBooks, setAllBooks] = useState([])

  const fetchBooks = async () => {
    let res = await fetch('/rest/books')
    res = await res.json()
    setAllBooks(res)
  }

  useEffect(() => {
    fetchBooks()
  }, [])
  
  const values = {
    allBooks, 
  }

  return (
    <BookContext.Provider value={values}>
      {props.children}
    </BookContext.Provider>
  )
}