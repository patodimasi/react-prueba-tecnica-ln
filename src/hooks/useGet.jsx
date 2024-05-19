import { useState, useEffect, useContext } from 'react'
import ArticleContext  from '../context/ArticleContext';

export const useGet = () =>{

    const [tags, setTags] = useState('');
    const [articleFil, setArticleFil] = useState('')
   

    const {artContext, setArtContext} = useContext(ArticleContext)

    const getTag = () =>{
        fetch('https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws')
            .then(resp => resp.json())
            .then(data =>{
         
            let articles = data.articles.filter((ele)=>{
                return ele.subtype == 7
            });
  
            setArticleFil(articles);

            setArtContext(articles)
  
            let array_hash = []
           
            
            articles.map((article) => {
        
                article.taxonomy.tags.map((tag) => {
                  
                  if (array_hash[tag.text] != undefined) {
         
                    array_hash[tag.text].count++;
                    
                  } else {
                    let hash = {};
                    hash.text = tag.text;
                    hash.slug =  tag.slug;
                    hash.count = 1;
                    array_hash[tag.text] = hash;
                  }
                });
    
            });
  
        
            var array_hash_order = Object.values(array_hash);
  
   
            array_hash_order.sort((a,b) => { return (b.count -a.count)})
          
           
            let  array_hash_order_10;
            array_hash_order_10 = array_hash_order.slice(0,10);
          
  
           setTags(array_hash_order_10);
    
        
          })
          
    }

    useEffect(()=>{
        getTag() 
    },[])

    return{tags, articleFil, artContext}
}