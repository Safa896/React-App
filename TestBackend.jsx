import React from "react";
import '../index.css';
import TacheMiseajour from './TacheMiseajour';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

class TestBackend extends React.Component {
  constructor(props) {
    super(props);
  
    this.state ={

      error: null,
      isLoaded: false,
      items: []
    };
    


 
  }
  componentDidMount(){
    fetch("/users")
    .then(res => res.json())
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            items: res,
          });
        },
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      console.log(this.state.items)
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
        <ul>
        {items.map(item => (
          <li>
            {item.login} {item.password}
          </li>
        ))}
      </ul>
      );
    }
  }
}
 

 export default TestBackend;