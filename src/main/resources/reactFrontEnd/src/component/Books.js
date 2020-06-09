import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText } from 'reactstrap';
import { BookContext } from '../contexts/BookContextProvider'
import { CardImg,CardDeck, CardSubtitle, CardBody,Row,Col,Container } from 'reactstrap';
import './Boks.css';
import ShowBook from './ShowBook';




export default function Books() {
  const { allBooks} = useContext(BookContext)

  const list = () => {
    return allBooks.map((book, i) => {
      return (
        <CardDeck>
        <Card className="body1">
          <CardBody>
            <CardTitle className="card1"><h1></h1></CardTitle>
            <CardSubtitle><p></p></CardSubtitle>
            <Card key={i}>
            <Container>
              <Row>
                <Col >
                <Link to={`/${book.id}`}>
                <h1>{book.title}</h1>
                <p>{book.writer}</p>
                <p>{book.date}</p>
                </Link>
                </Col>
              </Row>
            </Container>
          </Card>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          </CardBody>
        </Card>
      </CardDeck>
      )
      
    })
  }

  return (
    <>
      {list()}
    </>
  )
}