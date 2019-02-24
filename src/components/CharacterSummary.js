import React, { useState, useEffect } from 'react';
import { Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
Col } from 'reactstrap';
import axios from 'axios';


const CharacterSummary = ({id, name, image, spiece, status}) => {
let statusLife;

status !== "Alive" ? statusLife = "1": statusLife = "0" 
  return (

    <Col  lg={4} xs ={12}>
    <Card >
      <CardImg style={{filter: "grayscale("+statusLife+")"}} top width="100%" src={image} alt="Card image character" />
          <CardBody >
            <CardTitle>Name: {name}</CardTitle>
            <CardSubtitle>Status: {status}</CardSubtitle>
            <CardText>Spiece: {spiece}</CardText>
            <CardText className="form-text text-muted">ID: {id}</CardText>
            <Button color="info">More info</Button>
          </CardBody>
        </Card>
        </Col>
    );
}

export default CharacterSummary;
