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
import TouchAppIcon from '@material-ui/icons/TouchApp';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import pink from '@material-ui/core/colors/pink';


import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";
import { ListItemSecondaryAction } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    primary: { 500: '#bd8c7d' },


 
  },
});
const secondary = pink[50]; // #F44336

const info = [
  {  
    title: 'Informations globales',
    thematique: 'First-content',
    nombre :"2"
   
  },
 
  {
    title: 'Informations détaillées',
    thematique: 'Last-content',
    nombre :"1"

  },
 
];
let listItems = []

class Detail extends React.Component {
    render() {
      return (
        <Card className="detailcard">
        <CardActionArea>
         
  
          <CardContent >
            <Typography gutterBottom component="h2">
             <p className="titre-card"> gestion de PFA et PFE</p> 
  
            </Typography>
            <hr className="hr1"></hr>
            <Typography variant="body2" color="textSecondary" component="p">
              <Grid
               container
               direction="column"
               justify="space-between"
              alignItems="stretch"
               >  
                   <Grid
               container
               direction="row"
               justify="space-between"
              alignItems="stretch"
               >  
               <Grid container >
              <Grid item  xs={4} >
              <p className="thematique1">Thématique générale :</p>
              </Grid>
              <Grid item  xs={8}>
              <p className="thematique2">développement web</p>  
              </Grid>
             </Grid>
             <Grid container >
              <Grid item  xs={4} >
              <p className="thematique1">nombre d'équipe :</p>
              </Grid>
              <Grid item  xs={4} >
              <p className="thematique2">3</p>  
              </Grid>
             </Grid>
              </Grid>
              <Grid item>
           
              <p className="thematique1">Mots-clés :</p>
              
              <p className="thematique2">gestion de projet/affectation/suivi/import/export</p>  
              
              </Grid>
              <Grid item>
           
              <p className="thematique1">Outils requis :</p>
              
              <p className="thematique2">Laravel/React js/SQL</p>  
              
              </Grid>
              <Grid item>
           
              <p className="thematique1">Description :</p>
              
              <p className="thematique2">L’objectif de ce PFA est de doter le département des sciences de
l’Informatique de l’ENSIT d’une application web en ligne pour la
gestion des projets permettant de faciliter les procédures de
proposition, de choix, d’affectation et de suivi des PFE et PFA
pour les étudiants, les enseignants et l’administration.
<Grid item></Grid>    
           
              <p className="thematique1">Objectif Spécifiques :</p>
              
              <p className="thematique2"></p> Il s’agit
donc de concevoir et de réaliser cette application en tenant
compte des aspects suivants :
Front-End et Back-End
/Droits d’accès et Authentifications
/Import et export des données
/ Classification des projets par spécialités
/ Indexation et recherche par mots clefs
/ Affectation et suivi des projets
 / Dépôt des rapports
/  Notation et validation
/ Statistiques
/ Archivage           </p>  
              
              </Grid>
            
           </Grid>  
       
     
        
            
            </Typography>
          </CardContent>
        </CardActionArea>
       
        <CardActions className="action-detail">
 
        <ThemeProvider theme={theme} >
          
        <Button
        style={{alignItems:"center"}}
        variant="contained"
        color="primary"
        startIcon={<TouchAppIcon style={{ color: pink[50] ,fontSize: 25 }}/>}
      >
        <h1 style={{color:"white" ,fontSize:"15px",fontWeight:"600"}} className="buttondetail">choisir</h1>
      </Button>
       
           
        
          
        </ThemeProvider>
       
           
        
          
      
        
        </CardActions>
      </Card>
      );
    }
  }
  
  export default Detail;