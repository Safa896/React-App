import React from 'react';
import ReactToExcel from 'react-html-table-to-excel';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Table from 'react-bootstrap/Table';

const BasicTable = () => {
  return (
    <Table id="id">
      <MDBTableHead color="grey" textWhite >
        <tr>
          <th>#</th>
          <th>Date de soutenance</th>
          <th>Salle </th>
          <th>Jury </th>
          <th>Equipe</th>

        </tr>
      </MDBTableHead>
      <tbody>
        <tr>
          <td>1</td>
          <td>30/04/2020</td>
          <td>Logidas</td>
          <td>Madame Ahlem</td>
          <td>equipe1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>12/05/2019</td>
          <td>B206</td>
          <td>Madame Sonda</td>
          <td>equipe4</td>
        </tr>
        <tr>
          <td>3</td>
          <td>30/01/2017</td>
          <td>A213</td>
          <td>Monsieur Khaled</td>
          <td>equipe7</td>
        </tr>
        <tr>
          <td>4</td>
          <td>12/12/2020</td>
          <td>Logidas</td>
          <td>Monsieur Adel</td>
          <td>equipe3</td>
        </tr>
        <tr>
          <td>5</td>
          <td>18/04/2019</td>
          <td>B201</td>
          <td>Madame Meriem</td>
          <td>equipe2</td>
        </tr>
        <tr>
          <td>6</td>
          <td>24/05/2013</td>
          <td>A110</td>
          <td>Madame Lamia</td>
          <td>equipe6</td>
        </tr>
        <tr>
          <td>7</td>
          <td>30/01/2016</td>
          <td>B001</td>
          <td>Monsieur Ahmed</td>
          <td>equipe10</td>
        </tr>
        <tr>
          <td>8</td>
          <td>27/08/2020</td>
          <td>Amphi A3</td>
          <td>Monsieur Khaled</td>
          <td>equipe8</td>
          
        </tr>
      </tbody>
      <ReactToExcel
          className="btn btn-primary" 
          table="id"
          filename="ExcelFile"
          sheet="sheet1"
          buttonText="Export files"
          />

    </Table>
  );
}

export default BasicTable;