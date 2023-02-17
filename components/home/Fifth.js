import React from "react";
import fifth1 from '../../assets/images/fifth1.png';
import fifth2 from '../../assets/images/fifth2.png';
import fifth3 from '../../assets/images/fifth3.png';
import fifth4 from '../../assets/images/fifth4.png';
import fifthplay1 from '../../assets/images/fifthplay1.png';
import fifthplay2 from '../../assets/images/fifthplay2.png';


function Fifth(){
    return(<>
        <div className="fifth-sec">
            <p className="fifth-text1">Influencer Collabs</p>
        </div>

        <div style={{display:"flex", marginTop:"15%", marginLeft:"150px"}}>
        <img className="fifth-img" src={fifth1} alt="fifth1" />
        <img className="fifth-img" src={fifth2} alt="fifth2" />
        <img className="fifth-img" src={fifth3} alt="fifth3" />
        <img className="fifth-img" src={fifth4} alt="fifth4" />
        </div>

        <div style={{display:"flex", marginTop:"-20px", marginLeft:"330px"}}>
            <img className="fifth-play1" src={fifthplay1} alt="fifthplay1" />
            <img className="fifth-play1" src={fifthplay1} alt="fifthplay1" />
            <img className="fifth-play1" src={fifthplay1} alt="fifthplay1" />
            <img className="fifth-play1" src={fifthplay1} alt="fifthplay1" />
        </div>

        <div style={{display:"flex", marginTop:"-30px", marginLeft:"344px"}}>
            <img className="fifth-play2" src={fifthplay2} alt="fifthplay2" />
            <img className="fifth-play2" src={fifthplay2} alt="fifthplay2" />
            <img className="fifth-play2" src={fifthplay2} alt="fifthplay2" />
            <img className="fifth-play2" src={fifthplay2} alt="fifthplay2" />
        </div>


        

    </>
)
}

export default Fifth;