import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Alert } from 'antd';
import '../index.css';
import axios from 'axios'
import { browserHistory } from 'react-router'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import SideHeader from './SideHeader'
import Home from './Home';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      email: '',
      password: '',
      id :'',
      erreur : false,
      error: null,
    isLoaded: false,
    items: []
    }
    


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  
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
      if(this.textInput)
      this.setState({ email: event.currentTarget.value });  // text boxtaki deger state atıldı
      //console.dir(event.target.value);
  
}


  handleSubmit() {
  
    const user = {
      email: this.state.email,
      password: this.state.password
    }

  
  axios.post('users/login',user)
  .then(res => {
    if(res.data.result==="ok")
    { this.setState({id:res.data.info})
      this.props.history.push({pathname: '/home',
    
    state: { detail: this.state.id }}) }
    else {
      this.setState({erreur:true})
    }
   
  })
  .catch(err => {
   console.log(err)
  })
 
  

  }

 
    render() { 
      

      return (
        <Router history={browserHistory} >
        <main>
        
        </main>  
          <div className="loginimage">
        <div className="gridlogin">
       <Grid container
       className="gridlogin2"
      direction="column"
      justify="center"
      alignItems="center"
      spacing={5}
      >  <Grid item>
        <div className="loginh">
          
          <p className="login">Login</p>    
         </div>
         </Grid>
         <Grid item>
        <Form
        name="normal_login"
        className="login-form"
        onFinish={this.handleSubmit}
        initialValues={{ remember: true }}
     
      >
        <Form.Item
         
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' },{
            type: 'email',
            message: 'The input is not valid E-mail!',
          }]}
        >
          <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" value={this.state.value} id="email" ref={this.textInput} onChange={this.handleChange}
           /*onChange={(event) =>  this.setState({ email: event.currentTarget.value })}  *//>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
             className="input" 
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            id="password"
            value={this.state.value} onChange={(event) =>  this.setState({ password: event.currentTarget.value })}
          />
        </Form.Item>
        { this.state.erreur ?
          <Alert message="Error" type="error" showIcon />
          :null}
        <Form.Item> 
          <a className="login-form-forgot" className="input" href="">
            Forgot password?
          </a>
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{position:"relative", height: 42 ,background: "RGB(238, 187, 153)",borderColor :"RGB(238, 187, 153)"}}
          >
            <p className="buttonlogin">Login</p>
          </Button>
         <div className="div1"><p className="or">Or</p> <Link to="/register">register now! </Link> </div> 
        </Form.Item>
      </Form>
      </Grid>
     </Grid>
     </div>
     </div>
     
     </Router>
    )
  }
}
export default Login;


