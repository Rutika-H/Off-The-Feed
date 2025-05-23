import "../css/Favorites.css"
function Favorites(){
    return<main><div className="container">
                 <video autoPlay loop muted playsInline className="background-video">
                 <source src="/cat-jump-negate.mp4" />
                </video>
               </div>
    <div className="favorites-empty">
        <h2>Your favorites list is currently empty.

</h2>
        <p>Empty. But not for long.</p>
    </div>
    
    </main>
}
export default Favorites