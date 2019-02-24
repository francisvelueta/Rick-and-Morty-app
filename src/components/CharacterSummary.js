import React, { useState } from 'react';
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
const {status, SetStatus } = useState(null);



  return (
    <Col  lg={4} xs ={12}>
    <Card>
        <CardImg top width="100%" src={image} alt="Card image character" />
          <CardBody>
            <CardTitle>Name: {name}</CardTitle>
            <CardSubtitle>Status: {status}</CardSubtitle>
            <CardText>Spiece:  {spiece}</CardText>
            <CardText className="form-text text-muted">ID: {id}</CardText>
            <Button color="info">More info</Button>
          </CardBody>
        </Card>
        </Col>
    );
}

export default CharacterSummary;
