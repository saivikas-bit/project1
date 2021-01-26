import React from 'react'
import classes from './Navbar.module.css'
// import Classes from './Navbar.module.css'

export default function Navbar() {
    return (
        <div>
            <header className={classes.header}>
                <div>
                    R.E.C.R.U.I.T.E.M.E.N.T
                </div>
                <nav className={classes.nav}>
                    <ul>
                        <li><i class="fas fa-search"></i></li>
                        <li><i class="fas fa-globe"></i></li>
                        <li><i class="fas fa-comments"></i></li>
                        <li className={classes.notification}><i class="fas fa-bell"></i><span className={classes.bubble}></span></li>
                        <li>name</li>
                        <li className={classes.profile}></li>
                    </ul>
                </nav>

            </header>            
        </div>

    )
}
