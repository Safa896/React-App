import 'mdbreact/dist/css/mdb.css';
import React from "react";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Grid from '@material-ui/core/Grid';
class Footer extends React.Component {
    render() {
      return (
        
        <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
            <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >      
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
              </ul>
            </div>
          
           
          </Grid>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} City Guide App - All Rights
              Reserved
            </p>
          </div>
        
      </Grid>
      );
    }
  }
  
  export default Footer;
