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


let listItems = []

class Detail2 extends React.Component {
    render() {
        var FontAwesome = require('react-fontawesome')
      return (
        <Card className="detailcard">
        <CardActionArea >
         
  
          <CardContent >
            <Typography gutterBottom component="h2">
             <p className="titre-card">
                 application de gestion de PFA et PFE</p> 
  
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
               <p className="sous-Titre">
               <FontAwesome
                             style={{ color: '#bd8c7d' }}
                             name="globe"
                        
                           size="1x"
                         
                  
                /> Information Globales</p>
                <Grid container >
              <Grid item  xs={5} >
              <p className="thematique1">cadre de projet :</p>
              </Grid>
              <Grid item  xs={7} >
              <p className="thematique2">Club</p>  
              </Grid>
             </Grid>
             
               <Grid container >
              <Grid item  xs={5} >
              <p className="thematique1">Thématique générale :</p>
              </Grid>
              <Grid item  xs={7}>
              <p className="thematique2">développement web</p>  
              </Grid>
             </Grid>
             <Grid container >
              <Grid item  xs={5} >
              <p className="thematique1">nombre d'équipe :</p>
              </Grid>
              <Grid item  xs={7} >
              <p className="thematique2">4</p>  
              </Grid>
             </Grid>
              </Grid>
              <p className="sous-Titre">
               <FontAwesome
                             style={{ color: '#bd8c7d' }}
                             name="tools"
                        
                           size="1x"
                         
                  
                /> Technologies et outils requis</p>
              <Grid container >
              <Grid item  xs={5} >
              <p className="thematique1">Type de l'application :</p>
              </Grid>
              <Grid item  xs={7} >
              <p className="thematique2">Web</p>  
              </Grid>
             </Grid>
           
             
              <Grid container >
              <Grid item  xs={5} >
              <p className="thematique1">Technologie de Frontend :</p>
              </Grid>
              <Grid item  xs={7} >
              <p className="thematique2">React</p>  
              </Grid>
             </Grid>
            
              <Grid container >
              <Grid item  xs={5} >
              <p className="thematique1">Technologie de Backend :</p>
              </Grid>
              <Grid item  xs={7} >
              <p className="thematique2">Laravel</p>  
              </Grid>
             </Grid>
              
              <Grid container >
              <Grid item  xs={5} >
              <p className="thematique1">BD :</p>
              </Grid>
              <Grid item  xs={7} >
              <p className="thematique2">SQL</p>  
              </Grid>
             </Grid>
           
             
              
              <Grid item>
              <p className="sous-Titre">
               <FontAwesome
                             style={{ color: '#bd8c7d' }}
                             name="info-circle"
                        
                           size="1x"
                         
                  
                /> Informations détaillés </p>   
              <Grid item>
           
              <p className="thematique1">Mots clés :</p>
              
              <p className="thematique2">gestion de projet/affectation/suivi/import/export</p>  
              
              </Grid>
              <Grid item>
           
              <p className="thematique1">Objectif Générales :</p>
              
              <p className="thematique2">Le PFA met en pratique les connaissances acquises en  deuxième année, nécessaires pour la réalisation d’un projet informatique. 
              L’organisation du PFA cherche à simuler, quoique grossièrement, un projet de développement réel.
               Ce projet se déroule juste avant le stage en entreprise. 
              C’est donc une occasion pour les futurs stagiaires d’apprendre une méthodologie pour conduire un projet informatique</p>  
              
              </Grid>
              <Grid item></Grid>    
           
              <p className="thematique1">Objectif Spécifiques :</p>
              
              <p className="thematique2"> Il s’agit
donc de concevoir et de réaliser cette application en tenant
compte des aspects suivants :
Front-End et Back-End
/Droits d’accès et Authentification
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
       
        <CardActions className="action-detail" >
 
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
  
  export default Detail2;