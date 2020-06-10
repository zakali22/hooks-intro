import React from 'react';
import {Switch, Route} from 'react-router-dom'

// Components
import Welcome from "./components/Welcome/Welcome.component.jsx"
import NavBar from "./components/NavBar/NavBar.component.jsx"
import Counter from "./components/Counter/Counter.component.jsx"

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/counter" component={Counter}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
