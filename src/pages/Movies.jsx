import MovieCard from "../components/MovieCard"
import "../css/Movies.css"
import "../css/MovieCard.css"

function Movies(){
    const movies=[
        {id:1, title:"Your Name", release_date:"2016",
            url:"/covers/your-name-final.jpg",
            ref:"https://www.imdb.com/title/tt5311514/"
        },
        {id:2, title:"Interstellar", release_date:"2014",
            url:"/covers/interstellar.webp",
            ref:"https://www.imdb.com/title/tt0816692/"
        },
        {id:3, title:"Weathering with you", release_date:"2019",
            url:"/covers/wwu.jpg",
            ref:"https://www.imdb.com/title/tt9426210/"
        },
        {id:4, title:"Free Guy", release_date:"2021",
            url:"/covers/free-guy-final.jpg",
            ref:"https://www.imdb.com/title/tt6264654/"
        },
        {id:5, title:"Inception", release_date:"2010",
            url:"/covers/inception.jpg",
            ref:"https://www.imdb.com/title/tt1375666/"
        },
        {id:6, title:"Oppenheimer", release_date:"2023",
            url:"/covers/oppenheimer-final.webp",
            ref:"https://www.imdb.com/title/tt15398776/"
        },
         {id:7, title:"Demon Slayer:Mugen Train", release_date:"2019",
            url:"/covers/mugen-train.webp",
            ref:"https://www.imdb.com/title/tt11032374/"
        },
        {id:8, title:"Harry Potter and the Deathly Hallows Part-2", release_date:"2011",
            url:"/covers/harry-potter.jpg",
            ref:"https://www.imdb.com/title/tt1201607/"
        },
        {id:9, title:"Final destination", release_date:"2011",
            url:"/covers/harry-potter.jpg",
            ref:"https://www.imdb.com/title/tt1201607/"
        }
    ]
    return <main>
        

        <div className="Movies">
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