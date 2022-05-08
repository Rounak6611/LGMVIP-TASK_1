import Users from "./Components/cards";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { users_data: [], loading: false };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2000
    );
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navitem">
            <p class="text">My Users</p>
            
            <button className="fetchbt" onClick={this.updateState}>
            <b>GET USERS</b>
            </button>
          </div>
        </nav>
        <div className="userdatacontainer">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
        <div class="about-cotainer">
          <h3>About Lets Grow More</h3>
          <p className="about">Let's Learn Together, Let's "Grow Together"
Our goal is to help others to gain personal and professional skills in the area of Technological development. The purpose is to provide a structure through which students may exercise their right to freely associate in pursuit of a common purpose or goal that enhances community at LetsGrowMore.</p>
         
            

          
        </div>
        
      </>
    );
  }
}

export default App;