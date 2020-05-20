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
    title: 'Informations détaillées',
    content: 'Last-content',

  },
 
];



class PoposerSujetpfa1 extends React.Component {
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
        
         
         <div className="divform2">
         <Grid container
       className="gridRegister2"
      direction="column"
      justify="center"
      alignItems="stretch"
      spacing={2}
      > 
      <Grid item>
        <div className="loginh">
        <p className="titre">Proposer sujet PFA1  </p>    
         </div> 
         </Grid>
         <Grid item>
         

         <Steps current={current} >
            {steps.map(item => (
              <Step key={item.title} title={item.title} description={item.description} />
             ))}
          </Steps>

        
         <Form
        name="normal_login"
        
        layout="horizontal"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        className="formulaire"
        
     >
       
          
          <div className="steps-content" >
          { this.state.current===0 ?
             <React.Fragment>
            
            <Form.Item label="Titre" name="titre" > 
       <Input placeholder="Titre"  />
        </Form.Item>
        <Form.Item name="checkbox-group" label="Thématique générale:">
          <div style={{display: "inline-block"}}>
          
          <Checkbox style={{marginLeft: "8px", display: "block"}} >Réseaux </Checkbox>
          <Checkbox  style={{display: "block"}} >Conception de logiciels </Checkbox>
          <Checkbox  style={{display: "block"}} >Multimédia</Checkbox>
          <Checkbox  style={{display: "block"}} onChange={this.axe}>Recherche </Checkbox>
          </div>
          <div style={{display: "inline-block"}}>
          <Checkbox name="a"  style={{marginLeft: "0px",display: "block"}} >Sécurité réseaux</Checkbox>
          <Checkbox name="b" style={{display: "block"}} >Développement Web</Checkbox>
          <Checkbox name="c" style={{display: "block"}}  >e-Learning</Checkbox>
          <Checkbox name="d" style={{display: "block"}} onChange={this.check} >autre</Checkbox> 
        
          </div>
          { this.state.appear ?
          <Input placeholder="autre"  />
          :null}
           { this.state.appearaxe ?
          <Input placeholder="axe"  />
          :null}
        </Form.Item> 
        <Form.Item label="nombre d'équipe" name="nombreequipe" >
        <InputNumber placeholder="nombre d'équipe" />
        </Form.Item>
             </React.Fragment>
           :this.state.current===1 ?
           <React.Fragment>
         
         <Form.Item label="nombre d'équipe" name="nombreequipe" >
        <InputNumber placeholder="nombre d'équipe" />
        </Form.Item>
        <Form.Item label="Mots-clés" name="outils" >
        <TextArea placeholder="Autosize height based on content lines" autoSize  />
        </Form.Item>
        <Form.Item label="Outils requis" name="description">
        <TextArea placeholder="Autosize height based on content lines" autoSize />
        </Form.Item>
        <Form.Item label="Description" name="layout">
        <TextArea placeholder="Autosize height based on content lines" autoSize />
        </Form.Item>
       
        </React.Fragment>
       
          :null }
          </div>
         
          <div className="steps-action" >
            {current < steps.length - 1 && (
              <Button style={{ backgroundColor:"#bd8c7d" ,borderColor:"#bd8c7d"}} onClick={() => this.next()}>
                 <p style={{color:"white"}}>Next</p>
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button style={{ backgroundColor:"#bd8c7d",borderColor:"#bd8c7d" }} onClick={() => message.success('Processing complete!')   }>
                <p style={{color:"white"}}>Done</p>
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: 8,color:"#bd8c7d",borderColor:"#bd8c7d" }} onClick={() => this.prev()}>
                Previous
              </Button>
            )}
          </div>
        





















         
      
        

        
        
       
       
       
    </Form>
  
    
        
     </Grid>
     </Grid>
         
    </div>
   
     
      );
    }
  }
  
  export default PoposerSujetpfa1;