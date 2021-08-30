import React, { Fragment } from 'react'
import img from '../component/img/dog-icon.png'

function Header() {
    return (
        <Fragment>
            <header>
                <img src={img} alt="" className="icon" />
                <h1>Dogs API Search</h1>
            </header>
        </Fragment>
    )
}

export default Header;
