import React, { useState, useEffect } from 'react';
import { Container,
   Row,
   Col,
   Card,
   CardImg,
   CardBody,
   CardHeader,
   CardTitle,
   CardSubtitle,
   CardText,
   Button
  } from 'reactstrap';
import axios from 'axios';


const CharacterDetail = (props) => {
  let statusLife;
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
    })

  }


  useEffect( () => {
    getCharacters(props.match.params.id);


  },[upload])

character.status !== "Alive" ? statusLife = "1": statusLife = "0"

  return (

    <Container>
    <Row>
      <Col lg={5} xs ={12}>
    {character && character.origin ? <Card >
      <CardImg style={{filter: "grayscale("+statusLife+")"}} top width="100%" src={character.image} alt="Card image character" />
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
        </Col>
        <Col lg={5} xs ={12}>
        {toggle && firstEpisode !== null ?
          <Card >
            <CardHeader className="text-white" style={{ backgroundColor: '#17a2b8' }} >First Episode</CardHeader>
            <CardBody>
              <CardSubtitle>Name: {firstEpisode.name}</CardSubtitle>
              <CardText>Episode: {firstEpisode.episode}</CardText>
              <CardText>Air Date: {firstEpisode.air_date}</CardText>
              <CardText className="form-text text-muted">ID: {firstEpisode.id}</CardText>
            </CardBody></Card>: null }
          </Col>

    </Row>
    </Container>
    );
}

export default CharacterDetail;
