import React, { Component } from 'react'


class Main extends Component {

    render() {
      return ( 
       <p> 
        {this.props.data ? this.props.data.title : "Loading"}
        <br />
        {this.props.data ? this.props.data.paragraph : "Loading"}
        </p>
         );
    }
  }
  
  export default Main;