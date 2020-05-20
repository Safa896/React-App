import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Input ,Select,Switch, Checkbox,DatePicker, Row,Col,InputNumber,Steps, Button, message} from 'antd';
import { UserOutlined, LockOutlined ,PhoneOutlined,IdcardOutlined } from '@ant-design/icons';
import '../index.css';
import image1 from '../images/loginim.jpg';
import "antd/dist/antd.css";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.state={value1: ''};
      this.state={value2: ''};
      this.state={value3: ''};
      this.state={value4: ''};
      this.state={value5: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      this.setState({value1: event.target.value1});
      this.setState({value2: event.target.value2});
      this.setState({value3: event.target.value3});
      this.setState({value4: event.target.value4});
      this.setState({value4: event.target.value5});
    }
  
    handleSubmit(event) {
      alert('Vous êtes  inscrits ');
      event.preventDefault();
    }
  
    render() {
      return (
      
       <MDBContainer>
        
      <MDBRow>
        
        <MDBCol md="6">
       
          <MDBCard>
          
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4" color="#bd8c7d" >Login</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="pink" type="submit">
                    Connexion
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
                  
          </MDBCard>
         
          
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
    
      );
      };
  };
  export default Form;