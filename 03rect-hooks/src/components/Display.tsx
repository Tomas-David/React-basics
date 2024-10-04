import React from "react";
import classes from "./Display.module.css"


type DisplayProps = {
    show: string
}

const Display: React.FC<DisplayProps> = ({show}) =>(
    <div className={classes.display}>
        {show}
    </div>
)

export default Display