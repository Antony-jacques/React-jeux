/**
 * @author ANTONY
 * Premier comosant pure React
 */
import React ,{Component} from 'react';
import JeuCategory from './JeuxCategory';
import JeuRow from './JeuRow';

class JeuxTable extends Component {
    constructor(props){
        super(props);
       // console.log("jeuxTable les jeux ", props.jeux)
    
    }
 
    render(){
        // filterText est ce qui est tapé dans le champs de recherche
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        let lastCategory;
        const rows = [];
        this.props.jeux.forEach(jeu =>{
            // si le nom du jeu tapé n'est pas trouvé. indexOf() renvoie -1 si il ne trouve pas la chaiine de caractere
            // attention indexOf est sensible à la casse
            if(jeu.name.toLowerCase().indexOf(filterText) === -1){
                //on ne fait rien
               return;

           }
           //si on a coché prod. en stock seulement (inStockOnly === true) ET que le jeu n'est pas en stock
           if(inStockOnly && !jeu.stocked){
               //on ne fait rien
               return;
               
           }

           // tri par category
           if(jeu.category !== lastCategory){
               // on ajoute une ligne de categorie avec le compo JeuCategory
               rows.push(<JeuCategory category ={jeu.category}/>)
           }

           //Ensuite on ajoute le jeu dans le tableau
            rows.push(<JeuRow key={jeu.name} jeu={jeu}/>)
            // on affetcte la categorie du jeu ajouté à lastCategory
            lastCategory = jeu.category;
        })





     /*   this.props.jeux.forEach(jeu=>{
            
            rows.push(<JeuRow key={jeu.name} jeu={jeu}/>)
        })*/
       // rows.push(<JeuRow key="1" />);
       // rows.push(<JeuRow key="2"/>);
       
        return (
        <div style={{"background-color":"violet"}}>
            JeuxTable
            
            <table>
                <thead>
                    <tr>
                       <th>Name</th>
                       <th>Price</th>
                    </tr>
                </thead>
                
                {rows}
            </table>

        </div>
        )
    }

}


export default JeuxTable;