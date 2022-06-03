import React from "react";
import { Button,InputLabel,TextField } from '@mui/material';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                    username: "",
                    password:"",
                    errorMesssageUN:"",
                    errorMesssagePWD:"",
                    isActive :true
                 }
                }
            changeEventUN = (e) => {
                this.setState({
                    username: e.target.value
                });
            }

            changeEventPWD = (e) => {
                this.setState({
                    password: e.target.value
                });
            }
    
      handleSubmit = () => {
        var apIURL = "https://reqres.in/api/login";
        var varusername = this.state.username;
        var varpassword = this.state.password;
       
        var count = 0;
        if(varusername === null || varusername === undefined || varusername === '') {
            this.setState(prev => ({ errorMesssageUN: "Please Enter User Name."}));
            count++;
        } else {
            this.setState(prev => ({ errorMesssageUN: ""}));
        }

        if(varpassword === null || varpassword === undefined || varpassword === '') {
            this.setState(prev => ({ errorMesssagePWD: "Please Enter Password." }));
            count++;
        } else {
            this.setState(prev => ({ errorMesssagePWD: "" }));
        }

        if(count >0) {
            return false;
        }
        //event.preventDefault();
        fetch(apIURL, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: varusername,
            password: varpassword
          })
        })
        .then((res) => res.json())
          .then((resJson) => {
            if(resJson.token !== null && resJson.token !== undefined && resJson.token.length >0) {
                alert("Congratulation. Successfully logged in.");
            } else {
                alert("Login Failed. Something went wrong. Please try again.");
            }
          })
      };

    render() {
        return(
            <div>
                <div><h3>Login</h3></div>
              <InputLabel sx={{color: "black"}}>User Name</InputLabel>
              <TextField id="outlined-basic" label="User Name" variant="outlined" onChange={this.changeEventUN}/>
              <InputLabel sx={{color: "red"}}>{this.state.errorMesssageUN}</InputLabel>
 <br/>
              <InputLabel sx={{color: "black"}}>Password</InputLabel>
               <TextField ref='password'
    hintText="Password"
    floatingLabelText="Password" label="Password"
    type="password" onChange={this.changeEventPWD}>
</TextField>
<InputLabel sx={{color: "red"}}>{this.state.errorMesssagePWD}</InputLabel>
                <br/>
             <Button variant="contained" onClick={this.handleSubmit} >Login</Button>
            </div>
        )
    }
}