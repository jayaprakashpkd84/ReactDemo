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
                    isActive :true,
                    names1:[],
                    items:[]
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
        var apIURL = "http://localhost:8000/SaveLogingDetails";
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
        debugger;
        //event.preventDefault();
        try {

      
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
            console.log(resJson)
          })
        } catch(err) {
            console.log(err)
          }
      };
      
      getLoggedUser = () => {
        var apIURL = "http://localhost:8000/getloggedUserList";
        
        try {

      
        fetch(apIURL, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then((res) => res.json())
          .then((resJson) => {
           // this.setState(prev => ({ names: resJson.data })); 
            this.setState({
                names1: resJson.data

                
            });  
            
        for (var i=0;i<resJson.data.length;i++) {
            this.state.items.push(i+ '. '+resJson.data[i].BeneficiaryName+', ') ;
          }

            console.log(resJson.data)
          })
        } catch(err) {
            console.log(err)
          }
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
             <Button variant="contained" onClick={this.handleSubmit} >Login</Button> &nbsp;
             <Button variant="contained" onClick={this.getLoggedUser} >Get Logged in User from DB</Button>
<ul>
           
                {this.state.items}
                </ul>
            </div>
        )
    }
}