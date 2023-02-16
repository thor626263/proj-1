import React from "react";
import first from '../../assets/images/first.png';
import second from '../../assets/images/second.png';
import wave from '../../assets/images/wavy.png';
import a from '../../assets/images/a.png';
import b from '../../assets/images/b.png';
import c from '../../assets/images/c.png';
import d from '../../assets/images/b.png';
import line from '../../assets/images/line.png';
import circle from '../../assets/images/circle.png';
import r1 from '../../assets/images/r1.png';
import r2 from '../../assets/images/r2.png';
import r3 from '../../assets/images/r3.png';
import r4 from '../../assets/images/r4.png';
import r5 from '../../assets/images/r5.png';


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
<div className="sec-icons-div">
    <img className="sec-icon" src={a} alt='a'/>
    <img className="sec-icon" src={b} alt='b'/>
    <img className="sec-icon" src={c} alt='c'/>
    <img className="sec-icon" src={d} alt='d'/>
</div>
<div style={{marginLeft:"170px", marginTop:"395px", position:"relative"}}>
    <p style={{marginBottom:"-57px",position:"absolute"}} >Get to know us more</p>
    <img style={{position:"absolute",marginTop:"20px", marginBottom:"0px", width:"180px"}} src={line} alt='line'/>
    <img style={{position:"absolute",marginLeft:"152px", marginTop:"-5px", height:"50px"}} src={circle} alt='circle'/>
    </div>
    <div style={{position:"absolute", marginTop:"150px", marginLeft:"120px"}}>
        <img className="sec-last-img" src={r1} alt="r1"/>
        <img className="sec-last-img" src={r2} alt="r2"/>
        <img className="sec-last-img" src={r3} alt="r3"/>
        <img className="sec-last-img" src={r4} alt="r4"/>
    </div>
    <div style={{position:"absolute", marginTop:"160px", marginLeft:"125px" , zIndex:"-1"}}>
        <img className="sec-last-img" src={r5} alt="r5"/>
        <img className="sec-last-img" src={r5} alt="r5"/>
        <img className="sec-last-img" src={r5} alt="r5"/>
        <img className="sec-last-img" src={r5} alt="r5"/>
    </div>
</div>

    </>
    )
}

export default First;



