import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleContext  from '../../context/ArticleContext';
import { useArticle } from '../../hooks/useArticle';
import { formatDate } from '../../services/format';

export const Articles = () =>{
    const { slug } = useParams();
    const {artContext} = useContext(ArticleContext)

    const {artFilterSlug} = useArticle(slug,artContext)
    
    return(
        <>
            <section className='row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade'>
                
                {
                  
                  artFilterSlug &&
                  artFilterSlug.map((item) => (
                    
                      <article  key={item._id} className='mod-caja-nota lugares w-100-mobile'>
                        
                        <section className='cont-figure'>
                            <a  className='figure'>
                                <picture className='content-pic picture'>
                                    <img src={item.promo_items.basic.url} className='content-img'></img>  
                                </picture>  
                            </a>
                        </section> 
                        <div className='mod-caja-nota__descrip'>
                            <h2 className='com-title-acu'>
                                <a>
                                    <b>{item.headlines.basic}</b>
                                </a>
                            </h2>
                            <h4 className='com-date'>{formatDate(item.display_date)}</h4>
                        </div>
                      </article>   
                  )) 
                }
              
              </section>
        </>
    )

}