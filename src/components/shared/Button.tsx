import React from "react";
//import type { ButtonStyles } from "../../types/components/shared/index";

type ButtonProps = {
  rendered: JSX.Element,
  variant: string,
  renderedColor?: string,
  classNom: string,
  inverted?: boolean
}

type ButtonState = {
  buttonStyles: Object
}

class Button extends React.Component<ButtonProps, ButtonState> {
  
  constructor(props: ButtonProps){
    super(props);
    this.state = {
      buttonStyles: {
        display: "inline-block",
        fontWeight: 500,
        textAlign: "center",
        verticalAlign: "center",
        borderRadius: "20%",
        backgroundColor: !this.props.inverted ? this.props.variant : this.props.renderedColor,
        color: !this.props.inverted ? this.props.renderedColor : this.props.variant,
        margin: "auto",
        cursor: "pointer",
        padding: "8 px 12 px",
        boxShadow: "1 px 2 px 3 px rgba(0, 0, 0, 0.2)",
        border: this.props.inverted ? "2px solid {this.props.renderedColor}" : 0
      }
    }
  }
  render(){
    return (
    <button style={this.state.buttonStyles} className={this.props.classNom}>
      {this.props.rendered}
    </button> );
  }
}

export default Button;