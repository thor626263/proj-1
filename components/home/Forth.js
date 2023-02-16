import React from "react";
import fourthcircle from '../../assets/images/fourthcircle.png';
import ReactPlayer from "react-player";


function Fourth(){
    return(
    <>
   
    <div className="fourth-sec">
        <div style={{display:"flex"}}>
            <p className="fourth-text">Digital Adds</p>
            <img style={{height:"35px", width:"35px",marginTop:"-5px" ,marginLeft:"-23px", zIndex:"-1"}} src={fourthcircle} alt="fourthcircle"/>
        </div>
    </div>
  
    <div style={{position:"absolute",marginTop:"500px"}}>
        <div style={{display:"flex"}} >
            <div style={{marginLeft:"100px",marginRight:"60px", height:"5px", width:"50px"}}>
        <ReactPlayer 
        url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
      />
      </div>
      <div style={{marginLeft:"500px",marginRight:"60px", height:"50px", width:"50px"}}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=xNRJwmlRBNU"
      />
      </div>
        </div>
        </div>
    </>
    )
}

export default Fourth;