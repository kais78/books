import React, { useEffect, useState,useContext  } from "react";
import { useParams, Link,Redirect } from "react-router-dom";
import { Card, Button,Badge,
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
    <div>
        <br></br>
     <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Card body>
          <CardText><h1>{book.title}</h1></CardText>
          <CardText><h3>{book.writer}</h3></CardText>
          <CardText>{moment(book.date).format('llll')}</CardText>
          <Col  sm={{ size: 'auto', offset: 10 }}>   
               <Button onClick={() => deleteBook(id)} color="danger"outline>
                DELETE<Badge color="secondary"> 
                </Badge>
               </Button>
          </Col>
        </Card>
      </Col>
      </Row>
     

    </div>
    )
}
