import React from "react";
import '../index.css';
import {login} from '../Component/UserFunction'
import axios from 'axios'

class LoginTest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        error: null,
      isLoaded: false,
      items: []
      }
      
  
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  /*  componentDidMount(){
        fetch("/users")
        .then(res => res.json())
          .then(
            (res) => {
              this.setState({
                isLoaded: true,
                items: res,
              });
            },
          
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
          console.log(this.state.items)
      }
  */
    handleChange(event) {
        if (event.target.id == 'email') {
            this.setState({ email: event.target.value });  // text boxtaki deger state atıldı
            //console.dir(event.target.value);
          }
          else if (event.target.id == 'password') {
            this.setState({ password: event.target.value });
          }
    }
  
    handleSubmit(event) {
      event.preventDefault()

      const user = {
        email: this.state.email,
        password: this.state.password
      }
  
    
    axios.post('users/login',user)
    .then(res => {
    
      alert(res.data)
    })
    .catch(err => {
      alert("not ok")
    })

    }
   
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            email :
            <input type="text" id="email" value={this.state.value} onChange={this.handleChange} />
            password :
            <input type="text" id="password" value={this.state.value} onChange={this.handleChange} />
          
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      );
    }
  }
  export default LoginTest;