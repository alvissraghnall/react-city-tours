import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ArrowCircleLeftIcon } from '@material-ui/icons';

const WrapperDiv = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const ErrorImg = styled.img`
  margin-bottom: .4em;
  width: auto;
  height: auto;
  
`;

const Text = styled.p`
  font-weight: 300;
  font-variant: oblique;
`;

export default class NotFound extends Component {
  
  
  render(){
    return (
      <>
      <WrapperDiv>
        <ErrorImg src="../assets/error-404.svg" alt="404 Error Image" />
        
        <Text>The requested URL was not found on this server. </Text>
        <Link to="/"> <ArrowCircleLeftIcon /> Click Here to return back to HomePage!</Link> 
      </WrapperDiv>
      </>);
  }
}