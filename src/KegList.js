import React, { Component } from "react";
import Keg from "./Keg";
import KegData from "./KegData";

export default class KegList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      kegs: KegData
    };
  }
  // state = {

  // }
  render() {
    return (
      <section className="keg-list">
        {this.state.kegs.map(item => (
          <Keg key={item.id} info={item} />
        ))}
      </section>
    );
  }
}
