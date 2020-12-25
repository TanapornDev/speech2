import React, { Component } from 'react';



export default class Testapi extends Component {
  state = {
    Fromexpress: ''
  }

  getResponse = async() => {
    const response = await fetch('/Testapi');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  componentDidMount() {
    this.getResponse()
      .then(res => {
        const Data = res;
        this.setState({ Fromexpress: Data });
      })
  }
  render() {
    const { Fromexpress } = this.state;

    return (
      <div className="App">
        <h1>HELLO P'TAO</h1>
        <p>{Fromexpress.express}</p>
      </div>
    );
  }
}

