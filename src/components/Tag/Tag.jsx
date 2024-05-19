import { Link, NavLink, Outlet,Routes,Route } from 'react-router-dom';

export const Tag = ({tags}) =>{
    return(
        <>
           <div className='row'>
                <div className='cont_tags com-secondary-tag hlp-marginBottom-20'>

                    {
                        tags &&
                        tags.map((tag) => (
                            <NavLink key = {tag.slug} to={`/tema/${tag.slug}`} >{tag.text}</NavLink>
                            
                        ))
                    }
                </div>
            </div>
        </>
    )

}