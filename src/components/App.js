import React from "react";
var count =0;

export default class App extends React.Component{
state = {
 count: 0
 };
  addCount = () => {
	      count = count+1;
		   this.setState(prev => ({ count: prev.count + 1 }));
		  alert ('CLICKED '+count);
	  }
    
  render(){
    return(
      <div>
	     Welcome <h1> JAYAPRAKASH </h1>
		  <button onClick={this.addCount}>Click</button>
		  clicked count : {this.state.count}
	  </div>
    )
  }
}