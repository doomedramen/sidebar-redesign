import React, { useState } from 'react'

export default (props) => {

    const [isActive, setActive] = useState(false)

    function toggle() {
        setActive(!isActive)
    }

    const classes = ['accordion__parent']
    if (isActive) {
        classes.push('is-active')
    }

    const caret = isActive ? <i className="fas fa-caret-down"></i> : <i className="fas fa-caret-right"></i>

    return (
        <div className="accordion">

            <div className="accordion__toggler" onClick={toggle}>

                <div className={classes.join(' ')}>
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item mr-1">
                                {caret}
                            </div>
                            {props.toggler}
                        </div>
                    </div>
                </div>


            </div>

            <div className="accordion__content">
                {isActive && props.children}
            </div>


        </div>
    )
}