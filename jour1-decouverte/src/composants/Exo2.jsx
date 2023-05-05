import { Component } from "react";

class Exo2 extends Component{
    competences = ["js", "node", "angular", "react"];
    niveau = [1, 5, 10, 2];

    render(){
        return <ul>
            <li>Alain maitrise le {this.competences[1]} avec un niveau {this.niveau[3]}</li>
            <li>Celine maitrise le {this.competences[4]} avec un niveau {this.niveau[2]}</li>
        </ul> 
    }
}

export default Exo2