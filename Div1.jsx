import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Form, Input ,Select,Switch, Checkbox,DatePicker, Row,Col,InputNumber,Steps, Button, message} from 'antd';
import { UserOutlined, LockOutlined ,PhoneOutlined,IdcardOutlined } from '@ant-design/icons';
import '../index.css';
import image1 from '../images/loginim.jpg';
import "antd/dist/antd.css";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const { TextArea } = Input;
const { RangePicker } = DatePicker;


var FontAwesome = require('react-fontawesome')
const Step = Steps.Step;

const steps = [
  {
    title: 'Informations globales',
    content: 'First-content',
   
  },
  {
    title: 'Technologies & outils requis',
    content: 'Second-content',
   
  },
  {
    title: 'Informations détaillées',
    content: 'Last-content',

  },
  {
    title: 'Organisme',
    content: 'Last-content',
  
  }
];



class Div1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          current: 0
        };
        
        this.check = this.check.bind(this);
      }
      state ={
        appear : false ,
        cadre : false,
      }
      state ={
        appearaxe : false ,
      }
    
      check =(e) =>{
        if(e.target.checked)
        { 
          this.setState({ appear : true}); 
         
           
        }  
        else
        {
          this.setState({ appear : false}); 
        } 
         
      }
      axe =(e) =>{
        if(e.target.checked)
        { 
          this.setState({ appearaxe : true}); 
         
           
        }  
        else
        {
          this.setState({ appearaxe : false}); 
        } 
         
      }
      cadre =(value) =>{
        if(value==="autre-cadre")
        {
          this.setState({ cadre : true}); 
        }
        else
        {
          this.setState({ cadre : false}); 
        } 
       
         
      }
      next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }
    
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }
    render() {
      const { current } = this.state;
    
      return (
       
         <Form
        name="normal_login"
        style={{width:"530px"}}
        layout="horizontal"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        
     >
       <Form.Item name="information-globales"  >
       <FontAwesome
                               style={{ color: '#bd8c7d' }}
                             name="globe"
                           size="lg"
                         
                         
                  
                />
        <span className="ant-form-text">informations globales</span> 
        </Form.Item>
       
       <Form.Item label="Titre" name="titre" > 
       <Input placeholder="Titre"  />
        </Form.Item>
        
        <Form.Item name="checkbox-group" label="Thématique générale:">
        <table >
     
        <          tr>
             <td><Checkbox    >Réseaux </Checkbox></td>
           <td><Checkbox    >Conception des logiciels  </Checkbox></td>
           <td><Checkbox    >Multimédia </Checkbox></td>
           <td><Checkbox onChange={this.axe}   >Recherche </Checkbox></td>
             </tr>
             <tr>
             <td><Checkbox    >e-Learning</Checkbox></td>
          <td><Checkbox    >Sécurité réseaux </Checkbox></td>
          <td><Checkbox    >Développement Web </Checkbox></td>
          <td><Checkbox    onChange={this.check}>autre</Checkbox></td>
          </tr>
         
         </table>
          
         
         
          { this.state.appear ?
          <Input placeholder="autre"  />
          :null}
           { this.state.appearaxe ?
          <Input placeholder="axe"  />
          :null}
        </Form.Item>  
        <Form.Item name="durée de stage" label="RangePicker"  rules={[{ type: 'array', required: true, message: 'Please select time!' }]}>
        <RangePicker />
        </Form.Item>
 
        <Form.Item >
        <Button type="primary"  htmlType="submit" style={{position:"relative",marginLeft:"50%" ,background: "#bd8c7d",borderColor :"RGB(238, 187, 153)"}}>
          Enregistrer
        </Button>
       </Form.Item>
    </Form>
  
    
        
    
     
      );
    }
  }
  
  export default Div1;