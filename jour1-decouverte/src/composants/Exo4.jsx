const Exo4 = () => {
    const vehicules = [
        {id : 1, nom : "Peugeot", modele : 305 , prix : 100000000},
        {id : 2, nom : "Nissan", modele : "s13" , prix : 15000},
        {id : 3, nom : "Toyota", modele : "Supra" , prix : 80000},
    ]


    return ( 
    <div>
        <h1>exo 4</h1>
        <ul>
            {vehicules.map(function(vehicule, index){
                return <li key={index}>la {vehicule.nom} {vehicule.modele} coûte {new Intl.NumberFormat("fr-FR", {style : 'currency' , currency : 'EUR'}).format(vehicule.prix)} TTC</li>
            })}
        </ul>
    </div>  );
}
 
export default Exo4;