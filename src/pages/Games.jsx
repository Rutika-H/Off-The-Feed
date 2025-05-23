import MovieCard from "../components/MovieCard"
import "../css/Movies.css"
import "../css/MovieCard.css"

function Movies(){

    
    const movies=[
        {id:1, title:"Your name", release_date:"2016"},
        {id:2, title:"movie 2", release_date:"year 2"},
        {id:3, title:"movie 3", release_date:"year 3"},
        {id:4, title:"movie 4", release_date:"year 4"},
        {id:5, title:"movie 5", release_date:"year 5"}
    ]
    return <main>
        
    <div className="movies">
        <div className="movies-grid">
            {movies.map((movie)=>
                (<MovieCard movie={movie} key={movie.id} />)
                       )
            }
        </div>

    </div>
     
    </main>
    

}
export default Movies