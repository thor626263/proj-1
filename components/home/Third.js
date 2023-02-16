import React from "react";
import circle from '../../assets/images/thirdcircle.png';
import third1 from '../../assets/images/third1.png';
import third2 from '../../assets/images/third2.png';
import third3 from '../../assets/images/third3.png';
import third4 from '../../assets/images/third4.png';
import thirdrect from '../../assets/images/thirdrect.png';

function Third(){
    return(
        <>
        <div className="third-sect">
        <div>
        <p className="third-text1">How to use Zero Zero</p>
        <p className="third-text2">doloremque laudantium, totam</p>
        </div>
        <div style={{marginLeft:"450px"}}>
        <p className="third-text3">omnis iste natus error sit voluptatem accusantium laudantium,</p>
        </div>

        <div style={{marginTop:"70px",position:"absolute", marginLeft:"30px"}}>
            <div style={{display:"flex"}}>
            <div className="third-border">
            <p className="third-number">1</p>
            <img className="third-img" src={third1} alt="third1"/>
            <p className="third-text4">omnis iste natus error sit voluptatema ccusantium laudantium,</p>
            </div>
            
            <div className="third-border">
            <p className="third-number">2</p>
            <img className="third-img" src={third2} alt="third2"/>
            <p className="third-text4">omnis iste natus error sit voluptatema ccusantium laudantium,</p>
            </div>
            </div>
        </div>

        <div style={{marginTop:"212px",position:"absolute", marginLeft:"30px"}}>
            <div style={{display:"flex"}}>
            <div className="third-border">
            <p className="third-number">3</p>
            <img className="third-img" src={third3} alt="third3"/>
            <p className="third-text4">omnis iste natus error sit voluptatema ccusantium laudantium,</p>
            </div>

            <div className="third-border">
            <p className="third-number">4</p>
            <img className="third-img" src={third4} alt="third4"/>
            <p className="third-text4">omnis iste natus error sit voluptatema ccusantium laudantium,</p>
            </div>
            </div>
        </div>


        </div>
        </>
    )
}

export default Third;