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
        <Col >
          <Card body>
          <Link to={`/${book.id}`}>
              <h1>{book.title}</h1>
              <p>{book.writer}</p>
              <p>{book.date}</p>
              </Link>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          </Card><br></br>
        </Col>
        <Col >
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
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