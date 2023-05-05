import { useState } from "react";
import ArticleCommentaires from "./ArticleCommentaires";
import ArticleFormulaire from "./ArticleFormulaire";

const Articles = () => {

    const [articles, setArticles] = useState([
        {id: 1, titre : "Article 1", img : "https://t4.ftcdn.net/jpg/05/54/73/15/240_F_554731536_IYyswdAeQUpUSLWvJq9p6LdwEoPPxeer.jpg", texte : "Canapé bleue", commentaires: []},
        {id: 2, titre : "Article 2", img : "https://t4.ftcdn.net/jpg/01/96/35/07/240_F_196350703_TvVEmWNU2dDBzbEoXg0Akp4p9347dtox.jpg", texte : "Meuble en bois", commentaires: []},
        {id: 3, titre : "Article 3", img : "https://t4.ftcdn.net/jpg/05/42/96/93/240_F_542969300_VvbwyqYrWbp3wCMc17CMGqnOiqvokx2T.jpg", texte : "Canapé jaune", commentaires: []},
    ])

    const ajouterCommentaire = ( idArticle , commentaire ) => {
        console.log(idArticle, commentaire)
        // ajouter pour l'article concernée un commentaire dans sa propriété commentaires 
        const articlesModifie = articles.map( article => {
            if(article.id === idArticle) {
                article.commentaires.push(commentaire)
                return article
            }
            return article
        }  )
        setArticles(articlesModifie)
    }
    // afficher la liste des articles dans votre application React
    return ( <div className="row">
        {articles.map( article => 
            <article className="col-4" key={article.id}>
                <div className="card">
                    <h2 className="card-header">{article.titre}</h2>
                    <img src={article.img} alt="" />
                    <div className="card-body">
                        {article.texte}
                    </div>
                    {/** balise orpheline br img hr input le / final est OBLIGATOIRE */}
                    <hr />
                    {/** si la propriété commentaire de l'objet article contient aucun commentaire => ajouter un nouveau commentaire / liste des commentaires existants */ }
        <ArticleFormulaire ajouterCommentaire={ajouterCommentaire} id={article.id} />
                    <hr />
                    <ArticleCommentaires article={article} />
                    {/* envoie au composant enfant l'article */}
                </div>
            </article> )}
    </div> );
}
 
export default Articles;