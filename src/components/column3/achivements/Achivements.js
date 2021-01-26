import React from 'react'
import classes from './Achivements.module.css'

export default function Achivements() {
    return (
        <div className={classes.header}>
            <div className={classes.title}>Achievements</div>
            <div className={classes.percent}>
                {/* <div className={classes.percent}> */}
                    <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className={classes.inner}>
                    <div className={classes.image}></div> 
                    </div>
                    
                {/* </div> */}

            </div>
            <div className={classes.items}>
                <div className={classes.card}>
                <i class="fas fa-file-medical-alt"></i>
                </div>
                <div className={classes.card}>
                <i class="fas fa-file-alt"></i>
                </div>
                <div className={classes.card}>
                <i class="fas fa-bell" style={{color:" #DEAF14"}}></i>
                </div>
            </div>
        </div>
    )
}
