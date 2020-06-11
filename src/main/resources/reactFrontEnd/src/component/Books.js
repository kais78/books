import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardTitle, Row,Col, CardText } from 'reactstrap';
import { BookContext } from '../contexts/BookContextProvider'
import './Boks.css';




export default function Books() {
  const { allBooks} = useContext(BookContext)

  const list = () => {
    return allBooks.map((book, i) => {
      return (
        <div>
           <br/>
        <Row  xs="2">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card body>
          <Link style={{color:"black"}} to={`/${book.id}`}>
              <h1>{book.title}</h1>
              <p>{book.writer}</p>
              <p>{book.date}</p>
              </Link>
          </Card><br></br>
        </Col>
      </Row>
      </div>    
      )
      
    })
  }
 
  return (
    <>
      {list()}
    </>
  )
}