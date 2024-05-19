import { useState, useEffect, useContext } from 'react'
import { Link, NavLink, Outlet,Routes,Route } from 'react-router-dom';
import { Articles } from './Articles';
import { Row } from './Row/Row';
import { Tag } from './Tag/Tag';
import { useGet } from '../hooks/useGet';

export const Header = () =>{

    const {tags, articleFil, artContext} = useGet()

    return(
        <>
            <div id="wrap" >
                <main>
                    <div className='lay-sidebar'>
                        <div className="sidebar__main">
                            <Row/>
                            <Tag tags={tags}/>  
                            <Routes>
                                <Route path='/' element={<Articles/>}/>
                                <Route path='/tema/:slug' element={<Articles />} />
                            </Routes>
                        </div>    
                    </div>    
                </main>    

            </div>

        </>
    )

}