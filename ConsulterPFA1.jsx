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
import ConsulterSujetPfa11 from './ConsulterPFA11';
import Detail from "./Deails";
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
    title: 'gestion de PFA1 ',
    thematique: 'développement web',
    nombre :"3"
   
  },
 
  {
    title: 'Gestion de pharmacie',
    thematique: 'développement mobile',
    nombre :"2"

  },
 
];
let listItems = []

class ConsulterSujetPfa1 extends React.Component {
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
          <Route  path="/consulter-sujet/pfa1/detailpfa1"  component={props => <Detail></Detail>  }  />   
          <Route  path="/consulter-sujet/pfa1"  component={props =>  <ConsulterSujetPfa11></ConsulterSujetPfa11> }  />                                            
        
        </Switch>
      </main> 
     
          </React.Fragment>
      )}
      />
  </Router>
    );
  }
}
  
  export default ConsulterSujetPfa1;