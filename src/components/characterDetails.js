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
  const [toggle, setToggle]= useState(
    {
      isOpen: false,
    });
  const [firstEpisode, setEpisode ] = useState(null);

  const getCharacters =  (id)=> {
    return axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
      const item = res.data
      setCharacter(item);
      setUpload(false);;
    })

  }

  const getEpisode = url => {
    return axios.get(url)
    .then(res => {
      const item = res.data
      setEpisode(item);
      setUpload(false);
      setToggle({isOpen: !toggle.isOpen})
      console.log(firstEpisode);
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
            <CardText>Episode: {}</CardText>
            <Button color="info" onClick={()=> getEpisode(character.episode[0])}>First Episode</Button>
            <CardText className="form-text text-muted">ID: {character.id}</CardText>
          </CardBody>
        </Card>: <p>Loading...</p>}

        {toggle && firstEpisode !== null ?
          <Card>
            <CardBody>
              <CardTitle>First Episode
              </CardTitle>
              <CardSubtitle>Name: {firstEpisode.name}</CardSubtitle>
              <CardText>Episode: {firstEpisode.episode}</CardText>
              <CardText>Air Date: {firstEpisode.air_date}</CardText>
              <CardText className="form-text text-muted">ID: {firstEpisode.id}</CardText>
            </CardBody></Card>: null }

    </Row>
    </Container>
    );
}

export default CharacterDetail;
