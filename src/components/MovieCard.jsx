import "../css/MovieCard.css"
import "../css/Favorites.css"
import { useState } from 'react';
function MovieCard({movie}){
      const [isFavorite, setIsFavorite] = useState(false);
    
    function OnFavoriteClick(event){
        event.stopPropagation();
        setIsFavorite(!isFavorite);
        alert("clicked")
    }

    return<div className="movie-card">
        <div className="movie-poster">
       <a  href={movie.ref} target="_blank"><img src={movie.url}  alt={movie.title}/></a>
            <div className="movie-overlay">
                <button className={`favorite-btn ${isFavorite ? 'active' : ''}`} onClick={OnFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <a href={movie.ref} target="_blank"><h3 href={movie.ref} title="Interested?Press to know more!">{movie.title}</h3></a>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default MovieCard