import React, { useState, useEffect } from 'react';
import { Container,
   Row,
   Card,
   CardImg,
   CardBody,
   CardTitle,
   CardSubtitle,
   CardText,
   Button
  } from 'reactstrap';
import axios from 'axios';




const CharacterDetail = (props) => {

  const [character, setCharacter ] = useState([]);
  const [upload, setUpload ] = useState(true);

  const getCharacters =  (id)=> {
    return axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
      const item = res.data
      setCharacter(item);
      setUpload(false);
      console.log();
    })


  }


  useEffect( () => {
    getCharacters(props.match.params.id);

  },[upload])


  return (

    <Container>
    <Row>
    {character && character.origin ? <Card >
      <CardImg top width="100%" src={character.image} alt="Card image character" />
          <CardBody >
            <CardTitle>Name: {character.name}</CardTitle>
            <CardSubtitle>Status: {character.status}</CardSubtitle>
            <CardText>Spiece: {character.species}</CardText>
            <CardText>Type: {character.type}</CardText>
            <CardText>Gender: {character.gender}</CardText>
            <CardText>Origin: {character.origin.name}</CardText>
            <Button color="info" >First Episode</Button>
            <CardText className="form-text text-muted">ID: {character.id}</CardText>
          </CardBody>
        </Card>: <p>Loading...</p>}

    </Row>
    </Container>
    );
}

export default CharacterDetail;
