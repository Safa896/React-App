import React from "react";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Header2 from '../Component/Header2';

import Sidebar from '../Component/Sidebar' 

import Grid from '@material-ui/core/Grid';
class SideHeader extends React.Component {
  render() {
    return (
      <Grid
  container
  direction="column"
  justify="space-around"
  alignItems="stretch"
>     
        <Header2></Header2>
        <Sidebar></Sidebar>
       
      </Grid>
      
     
      );
    }
  }

export default SideHeader;
