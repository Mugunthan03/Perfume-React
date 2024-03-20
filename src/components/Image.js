

import one from '../assets/images/1.jpg'
import two from '../assets/images/2.jpg'
import three from '../assets/images/3.jpg'

function Image()
{

  return(
    <div className="image">
        <div className="one">
            <img src={one} alt="perfume img"></img>
           <p>Fogg wood Extreme ,Eau de perfume long-lasting perfume 100ml </p>
        </div>

        <div className="two">
            <img src={two} alt="perfume img"></img>
            <p>Fogg wood Extreme ,Eau de perfume long-lasting perfume 100ml</p>
        </div>

        <div className="three">
            <img src={three} alt="perfume img"></img>
            <p>Designer club, spoke ray perfume lounge Men's perfume premium long lasting perfume  </p>
        </div>


    </div>

  )
}


export default Image