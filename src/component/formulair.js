import React from 'react'
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap'

function Form() {
    return (
        <div className="bb">
          <Card className="cardd" style={{ width: '23rem' }}>
  <Card.Img  variant="top" src="rami.jpg" height="250"/>
  <Card.Body className="title">
    <Card.Title >Rami ksaier</Card.Title>
    <Card.Text className="title">
      The night is Dark , and full of Horror
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <div className="cardd">
    <ListGroupItem className="cardd">Adress: Nabeul/Tunisia</ListGroupItem>
    <ListGroupItem className="cardd">Age: 26 ans</ListGroupItem>
    <ListGroupItem className="cardd">Phone: 25.208.928</ListGroupItem>
    <ListGroupItem className="cardd">Email: ramos.ksaier@gmail.com</ListGroupItem>
    <ListGroupItem className="cardd">Education level: Master</ListGroupItem>
    <ListGroupItem className="cardd">Hobby: football</ListGroupItem>
    </div>

  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Call me</Card.Link>
    <Card.Link href="#">Send email</Card.Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default Form
