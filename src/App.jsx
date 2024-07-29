
import './App.css'
import Navbar from './comonents/Navbar'
import Movies from './comonents/Movies'
import WatchList from './comonents/WatchList'

import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Banner from './comonents/Banner'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  const [watchList , setWatchList] = useState([])

  let handleAddWatchList=(movieObj)=>{
    let newWatchList=[...watchList,movieObj]
    localStorage.setItem('moviesApp' , JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  let removeFromAddWatchList=(movieObj)=>{
    let filteredWatchList= watchList.filter((movie)=>{
      return movie.id != movieObj.id
    })
    setWatchList(filteredWatchList)
    localStorage.setItem('moviesApp' , JSON.stringify(filteredWatchList))
  }

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])
  
  return (
    <>

      <BrowserRouter>

      <Navbar/>

      <Routes>

      <Route path='/' element={<> <Banner/> <Movies watchList={watchList} handleAddWatchList={handleAddWatchList} removeFromAddWatchList={removeFromAddWatchList}/></>}/>

      <Route path='/watchlist' element={<WatchList watchList={watchList} setWatchList={setWatchList} removeFromAddWatchList={removeFromAddWatchList}/>}/>
      
      

      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
