import React from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron as Jumbo } from 'reactstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo {
    background: url(https://source.unsplash.com/random) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 450px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    
  }
`;

const Jumbotron = () => {
  return (
    <Styles>
    <Jumbo fluid className='jumbo'>
      <div className='overlay'> </div>
      <Container fluid style={{
        paddingTop: "40px",
        paddingLeft: "120px",
        paddingRight: "120px",
      }}>
        <h1>Web Developer Blog</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa distinctio impedit laudantium
          magni molestiae nisi numquam praesentium voluptatibus voluptatum? Dicta. consectetur adipisicing elit. Culpa distinctio impedit laudantium
          magni molestiae nisi numquam praesentium voluptatibus voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse excepturi
          fugit hic libero nihil non omnis quaerat repellendus tempora tenetur. </p>
      </Container>
    </Jumbo>
    </Styles>
  );
}

export default Jumbotron;
