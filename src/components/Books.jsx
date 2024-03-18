

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import '../css/Book.css'

const Books = ({ role }) => {
  const [books, setBooks] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3001/book/books')
      .then(res => {
        setBooks(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }, []) // Empty dependency array means the effect runs only once, equivalent to componentDidMount

  return (
    <div className='book-list'>
      {books.map(book => (
        <BookCard key={book.id} book={book} role={role} />
      ))}
    </div>
  )
}

export default Books
