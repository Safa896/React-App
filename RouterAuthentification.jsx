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
import { browserHistory  } from 'react-router';
import axios from 'axios';

import { useHistory } from "react-router-dom";
import SideHeader from '../pages/SideHeader'
import Login from './login';
import Home from './Home';
import Test2 from './Test2';
import Register from './Register';

class RouterAuthentification extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
      name: 'mayaa',}
     
      }
    
      
  render() {
    return (
      <Router basename='/'>
        <main>
            <Switch>
            <Route  path="/login" component={Login} />
            <Route  path="/home" component={SideHeader}  />                                     
            <Route path="/register" component={Register} />
            </Switch>
          </main>
   
      </Router>
    )
  }
}
  
  export default RouterAuthentification;
