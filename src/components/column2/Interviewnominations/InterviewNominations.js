import React from 'react'
import classes from './InterviewNominations.module.css'
import NominationCard from './NominationCard/NominationCard'
export default function InterviewNominations() {
    return (
        <div>
            <div style={{fontSize:"22px",color:"#2240A3",marginBottom:"10px",marginTop:"9px"}}>
                Add Nomination
            </div>
            <div style={{marginBottom:"10px"}}>
                <input type="text" className={classes.inputstyle} placeholder="Search by Skill" />
                <i class="fas fa-filter" style={{color:"blue",marginLeft:"4px"}}></i>
            </div>
            <div>
                <NominationCard></NominationCard>
            </div>
        </div>
    )
}
