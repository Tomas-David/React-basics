import React, { useId, useState } from "react";
import classes from "./InputNuber.module.css"

type InputNumberProps = {
    label : string,
    defaultValue: number,
    onChange: (value: number) => void
}


const InputNumber: React.FC<InputNumberProps> = ({label, defaultValue, onChange}) => {

    const [value, setValue] = useState<number>(defaultValue)
    const id = useId()
    const InputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(Number(e.target.value) >= 0)
            setValue(Number(e.target.value))
    }


    return(
        <div className={classes.wrapper}>
            <label htmlFor={id} >{label}</label>
            <input 
                type="range"
                value={value}
                onChange={InputHandler}
                id={id}
                max={1000}
                min={0}
                className={
                    value <= 250 ? classes.rainbowRangeGreen : value <= 500 ? classes.rainbowRangeBlue : value <= 900 ? classes.rainbowRangeOrange: classes.rainbowRangeRed
                  }
            />
            <span>{value}</span>
            <button className={classes.inputBtn} onClick={() => {onChange(value)}}>Odeslat</button>
        </div>
        
    )
}


export default InputNumber