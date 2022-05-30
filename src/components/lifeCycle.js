import React  from "react";


export default class LifeCycle extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        firstColor: "red",
        secondColor: "green",
        thirdColor: "blue",
        enterColor:"",
        isActive:true,
        startDate: props.startDate,
        endDate: null
     }
  }

  setStartDate = (e) => {
    this.setState({
      startDate: new Date()
    })
  }

  setEndDate = (e) => {
    this.setState({
        endDate: new Date()
    })
  }

  componentDidMount(){
    console.log("from component did mount");
    this.setStartDate();
  }

  componentDidUpdate(){
    console.log("from component did update");
  }

  handleInput = (e) => {
    this.setState({
        enterColor: e.target.value,
        isActive : !this.state.isActive
    });
}

clickDivOne = () => {
    this.setState({
        firstColor: (this.state.enterColor !== "" ? this.state.enterColor : this.state.firstColor)
    });
}

clickDivTwo = () => {
    this.setState({
        secondColor:  (this.state.enterColor !== "" ? this.state.enterColor : this.state.secondColor)
    });
}

clickDivThree = () => {
    this.setState({
        thirdColor: (this.state.enterColor !== "" ? this.state.enterColor : this.state.thirdColor)
    });
}
    render() {
    return(
     <div>
         <div>
        <h3>Assignement 1:</h3>
        <label>Enter Color</label> <input type="text" onChange={this.handleInput} /><br /><br />
         </div>
    <div onClick={this.clickDivOne} style={{backgroundColor:this.state.firstColor  ,padding: 20,width:100,height:75, borderRadius: 25,margin:10}}></div>
   <div onClick={this.clickDivTwo} style={{backgroundColor: this.state.secondColor ,padding: 20,width:100,height:75, borderRadius: 25,margin:10}}></div>
   <div onClick={this.clickDivThree} style={{backgroundColor:this.state.thirdColor ,padding: 20,width:100,height:75, borderRadius: 25,margin:10}}></div>
     </div>
     )
    }
    componentWillUnmount(){
        this.setEndDate();
        var diff = this.state.endDate -  this.state.startDate;
        console.log("from component will unmount"+diff);
      }
}