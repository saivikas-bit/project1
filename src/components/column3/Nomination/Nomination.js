import React from 'react'
import classes from './Nomination.module.css'
export default function Nomination() {
    return (
        <div className={classes.header}>
            <div className={classes.title}>
                Nominations
            </div>
            <div className={classes.add}>
            <i class="fas fa-user-plus"></i>
            </div>
            <div style={{fontSize:"18px",textAlign:"center",color:"#2240A3"}}>User</div>
            <div className={classes.add} style={{backgroundColor:"#974FD5",boxShadow:"0px 3px 6px #974FD571"}}>
            <i class="fas fa-user-minus"></i>
            </div>
            <div style={{fontSize:"18px",textAlign:"center",color:"#2240A3",marginBottom:"12px"}}>Cancel</div>
            
        </div>
    )
}
