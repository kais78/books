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
          <CardTitle><h3>THis is One book Page</h3></CardTitle>
          <CardText>{book.title}</CardText>
          <CardText>{book.writer}</CardText>
          <CardText>{book.date}</CardText>
          <Button>Go to the list</Button>
        </Card>
      </Col>
      </Row>
      
    </div>
    )
}
