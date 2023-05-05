const Exo5 = () => {
    const vehicules = [
        {id : 1, nom : "Peugeot", modele : 305 , prix : 100000000, enStock : true},
        {id : 2, nom : "Nissan", modele : "s13" , prix : 15000, enStock : true},
        {id : 3, nom : "Toyota", modele : "Supra" , prix : 80000, enStock : false},
    ]

    return ( 
        <div>
            <h1>exo 5</h1>
            <ul>
                {vehicules.map(function(voiture){
                    return <>
                        {voiture.enStock && <li key={voiture.id}>
                            la {voiture.nom} {voiture.modele} coûte {new Intl.NumberFormat("fr-FR", {style : 'currency' , currency : 'EUR'}).format(voiture.prix)}
                        </li>}
                    </>
                })}
            </ul>
        </div>  );
    }
     
    export default Exo5;