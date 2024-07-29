import React ,{useState} from 'react'
import MovieCard from './MovieCard'
import { useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({handleAddWatchList,watchList,removeFromAddWatchList}) {

  const [movie, setMovie] = useState([])

  const [pageNo , setPageNo] = useState(1)

  const handlePrev=()=>{
    if(pageNo===1){
      setPageNo(pageNo)
    }
    else{
      setPageNo(pageNo-1)
    }
    
  }

  const handleNext=()=>{
    
    setPageNo(pageNo+1)
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=47fa221af3777ba493cfae814c5e949c&language=en-US&page=${pageNo}`).then(function(res){
      // console.log(res.data.results)
      setMovie(res.data.results)
    })
  },[pageNo])
  return (
    <div className='p-10'>
      <h1 className='text-xl font-bold m-5 text-center'>Trending Movies</h1>
      <div className='flex flex-row flex-wrap justify-around gap-8'>
      {/* <MovieCard/> */}

        {movie.map((movieObj)=>{
          return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddWatchList={handleAddWatchList} removeFromAddWatchList={removeFromAddWatchList} watchList={watchList}/>
        })}
        
        
    </div>
    <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
    
  ) 
}

export default Movies
