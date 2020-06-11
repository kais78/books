import React, { createContext, useState, useEffect } from 'react'
import Books from "../component/Books";
export const BookContext = createContext()

export default function BookContextProvider(props) {
  const [allBooks, setAllBooks] = useState([])

  const appendBooks = (book) => {
    setAllBooks([...allBooks, book])
  }

  const fetchBooks = async () => {
    let res = await fetch('/rest/books')
    res = await res.json()
    setAllBooks(res)
  }
  function deleteBook(id) {
    setAllBooks(Books.filter(r => r.id !== id))
    fetch('/rest/books/' + id, {
      method: 'DELETE'
    })
   //updateAllBooks()
    props.history.push('/')
  }

  useEffect(() => {
    fetchBooks()
  }, [])
  
  const values = {
    allBooks,
    deleteBook, 
    appendBooks
  }

  return (
    <BookContext.Provider value={values}>
      {props.children}
    </BookContext.Provider>
  )
}