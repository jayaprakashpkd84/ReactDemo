import React from "react";
import LifeCycle from "./lifeCycle";


export default class ParentComponent extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        state: false,
        startDate: null
      }
    }
  
    clickEvent = (e) => {
      this.setState({
        state: !this.state.state
      })
    }
  
    render() {
      return (
        <div>
          {this.state.state === true &&
            <LifeCycle setStartDate={new Date()} />
          }
  
          <button
            onClick={this.clickEvent} >
            Go to Div Color Page
          </button>
        </div>
      )
    }
  }