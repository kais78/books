import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Card, Row,Col,CardImg} from 'reactstrap';
import { BookContext } from '../contexts/BookContextProvider'
import './Boks.css';
import moment from 'moment';




export default function Books() {
  const { allBooks} = useContext(BookContext)

  const list = () => {
    return allBooks.map((book, i) => {
      return (
        
        <div>
          <Row>
         
      </Row>
       <br/>
        <Row  xs="2">
        <Col sm="10" md={{ size: 3, offset: 2 }}>
          <Card body>
          <CardImg top width="100%" src={book.cover} alt="k" />

          <Link style={{color:"black"}} to={`/${book.id}`}>
              <h1>{book.title}</h1>
              <p>{book.writer}</p>
              {moment(book.date).format('l')}
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