import React, { Component } from "react";

export default class Keg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  addCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  lowerCount = () => {
    this.setState({ count: this.state.count - 1 });
  };
  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { img, brewery, name, pint, origin, abv } = this.props.info;
    return (
      <article className="keg">
        <img src={img} width="150" alt="keg" />
        <div>
          <section className="description">
            
          <h3>{brewery}</h3><hr/><h5>({origin}) <hr/></h5>
          
          <h4>{name}</h4>
          
          <h5><hr/>abv: {abv}<hr/></h5>
          <h4>Pint: ${pint}</h4>
          
          <h5><button type="button" onClick={this.addCount}>+</button><button type="button" onClick={this.lowerCount}>-</button> Sold : {this.state.count}/124</h5>
          </section>
        </div>
      </article>
    );
  }
}
