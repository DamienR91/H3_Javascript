function Premier () {
    const a= 15;
    const texte = "nombre de like";
    const niveau = ["debutant", "confirmé", "sénior"];
    return <div>
        <p>Alain a { a } ans</p>
        {/** interpolation */}
        {/** commentaire en jsx */}
        <p>Il à eu {a} {texte}</p>
        <p>Alain est {niveau[1]}</p>

    </div>
}
export default Premier ;