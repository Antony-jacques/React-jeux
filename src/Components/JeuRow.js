/**
 * @author ANTONY
 * Premier comosant pure React
 */
import React ,{Component} from 'react';

class JeuRow extends Component {
    constructor(props){
        super(props);
        console.log("jeu ", props.jeu.name );

    }
 
    render(){
        let name;
        //si le jeu est en stock
        if(this.props.jeu.stocked){
             name = this.props.jeu.name;

        }else{
            //sionon le nom est en rouge
         name = <span style={{color:'red'}}>{this.props.jeu.name}</span>
        }
       
       
        return (
            <tr>
                <td>{name}</td> 
                <td>{this.props.jeu.price}</td> 

            </tr>
        )
    }

}


export default JeuRow;