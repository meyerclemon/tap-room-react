// state, this.setState = hold/access/change data of component
// props = read only

import React from "react";
import KegList from "./KegList";
// import Header from './Header'
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

const App = () => (
  <section>
    <React.Fragment>
      <NavBar />
    </React.Fragment>
    {/* <Header /> */}
    <KegList />
  </section>
);



export default App;


