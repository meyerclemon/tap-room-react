// state, this.setState = hold/access/change data of component
// props = read only

import React from "react";
import KegList from "./KegList";
// import Header from './Header'
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

const App = () => (
  <React.Fragment>
    <NavBar />
    <KegList />
  </React.Fragment>
);

export default App;
