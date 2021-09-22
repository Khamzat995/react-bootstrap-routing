import React from 'react';
import { Carousel } from 'react-bootstrap';
import oceans from '../Images/oceans.jpg';
import oceanOne from '../Images/oceanOne.jpg';
import oceanTwo from '../Images/oceanTwo.jpg';

export default function Slider () {
  return (
    <Carousel>
      <Carousel.Item style={{'height': '650px'}}>
        <img
            className='d-block w-100 active'
            src={oceans}
            alt='First slide'
        />
          <Carousel.Caption>
            <h3>Web Developer Blog</h3>
            <p>Lorem ipsum dolor sit amet. </p>
          </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item style={{'height': '650px'}}>
        <img
          className='d-block w-100 active'
          src={oceanOne}
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>Web Developer Blog</h3>
          <p>Lorem ipsum dolor sit amet. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height': '650px'}}>
        <img
          className='d-block w-100 active'
          src={oceanTwo}
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>Web Developer Blog</h3>
          <p>Lorem ipsum dolor sit amet. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )};

