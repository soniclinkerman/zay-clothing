import React from "react"
import "./menu-item.scss"

const MenuItem = ({image, title, size}) => {
    return(
        <div className={`${size} menu-item`}>
            <div className="background-image"
            style={{backgroundImage: `url(${image})`}}/>
        
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>  
    </div>
    )
}

export default MenuItem
