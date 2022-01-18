import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  
  
  render(){
    return <h1> You just hit a nonexistent route! Click <Link to="/"> Here </Link> to return back to HomePage!</h1>
  }
}