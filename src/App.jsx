import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ListPage from './Containers/ListPage/ListPage';

function App() {

  //fetch most user data here. URLs are as follows for localhost:
  //GET ALL:
  //http://localhost:8080/ideas
  //http://localhost:8080/subideas
  //For /ideas:
  // - /{spaceid}: Get idea with the passed spaceid.
  // - /modify and /create: Used for modification/creation
  //    respectively. Both push a RequestBody idea up.
  // - /delete: Takes a RequestBody idea, finds the one on SQL and
  //    deletes it.
  //For /subideas:
  // - /{spaceid}: Get all subideas with the passed spaceid.
  // - /modify and /create: Same as ideaspace.
  // - /delete: Same as ideaspace.

  const [ideaSpaces, setIdeaSpaces] = useState(
    [{spaceid: 999, name: "dummy", description: "dummy"},
    {spaceid: 1000, name: "dummier", description: "dummier"},
    {spaceid: 1001, name: "dummiest", description: "dummiest"}]
  )
  const [subIdeas, setSubIdeas] = useState(
    [{subid: 998, name: "dummy1", description: "dummy1", spaceid: 998},
    {subid: 999, name: "dummy2", description: "dummy2", spaceid: 999}]
  )

  const retrieveIdeaSpaces = () => {
    return fetch("http://localhost:8080/ideas", {
      method: 'GET',
      crossDomain: true,
      headers: {
        'Content-Type': 'nology-brainstorm/json',
        'API-Key': 'secret'
      }
    }).then( (ideas) =>
      ideas.json()
    ).then( (jsonideas) => {
      setIdeaSpaces(jsonideas);
      console.log(jsonideas);   
    })
  }
  const retrieveSubIdeas = () => {
    return fetch("http://localhost:8080/subideas", {
      method: 'GET',
      crossDomain: true,
      headers: {
        'Content-Type': 'nology-brainstorm/json',
        'API-Key': 'secret'
      }
    }).then( (subideas) =>
      subideas.json()
    ).then( (jsonsubs) => {
      setSubIdeas(jsonsubs);
      console.log(jsonsubs);   
    })
  }
  
  useEffect(() => {
    retrieveIdeaSpaces();
    retrieveSubIdeas();
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ListPage ideaSpaces={ideaSpaces}/>
        </Route>
        <Route path="/home">
          <ListPage ideaSpaces={ideaSpaces}/>    
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
