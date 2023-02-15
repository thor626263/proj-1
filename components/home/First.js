import React from "react";
import first from '../../assets/images/first.png';
import second from '../../assets/images/second.png';
import wave from '../../assets/images/wavy.png';
import a from '../../assets/images/a.png';
import b from '../../assets/images/b.png';
import c from '../../assets/images/c.png';
import d from '../../assets/images/b.png';

function First(){
    return(
    <>
   <div className="fir-sect">
<img className="fir-img" src={first} alt="first"/>
{/* <p className="fir-text">ZERO HAIR, ZERO FIKAR</p> */}
{/* <svg viewBox="0 0 300 300" preserveAspectRatio="xMinYMin meet">
<path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke:"none", fill:"blue"}}></path>
</svg> */}
</div>

<div>
<img style={{width:"100%"}}  src={wave}/>
</div>

<div className="sec-sect">
<img className="sec-img" src={second} alt="first"/>

<div>
    <div style={{width: "150px",height: "30px"}}>
<p className="sec-1text">About us</p>
    </div>
    <div style={{width: "586px",height: "50px"}}>
<p className="sec-2text">omnis iste natus error sil Voluptatem
    accusantium</p>
    </div>
    <div style={{width: "708px",height: "60px"}}>
    <p className="sec-3text">
    omnis iste natus error sit voluptatem accusantium doloremque
laudantium, totam rem aperiam, eaque ipsa quae ab
    </p>
    </div>
</div>
<div>
    {/* <img src={a} alt='a'/>
    <img src={b} alt='a'/>
    <img src={c} alt='a'/>
    <img src={d} alt='a'/> */}
</div>
</div>

    </>
    )
}

export default First;



