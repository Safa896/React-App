import React from "react";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,NavDropdown,Nav,Image,Form,FormControl} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Icon from '@material-ui/core/Icon';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';

import { Input } from 'antd';
const theme = createMuiTheme({
  palette: {
    primary: { 500: '#bd8c7d' }
 
  },
});
const { Search } = Input;
class Header2 extends React.Component {
    render() { 
     
     
      return (
         
        <Navbar className="nav">
  <Navbar.Brand className="b1"href="#home">
     <h className="h122">
     <h1 style={{fontSize:"25px",fontWeight:"700"}}><b>MY PROJECT |</b></h1>
  <p  style={{fontSize:"13px"}}>Welcome to the plantform of <span className="span1">US</span>|</p>
     </h>
  </Navbar.Brand>
  <Nav className="bn2">
  <NotificationsActiveRoundedIcon style={{ fontSize: 25,marginTop:"10px" }} /><Nav.Link href="#About"><h className="txt">Notification |      </h></Nav.Link>
  <AccountCircleRoundedIcon style={{ fontSize: 25,marginTop:"10px" }} /> <Nav.Link href="#PLanning"><h  className="txt">Profil |       </h></Nav.Link> 
  <PermContactCalendarRoundedIcon style={{ fontSize: 25,marginTop:"10px" }} />  <Nav.Link href="#Contact"><h  className="txt">Contact </h></Nav.Link>
     
       </Nav>
       <Grid
       container
       spacing={3}
       direction="row"
        justify="flex-end"
      alignItems="center"
      
      >    
       <Grid item>
       <ThemeProvider theme={theme} >

       <Form inline>
      
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <ThemeProvider theme={theme} > <Button  color="primary" variant="outlined">Search</Button> </ThemeProvider>
     
      </Form>
      </ThemeProvider>
      </Grid>
      <Grid item>
      <ThemeProvider theme={theme} >
      <Button
        variant="contained"
        color="primary"
        startIcon={<LockRoundedIcon/>}
      >
        
       <p1>Déconnexion</p1>
      </Button>
        
      </ThemeProvider>
      </Grid>
    </Grid>
</Navbar>
      );
    }
  }
  
  export default Header2;