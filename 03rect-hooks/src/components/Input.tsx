import React, { useRef } from "react";

type InputProps = {
    initial: string
    changeAction: (value: string) => void
}

const Input: React.FC<InputProps> = ({initial, changeAction}) =>{
    const inputRef = useRef<HTMLInputElement>(null)

    return(
    <div>
        <input 
            ref={inputRef}
            type="text"
            placeholder={initial}
            onChange={(e) => console.log(e.currentTarget.value) }
            onInput={(e) => console.log(e.currentTarget.value) }

        />
        <button  onClick={() => changeAction(inputRef.current?.value != undefined ? inputRef.current.value : "Zadejte hodnotu")}>Change</button>
    </div>
    )
}

export default Input