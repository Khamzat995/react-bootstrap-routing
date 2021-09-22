import React from 'react';
import Slider from '../Components/Slider';
import Jumbotron from '../Components/Jumbotron';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ocean from '../Images/ocean.jpeg';
import oceanOne from '../Images/oceanOne.jpg';


function Home() {
return (
  <>
    <Slider />
    <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
      <Row>
        <Col>
          <Card style={{width: '18rem', boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <Card.Img variant='top' src={ocean} />
            <Card.Body>
              <Card.Title>WebDew Blog</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Card.Text>
              <Button variant='primary'>Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{width: '18rem', boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <Card.Img variant='top' src={ocean} />
            <Card.Body>
              <Card.Title>WebDew Blog</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Card.Text>
              <Button variant='primary'>Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{width: '18rem', boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <Card.Img variant='top' src={ocean} />
            <Card.Body>
              <Card.Title>WebDew Blog</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Card.Text>
              <Button variant='primary'>Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{width: '18rem', boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <Card.Img variant='top' src={ocean} />
            <Card.Body>
              <Card.Title>WebDew Blog</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Card.Text>
              <Button variant='primary'>Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Jumbotron />
    <Container style={{paddingTop:"40px", marginBottom:"30px"}} >
      <Row>
        <Col md={7}>
          <img src={oceanOne} height={350} alt='картинка'/>
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

  )
}

export default Home;