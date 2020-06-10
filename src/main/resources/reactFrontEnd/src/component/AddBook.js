import React, {useState} from "react";
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default function AddBook(props) {
    const [title, settitle] = useState('');
    const [writer, setwriter] = useState('');
    const [date, setdate] = useState('');

    const addBook = async (e) => {
        e.preventDefault()

        const book = {
            title: title, 
            writer: writer,
            date: +date
          }

           // send new book to backend
    let res = await fetch('/rest/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
      })
      res = await res.json()
  
      props.history.push('/')
    }


   return (
    <Container>
    <div className="mx-5 px-5">
    <h1>ADD NEW BOOK</h1>
    <Form onSubmit={addBook} className="my-5 p-5">
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="title" className="mr-sm-2">TITLE</Label>
        <Input type="text" name="TITLE" id="title" placeholder="Title " onChange={e=>settitle(e.target.value)}/>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="writer" className="mr-sm-2">WRITER</Label>
        <Input type="text" name="Writer" id="writer" placeholder="Writer"  onChange={e=>setwriter(e.target.value)}/>
      </FormGroup>

      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="date" className="mr-sm-2">DATE</Label>
        <Input type="text" name="Date" id="date" placeholder="Date"  onChange={e=>setdate(e.target.value)} />
      </FormGroup>
      <Button>Submit</Button>
      </Form>
    </div>
  </Container>
    )
}
