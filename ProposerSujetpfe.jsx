import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Form, Input ,Select,Switch, Checkbox,DatePicker, Row,Col,InputNumber,Steps, Button, message} from 'antd';
import { DoubleRightOutlined , LockOutlined ,PhoneOutlined,IdcardOutlined } from '@ant-design/icons';
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



class PoposerSujetpfe extends React.Component {
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
        <div //style={{ 
        
          //position: "absolute",
        
         // height: "42.10vmax",
          
         // backgroundImage: `url(${image1})`,
          //backgroundPosition: "center",
          //backgroundRepeat: "no-repeat",
          //backgroundSize: "cover",
          //position: "relative" }}
          className="scroll" > 
         
         <div className="divform2">
         <Grid container
       className="gridRegister2"
      direction="column"
      justify="center"
      alignItems="stretch"
      spacing={1}
      > 
      <Grid item>
        <div className="loginh">
        <p className="titre">Proposer sujet PFE  </p>    
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
            < div style={{display: "inline-block"}}>
          
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
             <Form.Item name="durée de stage" label="RangePicker"  rules={[{ type: 'array', required: true, message: 'Please select time!' }]}>
             <RangePicker />
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
        :this.state.current===3 ?
        <React.Fragment>
        <Form.Item label="nom et prénom du respensable" name="nomrespensable" >
        <Input placeholder="nom et prénom du respensable"   />
        </Form.Item>
        <Form.Item label="grade du respensable" name="grade-respensable">
        <Input placeholder="grade du respensable" autoSize />
        </Form.Item>
        <Form.Item label="nom et prénom du l'encadrant" name="nom-encadrant">
        <Input placeholder="nom et prénom du l'encadrant" />
        </Form.Item>
        <Form.Item label="grade de l'encadrant" name="grade-encadrant">
        <Input placeholder="grade de l'encadrant" autoSize />
        </Form.Item>
        <Form.Item label="adresse" name="adresse">
        <Input placeholder="adresse" autoSize />
        </Form.Item>
        <Form.Item label="ville" name="ville">
        <Input placeholder="ville" autoSize />
        </Form.Item>
        <Form.Item label="code postal" name="code-postal">
        <Input placeholder="code postal" autoSize />
        </Form.Item>
        <Form.Item label="Tel" name="tel">
        <Input placeholder="Tel" autoSize />
        </Form.Item>
        <Form.Item label="Email" name="email">
        <Input placeholder="email" autoSize />
        </Form.Item>
        

        </React.Fragment> 
          :null }
          </div>
         
          <div className="steps-action" >
            {current < steps.length - 1 && (
              <Button   style={{  backgroundColor:"#bd8c7d" ,borderColor:"#bd8c7d",fontSize:"20px",position: "relative",height:"32px",width:"100px"}}   onClick={() => this.next()}>
                 <p style={{color:"white",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}>Next</p>
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button  style={{ backgroundColor:"#bd8c7d",borderColor:"#bd8c7d" ,fontSize:"20px",position: "relative",height:"32px",width:"100px"}} onClick={() => message.success('Processing complete!')}>
                <p style={{color:"white",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}} >Done</p>
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: 8,color:"#bd8c7d",borderColor:"#bd8c7d" ,fontSize:"20px",position: "relative",height:"32px",width:"100px"}} onClick={() => this.prev()}>
               <p style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}} >Privous</p>
              </Button>
            )}
          </div>
        





















         
      
        

        
        
       
       
       
    </Form>
  
    
        
     </Grid>
     </Grid>
         
    </div>
    </div>   
     
      );
    }
  }
  
  export default PoposerSujetpfe;