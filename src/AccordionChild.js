import React, { useState } from 'react'

export default (props) => {
    const [isActive, setActive] = useState(false)
    function toggle() {
        setActive(!isActive)
    }


    const classes = ['accordion__child']
    if (isActive) {
        classes.push('is-active')
    }

    return (
        <div className={classes.join(' ')} onClick={toggle}>
            <div className="level">
                <div className="level-left">
                    {props.children}
                </div>
            </div>
        </div>
    )

}