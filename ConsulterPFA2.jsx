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
import ConsulterSujetPfa22 from './ConsulterPFA22';
import Detail2 from "./Details2";
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

class ConsulterSujetPfa2 extends React.Component {
  constructor(props) {
    super(props)
    //this.detail = this.detail.bind(this);

   
  }
  state ={
    peopleToReturn : [1,2,3],
    appel:false,

  }
 // detail() {
    
    //this.props.history.push("/cosulter-détail-pfa1");
  //}
 
  
    render() {
    
      return (
        
        
         <Router>
      <Route render={({ location, history }) => (
          <React.Fragment>
               <main>
          <Switch>
          <Route  path="/consulter-sujet/pfa2/detailpfa2"  component={props => <Detail2></Detail2>  }  />   
          <Route  path="/consulter-sujet/pfa2"  component={props =>  <ConsulterSujetPfa22></ConsulterSujetPfa22> }  />                                            
        
        </Switch>
      </main> 
     
          </React.Fragment>
      )}
      />
  </Router>
    );
  }
}
  
  export default ConsulterSujetPfa2;