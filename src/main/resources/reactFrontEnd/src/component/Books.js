import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, Card, Row, Col,CardImg} from 'reactstrap';
import { BookContext } from '../contexts/BookContextProvider'
import './Boks.css';
import moment from 'moment';




export default function Books() {
  const { allBooks } = useContext(BookContext)

  const sortedBooks = [...allBooks].sort((a, b) => {
    return a.date - b.date;
  });


  const list = () => {
    return sortedBooks.map((book, i) => {
      return (
        <Col key={i} className="my-3">
          <Card style={{height:"440px"}}>
          <CardImg top width="100%" src={book.cover} alt="k" style={{height:'14rem'}}/>

          <Link style={{color:"black"}} to={`/${book.id}`}>
              <h1>{book.title}</h1>
              <p>{book.writer}</p>
              {moment(book.date).format('llll')}
              </Link>
          </Card>
        </Col>  
      )
      
    })
  }
   
  return (
    <Container>
      <Row xs="1" md="3">
        {list()}
      </Row>
    </Container>
  )
}