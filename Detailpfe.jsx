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

class Detailpfe extends React.Component {
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
              <p className="thematique2">NodeJS</p>  
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
              
              <p className="thematique2">Le PFE constitue le couronnement du cursus de l’élève ingénieur au sein de l’Ecole avant l’obtention de son diplôme. 
              Ce PFE se déroule généralement au sein d'une entreprise (en Tunisie ou à l’étranger) sur un sujet souvent en concordance avec son option de 5ème semestre. 
              Lorsque le sujet est proposé par l’Entreprise, le cahier des charges est arrêté en commun par les représentants de l’Entreprise et l’Ecole puis soumis à l’élève ingénieur.
               L’encadrement de l’élève dans la conduite de son projet est commun à l’Entreprise, qui assure l’aspect pratique, quant à l’Ecole, elle assure l’aspect scientifique et le suivi. 
               L’encadreur à l’école est désigné, pour suivre l’exécution du projet ensuite pour évaluer le travail effectué lors de la soutenance du PFE devant un jury.</p>  
              
              </Grid>
              <Grid item></Grid>    
           
              
              
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
  
  export default DetailPfe;