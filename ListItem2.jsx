import React from "react";
import '../index.css';
import Grid from '@material-ui/core/Grid';
import Textarea from 'react-expanding-textarea';
function ListItem2(props){
  const items = props.items2;
  var FontAwesome = require('react-fontawesome')
  const listItems = items.map(item =>
    {   
               return      <Grid
            
               container
               direction="column"
               justify="space-between"
               alignItems="stretch"
                className="input-etape-content11" >
                     
                     <Textarea  maxLength="3000" className="input-etape-content2" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}} >
                 
                       </Textarea>
                     
                     <span className="span-icon-tache" >
                      
                       <FontAwesome style={{color:"red"}} className="icon-tache" onClick={() => {
            props.deleteItem2(item.key)
        }}  name="trash" />
                  <FontAwesome style={{color:"green"}} className="icon-tache" onClick={() => {
                    props.deplacer2(item.key)
                }}  name="check-circle" />
                   
                      </span>
                     
                  </Grid>
               
              })

              return <div>
                {listItems}
                </div>
            
            
              }
              
              export default ListItem2;