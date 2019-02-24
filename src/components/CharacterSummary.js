import React, { useState, useEffect } from 'react';
import { Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


const CharacterSummary = ({id, name, image, spiece, status}) => {
let statusLife;

status !== "Alive" ? statusLife = "1": statusLife = "0"
  return (

    <Col  lg={4} xs ={12}>
    <Card className="mt-3 mb-3">
      <CardImg style={{filter: "grayscale("+statusLife+")"}} top width="100%" src={image} alt="Card image character" />
          <CardBody >
            <CardTitle>Name: {name}</CardTitle>
            <CardSubtitle>Status: {status}</CardSubtitle>
            <CardText>Spiece: {spiece}</CardText>
            <CardText className="form-text text-muted">ID: {id}</CardText>
             <Link to = { '/character/'+id} ><Button color="info" >More info</Button></Link>
          </CardBody>
        </Card>
        </Col>
    );
}

export default CharacterSummary;
