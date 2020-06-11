import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export default function ShowBook() {
    let { id } = useParams();
  const [book, setBook] = useState("");

  const getBook = async (id) => {
    let res = await fetch("/rest/books/" + id);
    res = await res.json();
    setBook(res);
  };

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
          <CardText><p>{book.date}</p></CardText>
          <Button>Go to the list</Button>
        </Card>
      </Col>
      </Row>
      
    </div>
    )
}
