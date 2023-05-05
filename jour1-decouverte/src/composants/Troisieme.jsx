const Troisieme = () => {
    const titre = "troisieme composant";
    const propriete = "first";
    const proprieteId = "element1";
    const a = 10;
    const b = 30;
    const isLogged = true;
    const prenom = "Alain";
    const html = '<a href="#">lien</a>';

    const calcul = (a , b) => {
        return <p>{a * b}</p>
    }

    return <>
        <div id={proprieteId} className={propriete}>{titre}</div>
        <p>{a + b} </p>
        {isLogged ? <p>Bivenue Monsieur X </p> : <p>Veuillez vous connecter </p>}
        <p> { prenom.toUpperCase() }</p>
        {html}
        {calcul(2,4)}
    </>;
}
 
export default Troisieme;