import "../css/home.css"
function Home(){
    return(<main>
    
   <div className="home">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/cat-sleep-hd.mp4" type="video/mp4" />
      </video>

      <div >
        <h1 className="home-content">Welcome to Off The Feed!💟</h1>
        <p className="about-me">👾You’ve just tuned into Off The Feed-curated by me.
            <br/>
          I’m Rutika🙋🏻‍♀️, and this is the calm corner of the internet.
          <br/>
          Welcome to my space,
          <br/>
          where i build cool things without the noise!
          <br/>
          ❤️🐻‍❄️🌼🏡⚡
        </p>
       <a href="https://www.instagram.com/rutikahake/" target="_blank" >
       <h4 className="socials">Click this to follow me on Instagram!❤️ </h4>
      </a>
    </div>
     
       </div>

    </main>)
}

export default Home;
