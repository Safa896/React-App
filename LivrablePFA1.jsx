import React,{ Component } from "react"
import Grid from '@material-ui/core/Grid';
import { Form, Input ,Select,Switch, Checkbox,DatePicker, Row,Col,InputNumber,Steps, Button, message} from 'antd';
import { UserOutlined, LockOutlined ,PhoneOutlined,IdcardOutlined } from '@ant-design/icons';
import '../index.css';
import image1 from '../images/loginim.jpg';
import "antd/dist/antd.css";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBInput } from "mdbreact";
import {ProgressBar} from 'react-bootstrap';
import axios from 'axios';


class LivrablePFA1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadPercentage: 0,
      avatar: ''
    }
  
    this.componentDidMount= () =>{
      const {avatar} = this.props;
      this.setState({ avatar })
    }
  
   this.uploadFile =({ target: { files } }) =>{
      console.log( files[0] )
      let data = new FormData();
      data.append( 'file', files[0] )
  
      const options = {
        onUploadProgress: (progressEvent) => {
          const {loaded, total} = progressEvent;
          let percent = Math.floor( (loaded * 100) / total )
          console.log( `${loaded}kb of ${total}kb | ${percent}%` );
  
          if( percent < 100 ){
            this.setState({ uploadPercentage: percent })
          }
        }
      }
  
      axios.post("https://www.mocky.io", data, options).then(res => { 
          console.log(res)
          this.setState({ avatar: res.data.url, uploadPercentage: 100 }, ()=>{
            setTimeout(() => {
              this.setState({ uploadPercentage: 0 })
            }, 1000);
          })
      })
    }
  

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Un dépôt a été remis avec succés' );
    event.preventDefault();
  }

  render() {
    const {uploadPercentage} = this.state;
    return (
      <div>
      <MDBTable>
     <MDBTableBody>
<tr>
<td style={{color:"blue"}}>Statut des travaux remis</td>
<td>Remis pour évaluation</td>
</tr>
<tr>
<td style={{color:"blue"}} >Statut de l'évaluation</td>
<td >Non évalué</td>
</tr>
<tr >
<td style={{color:"blue"}} >Date de remise</td>
<td >lundi 4 mai 2020, 23:55</td>
</tr>
<tr>
<td style={{color:"blue"}}>Temps restant</td>
<td >2 heures 25 min</td>
</tr>
<tr>
<td style={{color:"blue"}}>Dernière modification</td>
<td>lundi 4 mai 2020, 21:23</td>
</tr>
<tr>
<td style={{color:"blue"}}>Remises de fichiers</td>
<td><input type="file" className="form-control file-uploader" onChange={this.uploadFile} />
              { uploadPercentage > 0 && <ProgressBar now={uploadPercentage} active label={`${uploadPercentage}%`} /> }</td>
</tr>
<tr>
<td style={{color:"blue"}}>Commentaires</td>
<td >
<MDBInput
          type="textarea"
          label="Votre commentaire"
          rows="2"
          icon="pencil-alt"
        />
</td>
</tr>
</MDBTableBody>
      </MDBTable>
      <center>
      <Button style={{ backgroundColor:"#bd8c7d" ,borderColor:"#bd8c7d"}} onClick={() =>this.handleSubmit}>
   <p style={{color:"white"}}>Confirmer</p>
   </Button>
      <Button style={{ backgroundColor:"#bd8c7d" ,borderColor:"#bd8c7d"}} onClick={() => this.next()}>
      <p style={{color:"white"}}>Modifier le travail</p>
   </Button>   
</center>
</div>
    );
  }
}
export default LivrablePFA1;