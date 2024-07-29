import React , {useState} from 'react'
import genreids from '../Utility/genre'
import { useEffect } from 'react'

function WatchList({watchList,setWatchList,removeFromAddWatchList}) {

  const [search, setSearch] = useState('')

  const [genreList , setGenreList] = useState(['All Genre'])

  const [currGenre , setCurrGenre] = useState('All Genre')

  const handleChange=(e)=>{
    setSearch(e.target.value)
  }

  const handleFilter=(genre)=>{
    setCurrGenre(genre)
  }

  let sortIncreasing=()=>{
    let sortedIncreasing = watchList.sort((movieA,movieB)=>{
      return movieA.vote_average - movieB.vote_average
    })
    setWatchList([...sortedIncreasing])
  }

  let sortDecreasing=()=>{
    let sortedDecreasing = watchList.sort((movieA,movieB)=>{
      return movieB.vote_average - movieA.vote_average
    })
    setWatchList([...sortedDecreasing])
  }

   useEffect(()=>{
    let temp = watchList.map((movieObj)=>{
      return genreids[movieObj.genre_ids[0]]
    })
    temp =new Set(temp)
    setGenreList(['All Genre',...temp])
    console.log(temp)
   },[watchList])

  return (
    <>

    <div className='flex justify-center flex-wrap m-4'>
      {genreList.map((genre)=>{
        return <div onClick={()=>handleFilter(genre)} className={ currGenre==genre ? 'hover:cursor-pointer bg-blue-300 w-[6rem] h-[2rem] flex items-center justify-center rounded-xl mx-4':'hover:cursor-pointer bg-gray-300 w-[6rem] h-[2rem] flex items-center justify-center rounded-xl mx-4' }>{genre}</div>
      })}
      
      {/* <div className='bg-gray-300 w-[4rem] h-[2rem] flex items-center justify-center rounded-xl mx-4'>Action</div> */}
    </div>
      <div className='flex justify-center mt-5'>
        <input type="text" onChange={handleChange} text={search} placeholder="Search for the Movie" className='h-[2rem] w-[15rem] bg-gray-200 p-2'></input>
      </div>
      
      <div className='border border-gray-400 m-5 rounded-lg overflow-hidden'>
        <table className='w-full text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <th className='flex items-center justify-center'>
                <div className='p-2 hover:cursor-pointer' onClick={sortIncreasing}><i class="fa-solid fa-arrow-up"></i></div>
                <div className='p-2'>Rating</div>
                <div className='p-2 hover:cursor-pointer' onClick={sortDecreasing}><i class="fa-solid fa-arrow-down"></i></div>
              </th>
              
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>

            {watchList.filter((movieObj)=>{
              if(currGenre=='All Genre'){
                return true
              }
              else{
                return genreids[movieObj.genre_ids[0]]==currGenre
              }
            }).filter((movieObj)=>{
              return movieObj.title.toLowerCase().includes(search.toLowerCase())
            }).map((movieObj)=>{
              return <tr className='border-b-2'>
              <td className='items-center flex px-10 py-4'>
                <img className="w-[6rem] h-[6rem]" src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}/>
                <div>{movieObj.title}</div>
              </td>
              <td>{movieObj.vote_average}</td> 
              <td>{movieObj.popularity}</td>
              <td>{genreids[movieObj.genre_ids[0]]}</td>
              <td className='text-red-600 hover:cursor-pointer' onClick={()=>removeFromAddWatchList(movieObj)}>Delete</td>
            </tr>
            })}

            
          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList
