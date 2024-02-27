import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';
const Home=()=>{

  const amine = {
   
      position: "relative",
      flex: "0 0 100%",
      width: "100%",
      backgroundImage: `url("https://gomycodelearndev.blob.core.windows.net/profiles/98bdcd2b-5fe5-4d5e-92a0-dfdaccb351eb-133407944633564858.png")`,
      counterIncrement: "item",
    
  }
    return(
        <div className='home'>
            <div>
          <div class="containerA">
            <div class="carousel">
              <div class="carousel__face"><span>This is something</span></div>
              <div class="carousel__face"><span>Very special</span></div>
              <div class="carousel__face"><span>Special is the key</span></div>
              <div class="carousel__face"><span>For you</span></div>
              <div class="carousel__face"><span>Just give it</span></div>
              <div class="carousel__face"><span>A try</span></div>
              <div class="carousel__face"><span>And see</span></div>
              <div class="carousel__face"><span>How IT Works</span></div>
              <div class="carousel__face"><span>Woow</span></div>
            </div>
            </div>
{/* <Footer/> */}
</div>



</div>


    )
    
}




export default Home