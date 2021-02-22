/**
 * @author ANTONY
 * Premier comosant pure React
 */
import React ,{Component} from 'react';
import SearcCompo from './SearchCompo';
import JeuxTable from './JeuxTable';

class FilterableJeuxTable extends Component {
    constructor(props){
        super(props);
        //console.log("les jeux ", props.jeux)
       this.state={
           filterText:'',
           inStockOnly:false
       }
       // on bind handleInStockChange pour relier l'etat de checkbox
       this.handleInStockChange= this.handleInStockChange.bind(this);

       this.handleFilterTextChange= this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange = (e)=>{
        console.log("parent ", e);
        this.setState({filterText:e})
    };
 
    handleInStockChange = (e)=>{
         console.log("parent ", e);
         this.setState({inStockOnly:e})
    }
 
    render(){
        
        
        return (
        <div style={{"backgroundColor":"blue"}}>
            FilterableJeuxTable
            <SearcCompo 
                filterText={this.state.filterText} 
                inStockOnly={this.state.inStockOnly}
                handleFilterTextChange={this.handleFilterTextChange}
                handleInStockChange={this.handleInStockChange}
            />
            <JeuxTable jeux={ this.props.jeux}
                filterText={this.state.filterText} 
                inStockOnly={this.state.inStockOnly}     
            />
        </div>
        )
    }

}


export default FilterableJeuxTable;