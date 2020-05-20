import React from 'react';
import ReactToExcel from 'react-html-table-to-excel';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Table from 'react-bootstrap/Table';
const ConsulterAffectation = () => {
  return (
    <Table id ="t">
      < MDBTableHead color="grey" textWhite>
        <tr>
          <th>Numéro de sujet</th>
          <th>Sujets </th>
          <th>Equipe</th>
          <th>Encadrant</th>
         

        </tr>
      </ MDBTableHead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Gestion des microfinance</td>
          <td>Equipe6</td>
          <td>Mm</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Gestion des voitures</td>
          <td>Equipe4</td>
          <td>Mm</td>
          
        </tr>
        <tr>
          <td>3</td>
          <td>Gestion des comptes bancaires</td>
          <td>Equipe3</td>
          <td>S</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Gestion des projets</td>
          <td>Equipe2</td>
          <td>F</td>
        
        </tr>
        <tr>
          <td>5</td>
          <td>Gestion des CNAM</td>
          <td>Equipe1</td>
          <td>R</td>
          
        </tr>
        <tr>
          <td>6</td>
          <td>Gestion des PFA/PFE</td>
          <td>Equipe5</td>
          <td>I</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Gestion d'une agence aérienne</td>
          <td>Equipe7</td>
          <td>O</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Gestion des pharmacies</td>
          <td>Equipe10</td>
          <td>L</td>
         
          
        </tr>
      </tbody>
      <ReactToExcel
          className="btn btn-primary" 
          table="t"
          filename="ExcelFile1"
          sheet="sheet2"
          buttonText="Export Files"
          />

    </Table>
  );
}

export default ConsulterAffectation;