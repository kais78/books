import React, { useEffect, useState,useContext  } from "react";
import { useParams, Link,Redirect } from "react-router-dom";
import { Card, Button,Badge,CardImg,
  CardTitle, CardText, Row, Col } from 'reactstrap';
import {BookContext} from '../contexts/BookContextProvider'
import moment from 'moment';


export default function ShowBook(props) {
    const { deleteBook } = useContext(BookContext)
    const [redirect, setRedirect] = useState(false)
    let { id } = useParams();
    const [book, setBook] = useState("");

    const getBook = async (id) => {
    let res = await fetch("/rest/books/" + id);
    res = await res.json();
    setBook(res);
  };

  function removeMovie() {
    deleteBook(id)
    setRedirect(true)
  }

  useEffect(() => {
    getBook(id);
  }, []);

  return (
    <div className='bak'>
        <br></br>
     <Row>
     <Col sm="10" md={{ size: 3, offset: 2 }}>
      {redirect??<Redirect to='/'/>}
        <Card body>
        <CardImg top width="100%" src={book.cover} alt="k" />
          <CardText><h1>{book.title}</h1></CardText>
          <CardText><h3>{book.writer}</h3></CardText>
          <CardText>{moment(book.date).format('llll')}</CardText>
          <Col  sm={{ size: 'auto', offset: 8 }}>   
               <Button onClick={() => deleteBook(id)} color="danger"outline>
                DELETE<Badge color="secondary"> 
                </Badge>
               </Button>
          </Col>
        </Card>
      </Col>
      <Col sm="10" md={{ size: 5, offset: 1 }}><h2>Review</h2><h1>{book.title}</h1>{book.reviews}</Col>
      </Row>
     

    </div>
    )
}
