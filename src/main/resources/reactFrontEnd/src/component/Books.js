import React, { useContext } from 'react'
import { Card, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
  import { BookContext } from '../contexts/BookContextProvider'

export default function Books() {
  const { allBooks} = useContext(BookContext)

  const list = () => {
    return allBooks.map((book, i) => {
      return (
        <Card key={i}>
            <Container>
              <Row>
                <Col >
                <h1>{book.title}</h1>
                <p>{book.date}</p>

                </Col>
              </Row>
            </Container>
          </Card>
      )
    })
  }

  return (
    <>
      {list()}
    </>
  )
}