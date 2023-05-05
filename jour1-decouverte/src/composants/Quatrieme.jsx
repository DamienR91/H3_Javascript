const Quatrieme = () => {
    const etudiants = ["Alain", "Benoit", "Céline", "Zorro"];

    return ( <ul>
        {etudiants.map(function(etudiant , index) {
            return <li key={index}>{etudiant}</li>
        }) }

    </ul> );
}
 
export default Quatrieme;