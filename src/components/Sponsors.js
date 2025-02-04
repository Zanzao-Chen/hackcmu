import '../styles/Sponsors.css'
import citadel from '../images/sponsors/citadel-logo.png'
import tradedesk from '../images/sponsors/TheTradeDesk_Logo_White.png'
import janestreet from '../images/sponsors/logo_horizontal_blue_registered.png'
import sandia from '../images/sponsors/sandia-logo.png'
import ford from '../images/sponsors/Ford_logo_flat.svg.png'
import deshaw from '../images/sponsors/2298205.png'
import bnymellon from '../images/sponsors/bny_mellon_logo.jpeg'
const Sponsors = () => { 

    return (
        <div className="sponsors-page">
            <div className="sponsors-header"></div> {/* used to line up the scroll correctly */}
            <div className='sponsors-title'>Sponsors</div>
            <div className='sponsors-container' id="plat-sponsors-container">
                <div className='sponsors-level'>SATELLITE</div>
                <div className='sponsors sponsors-platinum'>   
                    <a href="https://www.citadel.com">
                        <img src={citadel} alt="sponsors"/>
                    </a>
                    <a href="https://www.thetradedesk.com">
                        <img src={tradedesk} alt="sponsors"/>
                    </a>
                </div>
            </div>
            <br></br><br></br>
            <div className='sponsors-container' id="gold-sponsors-container">
                <div className='sponsors-level'>ROVER</div>
                <div className='sponsors sponsors-gold'>
                    
                    <a className="rounded-sponsor-img" href="https://www.janestreet.com/">
                        <img src={janestreet} alt="sponsors"/>
                        </a>
                        <a className="rounded-sponsor-img" href="https://www.ford.com/">
                        <img src={ford} alt="sponsors"/>
                        </a>
                        <a className="rounded-sponsor-img" href="https://www.deshaw.com/">
                        <img src={deshaw} alt="sponsors"/>
                        </a>
                        <a className="rounded-sponsor-img" href="https://www.bnymellon.com/">
                        <img src={bnymellon} alt="sponsors"/>
                        </a>
                </div>
            </div>
            <br></br><br></br>
            <div className='sponsors-container' id="silver-sponsors-container">
                <div className='sponsors-level'>ROCKET</div>
                <div className='sponsors sponsors-silver'>
                    <a href="https://www.sandia.gov/">
                        <img src={sandia} alt="sponsors"/>
                        </a>
                </div>
            </div>
            <br></br><br></br>
            <div className="sponsors-footer"></div> {/* used to line up the scroll correctly */}
        </div>
    );

}


 
export default Sponsors;