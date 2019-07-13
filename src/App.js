// state, this.setState = hold/access/change data of component
// props = read only

import React from "react";
import KegList from "./KegList";
import Header from './Header'
import "./App.css";

const App = () => (
  <section>
    <Header />
    <KegList />
  </section>
);

export default App;


