import "../css/home.css"
function Home(){
    return(<main>
    
   <div className="home">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="src/assets/cat sleep hd.mp4" type="video/mp4" />
      </video>

      <div >
        <h1 className="home-content">Welcome to Off The Feed!!!</h1>
    </div>
     
       </div>

    </main>)
}

export default Home;
