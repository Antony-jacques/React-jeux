/**
 * @author ANTONY
 * Premier comosant pure React
 */
import React ,{Component} from 'react';


class SearchCompo extends Component {
    constructor(props){
        super(props);
        console.log(this.props.filterText);
    
    }
    
    handleFilterTextChange = (e)=>{
      // console.log(e.target.value);
      //utilise la props handleFilterTextChange qui vient de FilterableJeuxTable. 
      //Dans FilterableJeuxTable, handleFilterTextChange est une f qui change le state filterText qui se trouve dans l'input 
       this.props.handleFilterTextChange(e.target.value)
   };

   handleInStockChange = (e)=>{
       // console.log(e.target.checked);
        this.props.handleInStockChange(e.target.checked)
   }
 
    render(){
        
        
        return (
        <div style={{"background-color":"red"}}>
            <input type="text" 
                text={this.props.filterText} 
                placeholder="chercher" 
                 onChange = {this.handleFilterTextChange}
             />

            <input type="checkbox" 
                checked={this.props.inStockOnly} 
                onChange = {this.handleInStockChange}
            /> {' '} 
            Produit en stock seulement

        </div>
        )
    }

}


export default SearchCompo;