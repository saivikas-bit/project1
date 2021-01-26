import React from 'react'
import classes from './InterviewCard2.module.css'
export default function InterviewCard2() {
    return (
        <div className={classes.cardi} style={{position:"relative"}}>
            <span style={{position:'absolute',top:"5px",right:"10px",fontSize:"12px",color:"orange"}}>Pending</span>
            <div style={{display:"flex"}}>
              <div className={classes.profilephoto}>
                
              </div>
              <div style={{fontSize:"20px"}}>
                Anuj Kumar <span style={{fontSize:"12px"}}>(9885865825)</span>
                <div style={{fontSize:"12px",color:"blue",marginTop:"6px"}}>
                    User Interface Development Solutions <span style={{fontSize:"10px",color:"black",fontWeight:"lighter"}}>(Level-6)</span>
                </div>
              </div>
            </div>
            <div style={{display:"flex",position:"absolute",bottom:"10px",fontWeight:"lighter"}}>
                <div>
                    <div style={{fontSize:"11px",color:"#4A4A4A",marginRight:"16px"}}>
                        InterviewType:
                        <div style={{fontSize:"14px",fontWeight:"normal"}}>
                            Skill interview
                        </div>
                    </div>
                </div>
                <div style={{fontSize:"11px",color:"#4A4A4A",marginRight:"16px",fontWeight:"lighter"}}>
                        InterViewDate:
                        <div style={{fontSize:"14px", fontWeight:"bold"}}>
                                18th November,Monday
                        </div>

                </div>
                <div >
                    <div style={{fontSize:"11px",color:"#4A4A4A",fontWeight:"lighter"}}>
                        cv:
                        <div style={{fontSize:"14px",color:"blue",fontWeight:'normal'}}>
                            Download
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
