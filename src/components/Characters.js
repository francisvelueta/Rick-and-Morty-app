import React, { useState, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import axios from 'axios';

import CharacterSummary from './CharacterSummary';


const Characters = () => {
  const [people, setPeople ] = useState(null);
  const [loading, setLoading ] = useState(true);

const getCharacters = () => {
return axios.get('https://rickandmortyapi.com/api/character/?page=1')
.then(res => {
  const item = res.data.results
  setPeople(item);
  setLoading(false);
})

}

useEffect(()=> {
  getCharacters();
},[])
  return (

    <Container>
    <Row>
    { people ? people.map(p => (<CharacterSummary key ={p.id} id= {p.id} name = {p.name} image = {p.image} spiece = {p.species} status={p.status}/>)): <p>Loading...</p>}
    </Row>
    </Container>
    );
}

export default Characters;
