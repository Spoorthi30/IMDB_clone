import React from "react";

function MovieCard({
  poster_path,
  name,
  handleAddWatchList,
  movieObj,
  removeFromAddWatchList,
  watchList,
}) {
  function doesConatin() {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="w-[150px] h-[40vh] bg-cover bg-center rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesConatin(movieObj) ? (
        <div
          onClick={() => removeFromAddWatchList(movieObj)}
          className="flex justify-center rounded-xl items-center h-8 w-8 m-2 bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddWatchList(movieObj)}
          className="flex justify-center rounded-xl items-center h-8 w-8 m-2 bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl p-2 text-center w-full bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
