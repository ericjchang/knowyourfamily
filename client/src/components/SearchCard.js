import React from 'react'
import { Container, Row, Col, Form, Button, Card} from "react-bootstrap";

export default () => {

    return (
        <>
        <Card>
            <Card.Header>Person's Name / Family Head's Name</Card.Header>
            <Card.Body>
                <Card.Title>Full name</Card.Title>
                <Card.Text>
                DOB / Gender / Address
                </Card.Text>
                <Button variant="primary">Show Person / Family Details</Button>
                <Button variant="danger">Location</Button>
            </Card.Body>
        </Card>
        </>
    )
}