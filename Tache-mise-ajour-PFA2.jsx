import React from "react";
import '../index.css';
import Grid from '@material-ui/core/Grid';
import Textarea from 'react-expanding-textarea';
import ListItem1 from '../Component/ListItem1';
import ListItem2 from '../Component/ListItem2';
import ListItem3 from '../Component/ListItem3';
class TacheMiseajourPFA2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      },
      items2:[],
      items3:[],
     
    
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.deplacer = this.deplacer.bind(this);
    this.deleteItem2 = this.deleteItem2.bind(this);
    this.deplacer2 = this.deplacer2.bind(this);
    this.deleteItem3 = this.deleteItem3.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  deplacer(key){
   
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
      const filteredItems2= this.state.items.filter(item =>
        item.key===key);  
    this.setState({
      items: filteredItems
    });
    this.setState({
      items2: filteredItems2
    });
       
    
      
     
    
    
    
      
    
    }
   
    deleteItem2(key){
      const filteredItems= this.state.items2.filter(item =>
        item.key!==key);
      this.setState({
        items2: filteredItems
      })
  
    }
    deleteItem3(key){
      const filteredItems= this.state.items3.filter(item =>
        item.key!==key);
      this.setState({
        items3: filteredItems
      })
  
    }
    deplacer2(key){
     
      const filteredItems= this.state.items2.filter(item =>
        item.key!==key);
        const filteredItems2= this.state.items2.filter(item =>
          item.key===key);  
      this.setState({
        items2: filteredItems
      });
      this.setState({
        items3: filteredItems2
      });
         
      
        
       
      
      
      
        
      
      }  

  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
    render() {
        var FontAwesome = require('react-fontawesome')
      return (
        <div className="div-mise-a-jour">
            <Grid
               className="grid-tache"
               container
               direction="row"
               justify="space-between"
               alignItems="stretch"
               > 
             <div>
                 <h1 style={{fontSize:"30px",fontWeight:"600",marginLeft:"30px",color:"white"}}>Mise à jour de taches etape1</h1>
             </div>
           <Grid
               className="grid-tache"
               container
               direction="row"
               justify="space-between"
               alignItems="stretch"
               >  <div className="div-etape" style={{display: "inline-block"}} >
                  <div className="div-etape-title"  style={{display: "block"}}>
                     <h1 className="etape-title">A faire
                     <FontAwesome style={{color:"red"}} className="icon-tache" onClick={() => {
                     alert("ok");
                   }}  name="sticky-note" /></h1>
                     <form className="form-tache" id="to-do-form" onSubmit={this.addItem} >
               <input className="input-tache" type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
              <button className="button-tache" type="submit"  >
              <FontAwesome
                             style={{ color: 'black' }}
                             name="plus"
                        
                           size="1x"
                         
                  
                /> Ajouter</button>
             </form>
                  </div>
                  <div    className="div-etape-content">
                  <ListItem1 items={this.state.items} deplacer={this.deplacer}  deleteItem={this.deleteItem} setUpdate={this.setUpdate} ></ListItem1>
                  </div>

               </div>
               <div className="div-etape">
               <div className="div-etape-title"  style={{display: "block"}}>
               <h1 className="etape-title">En cours
               <FontAwesome style={{color:"#FF9933"}} className="icon-tache" onClick={() => {
                     alert("ok");
                   }}  name="clock" /></h1>
              
                     </div>
                     <div  style={{display: "block"}} className="div-etape-content">
                     <ListItem2 items2={this.state.items2} deplacer2={this.deplacer2}  deleteItem2={this.deleteItem2} ></ListItem2>
                     </div>  
                   
               </div>
               <div className="div-etape">
               <div className="div-etape-title"  style={{display: "block"}}>
               <h1 className="etape-title">Terminée
               <FontAwesome style={{color:"green"}} className="icon-tache" onClick={() => {
                     alert("ok");
                   }}  name="check-circle" /></h1>
              
                     </div>
                     <div  style={{display: "block"}} className="div-etape-content">
                     <ListItem3  items3={this.state.items3} deleteItem3={this.deleteItem3} ></ListItem3>
                     </div>
                   
               </div>
               </Grid>
               </Grid>
        </div>
      );
    }
  }
  
  export default TacheMiseajourPFA2;