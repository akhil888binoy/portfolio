import React, { Component } from "react";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are needed.");
      return;
    }
    console.log(this.state);
  };

  render() {
    return (
      <div className="ui main">
        <h1>Add Contact</h1>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              placeholder="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue" onClick={this.add}>
            Add
          </button>
        </form>
      </div>
    );
  }
}
