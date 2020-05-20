import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import '../index.css';
import image1 from '../images/loginim.jpg';
import "antd/dist/antd.css";
import Table from 'react-bootstrap/Table'
class Espacecoordinateur extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Liste des emails</th>
      <th>Etudiant</th>
      <th>Enseignant</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td><ListGroup as="ul">
            <ListGroup.Item as="li" active>
            safabouchrika33@gmail.com
        </ListGroup.Item>
        <ListGroup.Item as="li">maylouati97@gmail.com</ListGroup.Item>
        <ListGroup.Item as="li" disabled>
            haythem545@yahoo.com
        </ListGroup.Item>
        <ListGroup.Item as="li">abir@hotmail.fr</ListGroup.Item>
        </ListGroup></td>
      <td><ListGroup as="ul">
            <ListGroup.Item as="li" active>
            safa33@gmail.com
        </ListGroup.Item>
        <ListGroup.Item as="li">marwa@ensit.tn</ListGroup.Item>
        <ListGroup.Item as="li" disabled>
            hichem@gmail.fr
        </ListGroup.Item>
        <ListGroup.Item as="li">user@user.com</ListGroup.Item>
        </ListGroup></td>
      <td><ListGroup as="ul">
            <ListGroup.Item as="li" active>
            safa
        </ListGroup.Item>
        <ListGroup.Item as="li">abir</ListGroup.Item>
        <ListGroup.Item as="li" disabled>
            May
        </ListGroup.Item>
        <ListGroup.Item as="li">Ahmed</ListGroup.Item>
        </ListGroup></td>
    </tr>
  </tbody>
</Table>
            
         );
        };
    };
    export default Espacecoordinateur;