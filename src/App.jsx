import React from 'react'
import { Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import { Header} from './components/Header/Header'
import { ArticleContextProvider } from './context/ArticleContext';

import './App.css'

function App() {
  
  return(
    <>
      <BrowserRouter>
            <ArticleContextProvider>
                <Header/>
            </ArticleContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
