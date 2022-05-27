import React from "react"


export default class SecondSession extends React.Component {
    constructor(props) {
    super(props);

        this.state = {
                firstColor: "",
                secondColor:""
             }
        }

    changeEvent = () => {
        this.setState({
            firstColor: this.state.secondColor
        });
    }

    handleInput = (e) => {
        this.setState({
            firstColor: e.target.value
        });
    }

    handleInput2 = (e) => {
        this.setState({
            secondColor: e.target.value
        });
    }

    render() {
        return (
            <div style={{ backgroundColor: this.state.firstColor, height: 300, width: 300 }}>
                <h4>Assignement 1:</h4>
                <label>Change Div Color Automatically</label> <input type="text" onChange={this.handleInput} /><br /><br />
                <h4>Assignement 2:</h4>
                <label>Change Div Color on Button Click</label> <input type="text" onChange={this.handleInput2} /><br /><br />
                <button onClick={this.changeEvent}>Click  Here</button>
            </div>
           
            )
    }
}