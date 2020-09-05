import React from 'react';

import './App.css';
import Body from './components/Body/Body';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Detail from './components/Detail/Detail';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
<Router>
<Switch>
<Route exact path="/">

<Body></Body>
</Route>
<Route path="/detail/:Detail">

  <Detail></Detail>
</Route>
<Route path="*">

  <NoMatch></NoMatch>
</Route>
</Switch>


</Router>

   
    </div>
  );
}

export default App;
