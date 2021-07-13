import React from 'react'
import "./title.scss"

const Title = ({label, active, setActive}) => {
    return (
        <div className="title">
            <p className={`${ active === label ? 'active' :''} p-2 pb-1 lefttxt`} onClick={()=>setActive(label)}>{label}</p>
        </div>
    )
}

export default Title
