import React, { useState, useEffect } from 'react';
import { Container, Row, Input } from 'reactstrap';
import axios from 'axios';

import CharacterSummary from './CharacterSummary';

const Characters = () => {
  const [people, setPeople ] = useState(null);
  const [term, setTerm ] = useState('');
  const [loading, setLoading ] = useState(true);

const getCharacters = () => {
return axios.get('https://rickandmortyapi.com/api/character/?page=1')
.then(res => {
  const item = res.data.results
  setPeople(item);
  setLoading(false);
})

}

const makeSearch = string => {

  if (string === "" ) {
    getCharacters();
  } else {
  let regex = new RegExp(string, 'i')
  let filtered = people.filter(r => regex.test(r.name));
    setPeople(filtered);
    }
}

useEffect(()=> {
  getCharacters();
},[])
  return (

    <Container>
      <form>
        <Input
          type="search"
            name="term"
            id="term"
            placeholder="Search "
            onChange ={e => { makeSearch(e.target.value) } }
            onClick ={e => { makeSearch(e.target.value) } }
            onKeyPress={e => {
                       if (e.key !== "Enter") return
                       makeSearch(e.target.value)
                   }}

          ></Input>
      </form>
    <Row>
    { people ? people.map(p => (<CharacterSummary key ={p.id} id= {p.id} name = {p.name} image = {p.image} spiece = {p.species} status={p.status}/>)): <p>Loading...</p>}
    </Row>
    </Container>
    );
}

export default Characters;
