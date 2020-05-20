import React from "react";
import '../index.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";
const theme = createMuiTheme({
  palette: {
    primary: { 500: '#bd8c7d' }
 
  },
});
const info = [
  {  
    title: 'gestion de PFA2 ',
    thematique: 'développement web',
    projet:"Projet web",
    nombre :"3"
   
  },
 
];
let listItems = []

class ConsulterSujetPfa22 extends React.Component {
  constructor(props) {
    super(props)
    //this.detail = this.detail.bind(this);

   
  }
  state ={
    peopleToReturn : [1,2,3,4],
    appel:false,

  }
 // detail() {
    
    //this.props.history.push("/cosulter-détail-pfa1");
  //}
 
  
    render() {
    
      return (
        
       
      
        <div className="divformcon">
         
          
       
                    <Grid
                    container
                    direction="colomun"
                    justify="center"
                    justify="space-around"
      alignItems="center" >{  listItems = info.map((i) =>
        <Card style={{width:"400px",marginBottom:"40px"}}>
        <CardActionArea>
         
  
          <CardContent >
            <Typography gutterBottom component="h2">
             <p className="titre-card">{i.title} </p> 
  
            </Typography>
            <hr className="hr1"></hr>
            <Typography variant="body2" color="textSecondary" component="p">
              <Grid
               container
               direction="row"
               justify="space-between"
              alignItems="stretch"
               >  
                <div style={{display: "inline-block"}}>
                <p className="thematique1">Thématique générale :</p>
                <p className="thematique1">cadre de projet :</p>
                <p className="thematique1">nombre d'équipe :</p>
            </div>
            <div style={{display: "inline-block"}}>
            <p className="thematique2">{i.thematique}</p>
            <p className="thematique2">{i.cadre}</p>
          <p className="thematique2">{i.nombre}</p>
            
            </div>   
          
           
        </Grid>
     
        
            
            </Typography>
          </CardContent>
        </CardActionArea>
       
        <CardActions>
        
        <ThemeProvider theme={theme} >
          
        <Link to="/consulter-sujet/pfa2/detailpfa2"><p className="link"> voir plus >> </p></Link>
           
        
          
        </ThemeProvider>
         
        </CardActions>
      </Card>
      )}
      
      
      
      
      </Grid>
         
  





  
          </div>  
     
    );
  }
}
      
 
  
  export default ConsulterSujetPfa22;