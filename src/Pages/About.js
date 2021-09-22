import React from 'react';
import Jumbotron from '../Components/Jumbotron';
import { Col, Container, Row } from 'react-bootstrap';
import oceanFree from '../Images/oceanFree.jpeg';

function About() {
  return (
    <>
      <Jumbotron />
      <Container style={{paddingTop:"40px", marginBottom:"30px", width: "1200px"}} >
        <Row>
          <Col md={7}>
            <img src={oceanFree} height={400} alt='картинка'/>
          </Col>
          <Col md={5}>
            <h2>Web Developer Blog</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa distinctio impedit laudantium
              magni molestiae nisi numquam praesentium voluptatibus voluptatum? Dicta. consectetur adipisicing elit. Culpa distinctio impedit laudantium
              magni molestiae nisi numquam praesentium voluptatibus voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse excepturi
              fugit hic libero nihil non omnis quaerat repellendus tempora tenetur.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;