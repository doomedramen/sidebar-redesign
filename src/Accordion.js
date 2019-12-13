import React, { useState } from 'react'

export default (props) => {

    [isActive, setActive] = useState(false)



    return (
        <div className="accordion">

            <div className="accordion__toggler">
                {props.toggler}
            </div>

            <div className="accordion__content">
                {isActive && props.children}
            </div>


        </div>
    )
}