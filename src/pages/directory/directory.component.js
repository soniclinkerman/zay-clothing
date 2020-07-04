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
                {sections.map(({id, ...otherSectionProps}) => {
                    console.log(otherSectionProps)
                    return(
                    <MenuItem key={id} {...otherSectionProps}
                    // title={title}
                    // image={imageUrl}
                    // size={size}
                    // link={linkUrl}
                    />
                    )
                })}

            </div>
        )
    }
}

export default Directory
