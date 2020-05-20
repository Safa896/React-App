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
 
];



class PoposerSujetpfa2 extends React.Component {
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
        <p className="titre">Proposer sujet PFA2  </p>    
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
        <Form.Item
            name="cadre de projet"
            className="liste"
            label="cadre de projet"
            
           
          >
            <Select
             onChange={this.cadre} 
             placeholder="Select a option and change input text above"
             allowClear>
              <Select.Option value="club">un club </Select.Option>
              <Select.Option value="entreprise">une entreprise</Select.Option>
              <Select.Option value="recherche">recherche</Select.Option>
              <Select.Option value="innovation">innovation</Select.Option>
              <Select.Option value="autre-cadre">autre</Select.Option>
            </Select>
            { this.state.cadre ?
          <Input placeholder="autre cadre"  />
          :null}
          </Form.Item> 
        <Form.Item name="checkbox-group" label="Thématique générale:">
          <div style={{display: "inline-block"}}>
          
          <Checkbox style={{marginLeft: "8px", display: "block"}} >Réseaux </Checkbox>
          <Checkbox  style={{display: "block"}} >Conception de logiciels </Checkbox>
          <Checkbox  style={{display: "block"}} >Multimédia</Checkbox>
          <Checkbox  style={{display: "block"}} onChange={this.axe}>Recherche </Checkbox>
          </div>
          <div style={{display: "inline-block"}}>
          <Checkbox name="a"  style={{marginLeft: "8px",display: "block"}} >Sécurité réseaux</Checkbox>
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
         
         <Form.Item label="Type de l'application" name="Type-de-application" > 
       <Input placeholder="(Web/Mobile/Descktop/autre...)"  />
        </Form.Item>
        <Form.Item label="Frontend" name="frontend" > 
       <Input placeholder="(Angularjs / jQuery ...) "  />
        </Form.Item>
        <Form.Item label="Backend" name="backend" > 
       <Input placeholder="(laravel,PHP,autre...)"
         />
        </Form.Item>
        <Form.Item label="BD" name="bd" > 
       <Input placeholder="(SQL/Oracle/PostgreSQL/MongoDB…)"  />
        </Form.Item>
        <Form.Item label="Autres technologies" name="autre-technologies" > 
       <Input placeholder="Autres technologies"  />
        </Form.Item>

        </React.Fragment>
           :this.state.current===2 ?
           <React.Fragment>
        <Form.Item label="Mots-clés" name="outils" >
        <TextArea placeholder="Mots-clés" autoSize  />
        </Form.Item>
        <Form.Item label="Objectif général" name="objectif-general">
        <TextArea placeholder="Objectif général" autoSize />
        </Form.Item>
        <Form.Item label="Objectifs spécifiques" name="objectifs-specific">
        <TextArea placeholder="Objectifs spécifiques" autoSize />
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
              <Button style={{ backgroundColor:"#bd8c7d",borderColor:"#bd8c7d" }} onClick={() => message.success('Processing complete!') }>
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
  
  export default PoposerSujetpfa2;