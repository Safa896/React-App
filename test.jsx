import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Form, Input, Button ,Select,Switch, Checkbox, Row,Col,InputNumber} from 'antd';
import { UserOutlined, LockOutlined ,PhoneOutlined,IdcardOutlined } from '@ant-design/icons';
import '../index.css';
import image1 from '../images/loginim.jpg';
const { TextArea } = Input;
const plainOptions = ['Appfffffffffffffffle', 'ffffffffffffffffffff', 'Oranffffge'];
const plainOptions2 = ['Appffffffle', 'fffffff', 'Offffge'];

class PoposerSujetpfa1 extends React.Component {
    constructor() {
        super();
        
        this.check = this.check.bind(this);
      }
      state ={
        appear : false ,
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
    render() {
    
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
         
         <div className="divform">
         <Grid container
       className="gridRegister2"
      direction="column"
      justify="center"
      alignItems="center"
      spacing={6}
      > 
      <Grid item>
        <div className="loginh">
          
          <p className="titre">Proposer sujet PFA1  </p>    
         </div> 
         </Grid>
         <Grid item>
         <Form
        name="normal_login"
        style={{width:"530px"}}
        layout="horizontal"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        
     >
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
        <Form.Item label="Mots-clés" name="outils" >
        <TextArea placeholder="Autosize height based on content lines" autoSize  />
        </Form.Item>
        <Form.Item label="Outils requis" name="description">
        <TextArea placeholder="Autosize height based on content lines" autoSize />
        </Form.Item>
        <Form.Item label="Description" name="layout">
        <TextArea placeholder="Autosize height based on content lines" autoSize />
        </Form.Item>
        <Form.Item >
        <Button type="primary"  htmlType="submit" style={{position:"relative",marginLeft:"50%" ,background: "#bd8c7d",borderColor :"RGB(238, 187, 153)"}}>
          Enregistrer
        </Button>
       </Form.Item>




        </Form>
        
     </Grid>
    
     
     
     </Grid>
         
    </div>
    </div>   
     
      );
    }
  }
  
  export default PoposerSujetpfa1;