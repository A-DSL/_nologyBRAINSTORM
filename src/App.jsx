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

  const [ideaSpaces, setIdeaSpaces] = useState(
    [{spaceid: 999, name: "dummy", description: "dummy"}]
  )
  const [subIdeas, setSubIdeas] = useState(
    [{subid: 998, name: "dummy1", description: "dummy1", spaceid: 998},
    {subid: 999, name: "dummy2", description: "dummy2", spaceid: 999}]
  )


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ListPage />
        </Route>
        <Route path="/home">
          <ListPage />        
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
