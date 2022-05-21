import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} 
export default function MyRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="Donneur">Donneur</Link>
          </li>
          <li>
            <Link to="/Donneurs/create">Ajouter Donneur</Link>
          </li>
        </ul>

        <hr />
        <hr />

        <Switch>
          <Route path="/Donneurs" exact>
            <Donneurs />
          </Route>
          <Route path="/Donneurs/create">
            <CreatePodcast />
          </Route>
          <Route path="/Donneurs/:id">
            <Donneurs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
