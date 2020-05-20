import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Form, Input, Button, DatePicker ,Select,Switch} from 'antd';
import { UserOutlined, LockOutlined ,PhoneOutlined,IdcardOutlined } from '@ant-design/icons';
import '../index.css';
const { Option } = Select;




class Register extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      username:'',
      name: '',
      password: '',
      confirmpassword:'',
      familyname:'',
      cin:'',
      telephone:'',
      class:'',
      erreur : false,
      error: null,
    isLoaded: false,
    items: []
    }
    


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
    
    this.sayHello = this.sayHello.bind(this);
  }
  state ={
    open : false ,
  }


  sayHello =() =>{
    if(this.state.open===false)
    { 
      this.setState({ open : true}); 
      }
    else {
     
      this.setState({ open : false}); 
       
    }   
     
  }
  handleChange(event) {
    if(this.textInput)
    this.setState({ name: event.currentTarget.value });  // text boxtaki deger state atıldı
    //console.dir(event.target.value);

}


handleSubmit() {

  const user = {
    username: this.state.username,
    password: this.state.password,
    name:this.state.name,
    familyname:this.state.familyname,
    telephone:this.state.telephone,
    cin:this.state.cin,
    class:this.state.class,
    confirmpassword:this.state.confirmpassword
  }
}
onClick(){
  this.preventDefault();
    this.props.nextStep();
  window.location.href="/home";
}

  
    render() { 
      

      return (
        
        <div className="loginimage2">
        
       <Grid container
       className="gridRegister2"
      direction="column"
      justify="center"
      alignItems="center"
      spacing={5}
      > 
        <div className="gridRegister">
       <Grid item>
        <div className="loginh">
          
          <p className="login">Register  </p>    
         </div>
         </Grid>
         <Grid item>
        <Form
        name="normal_login"
        className="login-form"
        onFinish={this.handleSubmit}
        initialValues={{ remember: true }}
     
      >
        <Form.Item  valuePropName="checked">
        <Switch className="switch" checkedChildren="student" unCheckedChildren="not student"onClick={this.sayHello} defaultChecked/>
      </Form.Item>
        <Form.Item
        
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' },{
            type: 'email',
            message: 'The input is not valid E-mail!',
          }]} hasFeedback
        >
          <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"  value={this.state.value}  ref={this.textInput} onChange={this.handleChange } />
        </Form.Item>
        
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]} hasFeedback
        >
          <Input.Password
             className="input" 
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={this.state.value} id="password" ref={this.textInput} onChange={this.handleChange }
          />
        </Form.Item>
        <Form.Item
          
          name="Confirmpassword"
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('The two passwords that you entered do not match!');
              },
            }),
          ]} hasFeedback
        >
          <Input.Password
             className="input" 
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="confirm password"
            value={this.state.value} id="confirm password" ref={this.textInput} onChange={this.handleChange }
          />
        </Form.Item>
        <Form.Item
        
          name="name"
          rules={[{ required: true, message: 'Please input your Username!' },{
            type: 'string',
            message: 'The input is not valid ',
          }]} hasFeedback
        >
          <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name"  value={this.state.value} id="username" ref={this.textInput} onChange={this.handleChange }/>
        </Form.Item>
        <Form.Item
        
          name="familyName"
          rules={[{ required: true, message: 'Please input your family name!' },{
            type: 'string',
            message: 'The input is not valid !',
          }]} hasFeedback
        >
        <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Family Name"  value={this.state.value} id="familyname" ref={this.textInput} onChange={this.handleChange }/>
      </Form.Item>
      <Form.Item
        
        name="CIN"
        rules={[{ required: true, message: 'Please input your family name!' },{
            type: "string",
            pattern: /^[0-9]{8}$/,
            message: "Wrong format!"
        }]} hasFeedback
      >
      <Input size="large" prefix={<IdcardOutlined className="site-form-item-icon" />} placeholder="CIN"  value={this.state.value} id="cin" ref={this.textInput} onChange={this.handleChange }/>
    </Form.Item>
    <Form.Item
        
        name="telephone"
        rules={[{ required: true, message: 'Please input your family name!' },{
            type: "string",
            pattern: /^[0-9]{8}$/,
            message: "Wrong format!"
        }]} hasFeedback
      >
      <Input size="large" prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Telephone"  value={this.state.value} id="tel" ref={this.textInput} onChange={this.handleChange }/>
    </Form.Item>
    <Form.Item 
     rules={[{ required: true, message: 'Please input your family name!' }]} hasFeedback>
          <DatePicker size="large" placeholder="Birthday" /> 
          </Form.Item> 
          {
      this.state.open ?
      <Form.Item
            name={['address', 'province']}
            className="liste"
            rules={[{ required: true, message: 'Province is required' }]}
            
          >
            <Select size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Select class"   value={this.state.value} id="class" ref={this.textInput} onChange={this.handleChange }>
              <Select.Option value="Zhejiang">1st </Select.Option>
              <Select.Option value="Jiangsu">2nd NTS</Select.Option>
              <Select.Option value="Jiangsu">2nd GLID</Select.Option>
              <Select.Option value="Jiangsu">3rd NTS</Select.Option>
              <Select.Option value="Jiangsu">3rd GLID</Select.Option>
            </Select>
          </Form.Item>    
      :null
     
      

    
    }
        <Form.Item>
          <Button  type="primary" htmlType="submit" className="login-form-button" onClick={this.onClick}> style={{position:"relative",paddingBottom:10, height: 42 ,background: "RGB(238, 187, 153)",borderColor :"RGB(238, 187, 153)"}}>
            <p className="buttonlogin">Sign Up</p>
          </Button>
        </Form.Item>
        
      </Form>
      
      </Grid>
      
      </div>
     </Grid>
     </div>
    
   );
}
}
export default Register;