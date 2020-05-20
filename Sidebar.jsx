import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import App1 from '../pages/App';
import ConsulterPfe from '../pages/ConsulterPFE';
import ConsulterSujetPfa1 from '../pages/ConsulterPFA1';
import ConsulterSujetPfa2 from '../pages/ConsulterPFA2';
import PoposerSujetpfa1 from '../pages/ProposerSujetpfa1';
import PoposerSujetpfa2 from '../pages/ProposerSujetpfa2'
import PoposerSujetpfe from '../pages/ProposerSujetpfe'
import Header from '../Component/Header'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import TacheMiseajour from '../pages/TacheMiseajour';
import Form from '../pages/Form';
import Reunion from '../pages/Reunion';
import LivrablePFA1 from '../pages/LivrablePFA1';
import ConsulterAffectation from '../pages/ConsulterAffectation';
import Statistique from '../pages/Statistique';
import Register from '../pages/Register';
import Espaceadmin from '../pages/Espaceadmin';
import Espacecoordinateur from '../pages/Espacecoordinateur';
import Document from '../pages/Document';
import Index from '../pages/Index';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
     
      }
      state ={
        style : {  marginLeft:"64px"
      }
      }

  render() {
    const mystyle = {
       marginLeft:"240px",
      
       
       
      
      };
      const mystyle2 = {
        marginLeft:"64px"
       };
       var React = require('react')
       var FontAwesome = require('react-fontawesome')
    return (
        
      <Router>
      <Route render={({ location, history }) => (
          <React.Fragment>
               <main>
            
              <Switch>
              <Route exact={true} path="/"  component={props => <div className="scroll" style={this.state.style} > <App1></App1></div> }  />                                             
              <Route path="/consulter-sujet/pfa1" component={props => <div className="scroll" style={this.state.style} >  <ConsulterSujetPfa1 /> </div>}  />
              <Route path="/consulter-sujet/pfa2" component={props => <div className="scroll" style={this.state.style} > <ConsulterSujetPfa2 /> </div>}  />
              <Route path="/consulter-sujet/pfe" component={props => <div style={this.state.style} className="scroll" > <ConsulterPfe /> </div>}  />
             <Route path="/proposer-sujet/pfa1"  component={props => <div className="scroll" style={this.state.style} > <PoposerSujetpfa1></PoposerSujetpfa1></div> }  />    
             <Route path="/proposer-sujet/pfa2"  component={props => <div className="scroll"  style={this.state.style} > <PoposerSujetpfa2></PoposerSujetpfa2></div> }  />  
             <Route path="/proposer-sujet/pfe"  component={props => <div  style={this.state.style} > <PoposerSujetpfe></PoposerSujetpfe></div> }  /> 
 	     <Route path="/coordinateur"  component={props => <div  style={this.state.style} > <Espacecoordinateur></Espacecoordinateur></div> }  /> 
	     <Route path="/admin"  component={props => <div  style={this.state.style} > <Index></Index></div> }  /> 
	     <Route path="/document"  component={props => <div  style={this.state.style} > <Document></Document></div> }  /> 
	     <Route path="/livrables/PFA1"  component={props => <div  style={this.state.style} > <LivrablePFA1></LivrablePFA1></div> }  /> 
	     <Route path="/soutenance"  component={props => <div  style={this.state.style} > <Reunion></Reunion></div> }  /> 
	     <Route path="/réunions"  component={props => <div  style={this.state.style} > <ConsulterAffectation></ConsulterAffectation></div> }  /> 
             <Route path="/statistique"  component={props => <div  style={this.state.style} > <Statistique></Statistique></div> }  /> 
	     <Route path="/Register"  component={props => <div  style={this.state.style} > <Register></Register></div> }  /> 
	     <Route path="/gestion-tâche/mise-a-jour"  component={props => <div className="scroll"  style={this.state.style} > <TacheMiseajour></TacheMiseajour></div> }  />                                                                                                                        
             </Switch>
             
              </main>
              
              <SideNav
                 style={{marginTop:"55px",backgroundColor:"#bd8c7d"}}
                 
                  onToggle={(expanded) => {
                      
                    if(expanded)
                   {     this.setState({
                    style: mystyle
                  });
               
                       
                    
                      
                   
                    
                     }
                     
                   else {
                    this.setState({
                        style: mystyle2
                      });
                        
                     
                    }
                   
                }}
                onSelect={(selected) => {
                    const to = '/' + selected;
                   if (location.pathname !== to) {
                        history.push(to);
                       
                    }
                }}
              >
                  <SideNav.Toggle />
                  <SideNav.Nav >
                      <NavItem eventKey="consulter-sujet" >
                          <NavIcon>
                         
                              <FontAwesome
                               style={{ color: ' #1d1e22' }}
                             name="folder-open"
                           size="2x"
                         
                         
                  
                />
                             
                          </NavIcon>
                          <NavText  >
                              <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}>Consulter Sujet</p1>
                          </NavText>
                          <NavItem eventKey="consulter-sujet/pfa1">
                        
                          <NavText classname="icontextnav">
                          <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}> PFA1 </p1>
                          </NavText>
                      </NavItem>
                      <NavItem eventKey="consulter-sujet/pfa2">
                          
                          <NavText classname="icontextnav">
                          <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}> PFA2 </p1>
                          </NavText>
                      </NavItem>
                      <NavItem eventKey="consulter-sujet/pfe">
                          
                          <NavText classname="icontextnav"
                          
                >
                              <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}> PFE </p1>
                          </NavText>
                      </NavItem>
                      </NavItem>
                      <NavItem eventKey="proposer-sujet">
                          <NavIcon>
                         
                              <FontAwesome
                             style={{ color: ' #1d1e22' }}
                             name="file-medical"
                        
                           size="2x"
                         
                  
                />
                             
                          </NavIcon>
                          <NavText classname="icontextnav">
                          <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}>Proposer Sujet </p1>
                          </NavText>
                          <NavItem eventKey="proposer-sujet/pfa1">
                        
                          <NavText classname="icontextnav">
                          <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}> PFA1 </p1>
                          </NavText>
                      </NavItem>
                      <NavItem eventKey="proposer-sujet/pfa2">
                          
                          <NavText classname="icontextnav">
                          <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}> PFA2 </p1>
                          </NavText>
                      </NavItem>
                      <NavItem eventKey="proposer-sujet/pfe">
                          
                          <NavText classname="icontextnav">
                          <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}>  PFE </p1>
                          </NavText>
                      </NavItem>
                      </NavItem>
                      <NavItem eventKey="gestion-tâche">
                          <NavIcon>
                         
                              <FontAwesome
                              style={{ color: ' #1d1e22' }}
                             name="tasks"
                        
                           size="2x"
                         
                  
                />
                             
                          </NavIcon>
                          <NavText classname="icontextnav">
                          <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}>  Gestion de tâches </p1>
                          </NavText>
                          <NavItem eventKey="gestion-tâche/mise-a-jour">
                          
                          <NavText classname="icontextnav">
                          <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}>Mise à jour de progresion</p1>
                          </NavText>
                      </NavItem>
                      <NavItem eventKey="gestion-tâche/Consulter-tâche">
                          
                          <NavText classname="icontextnav">
                          <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}> Consulter Progression </p1>
                          </NavText>
                          </NavItem>
                          </NavItem>
                          <NavItem eventKey="livrables">
                          <NavIcon>
                         
                              <FontAwesome
                            
                             name="file-import"
                              style={{ color: ' #1d1e22' }}
                           size="2x"
                         
                  
                />
                             
                          </NavIcon>
                          <NavText classname="icontextnav">
                          <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}> Dépots livrables </p1>
                          </NavText>
                          <NavItem eventKey="livrables/PFA1">
                        
                          <NavText classname="icontextnav"
                          >
                            <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}> PFA1 </p1>
                          </NavText>
                      </NavItem>
                      <NavItem eventKey="livrables/PFA2">
                        
                          <NavText classname="icontextnav">
                          <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}>PFA2 </p1>
                          </NavText>
                      </NavItem>
                      <NavItem eventKey="livrables/PFE">
                        
                          <NavText classname="icontextnav">
                          <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}>  PFE </p1>
                          </NavText>
                      </NavItem>
                          </NavItem>  
                         
                          <NavItem eventKey="réunions" >
                          <NavIcon>
                         
                              <FontAwesome
                              style={{ color: ' #1d1e22' }}
                              name="user-check"
  
                              size="2x"
                           
                  
                             />
                             
                             </NavIcon>
                          <NavText classname="icontextnav">
                          <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}>Consulter Affectation </p1>
                          </NavText>
                          </NavItem>    
                          <NavItem eventKey="documents">
                          <NavIcon>
                         
                              <FontAwesome
                              style={{ color: ' #1d1e22' }}
                             name="file-pdf"
                        
                           size="2x"
                         
                  
                />
                             
                          </NavIcon>
                          <NavText classname="icontextnav">
                          <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}>  Documents </p1>
                          </NavText>
                          </NavItem>  
                         
                          
                          <NavItem eventKey="soutenance">
                          <NavIcon>
                         
                              <FontAwesome
                            
                              name="user-graduate"
                              style={{ color: ' #1d1e22' }}
                              size="2x"
                              />
                             
                           </NavIcon>
                           <NavText classname="icontextnav">
                           <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}>  Soutenances </p1>
                           </NavText>
                           </NavItem>
                           <NavItem eventKey="statistique">
                           <NavIcon>
                         
                              <FontAwesome
                            
                             name="chart-pie"
                              style={{ color: ' #1d1e22' }}
                           size="2x"
                         
                  
                />
                             
                          </NavIcon>
                          <NavText >
                           <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}> Statistique</p1>  
                          </NavText>
                          </NavItem>
                          <NavItem eventKey="coordinateur">
                           <NavIcon>
                         
                              <FontAwesome
                            
                             name="users-cog"
                              style={{ color: ' #1d1e22' }}
                           size="2x"
                         
                  
                />
                             
                          </NavIcon>
                          <NavText >
                           <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}> Espace coordianteur</p1>  
                          </NavText>
                          </NavItem>
                          <NavItem eventKey="admin">
                           <NavIcon>
                         
                              <FontAwesome
                            
                             name="user-tie"
                              style={{ color: ' #1d1e22' }}
                           size="2x"
                         
                  
                />
                             
                          </NavIcon>
                          <NavText >
                           <p1 style={{color:"black", fontSize:"15px", fontWeight:"550"}}> Espace Admin</p1>  
                          </NavText>
                          </NavItem>
                          
                          
                  </SideNav.Nav>
              </SideNav>
             
          
          </React.Fragment>
      )}
      />
  </Router>
    );
  }
}

export default Sidebar;