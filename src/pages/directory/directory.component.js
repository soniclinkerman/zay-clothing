import React, { Component } from "react"
import {sections} from "../../directory.data"
import MenuItem from "../menu-item/menu-item.component";
class Directory extends Component{
    constructor(){
        super();
        this.state = {}
    }

    render(){

        return(
            <div className="directory-menu">
                {sections.map(({id,title,imageUrl, size}) => {
                    return(
                    <MenuItem
                    key={id}
                    title={title}
                    image={imageUrl}
                    size={size}
                    // link={x.linkUrl}
                    />
                    )
                })}

            </div>
        )
    }
}

export default Directory
