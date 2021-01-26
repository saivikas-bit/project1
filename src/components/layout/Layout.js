import React from 'react'
import Column1 from '../colum1/Column1'
import InterviewNominations from '../column2/Interviewnominations/InterviewNominations'
import NominationCard from '../column2/Interviewnominations/NominationCard/NominationCard'
import Achivements from '../column3/achivements/Achivements'
import Nomination from '../column3/Nomination/Nomination'

export default function Layout() {
    return (
        <div className="container-fluid" style={{marginTop:"4rem"}}>
            <div className="row" style={{marginLeft:"4rem"}}>
                <div className="col-6" style={{marginRight:"1rem",boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",borderRadius: "8px"}}>
                    <Column1></Column1>
                </div>
                <div className="col-4 " style={{marginRight:"1rem",boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",borderRadius: "8px"}}>
                    <InterviewNominations></InterviewNominations>
                </div>
                <div style={{width:"200px",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"0"}} >
                        <Achivements></Achivements>
                        <Nomination></Nomination>
                </div>
            </div>
            
        </div>
    )
}
