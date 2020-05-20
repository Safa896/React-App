import React from "react";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,NavDropdown,Nav,Image,Form,FormControl} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import Icon from '@material-ui/core/Icon';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
class Header extends React.Component {
    render() { 
     
     
      return (
         
        <Navbar className="nav">
  <Navbar.Brand className="b1"href="#home">
  <img    src={require('../images/logo.jpg')} 
        width="80"
        height="80"
        className="im"
        alt=""
      />
     <h className="h12">
     <h1><b>MY PROJECT |</b></h1>
  <p>Welcome to the plantform of <span className="span1">US</span>|</p>
     </h>
  </Navbar.Brand>
  <Nav className="bn">
      <Nav.Link href="#About"><h className="txt">About Us</h></Nav.Link>
      <Nav.Link href="#PLanning"><h  className="txt">Lanning soutenances</h></Nav.Link>
      <NavDropdown title={<h  className="txt">Consulter les affectations</h>} id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">affectation des sujet PFA1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">affectation des sujet PFA2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">affectation des sujet PFE</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#Contact"><h  className="txt">Contact</h></Nav.Link>
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
       <Button
        variant="contained"
        color="primary"
        startIcon={<LockOpenRoundedIcon/>}
      >
        
       <h>Inscription</h>
      </Button>
      </ThemeProvider>
      </Grid>
      <Grid item>
      <ThemeProvider theme={theme} >
        <Button variant="outlined" color="primary" >
         <h>Log in </h> 
        </Button>
      </ThemeProvider>
      </Grid>
    </Grid>
</Navbar>
      );
    }
  }
  
  export default Header;
