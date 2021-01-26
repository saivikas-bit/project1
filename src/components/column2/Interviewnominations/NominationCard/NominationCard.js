//import classes from '*.module.css'
import React from 'react'
 import classes from './NominationCard.module.css'
export default function NominationCard() {
    return (
        <div className={classes.nominationcard}>
            <div style={{fontSize:"10px",color:"color: #959595;"}}>
                Primary:
                <div style={{fontSize:"12px",color:"#4A4A4A"}}>
                    FED
                </div>
            </div>
            <div style={{fontSize:"10px",color:"color: #959595;"}}>
                Project:
                <div style={{fontSize:"12px",color:"#4A4A4A"}}>
                    Assets Tracking
                </div>
            </div>
            <div style={{fontSize:"10px",color:"color: #959595;"}}>
                Client:
                <div style={{fontSize:"12px",color:"#4A4A4A"}}>
                    Axon Mobile
                </div>
            </div>
            <div style={{fontSize:"10px",color:"color: #959595;"}}>
                Job Description 
                <div style={{fontSize:"12px",color:"#4A4A4A",color:'blue'}}>
                    view
                </div>
            </div>
            <div style={{fontSize:"10px",color:"color: #959595;"}}>
                Date Range:
                <div style={{fontSize:"12px",color:"#4A4A4A"}}>
                    15-10-19 to 17-10-19
                </div>
            </div>
            <button className={classes.nomineebtn}>
                Nominate
            </button>
            
            
        </div>
    )
}
