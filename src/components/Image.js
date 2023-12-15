import one from "../assets/images/pic1.png"
import two from "../assets/images/pic2.png"
import three from "../assets/images/pic3.png"

function Image(){
  return (
    <section class="img">
      <img class="img__photo" src={one} alt=""></img>
      <img class="img__photo" src={two} alt=""></img>
      <img class="img__photo" src={three} alt=""></img>
    </section>
  )
}

export default Image