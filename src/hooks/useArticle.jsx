import { useState, useEffect, useContext } from 'react'
import ArticleContext  from '../context/ArticleContext';


export const useArticle = (slug, artContext) =>{

    const [artFilterSlug, setArtFilterSlug] = useState()

    function filterBySlug(articles, slug) {
        console.log("Es el slug a buscar ", slug)
        
        return articles.filter(article => 
            article.taxonomy.tags.some(tag => tag.slug === slug)
        );
    }

    useEffect(() => {
        if (!slug) {
            setArtFilterSlug(artContext);
        } else {
            setArtFilterSlug(filterBySlug(artContext, slug));
        }
    }, [slug, artContext]);
    
    return{artFilterSlug}
}