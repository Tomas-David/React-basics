
type SequenceProps = {
    first : number 
    step: number
    count: number
    isDone: () => void
}


const Sequence:React.FC<SequenceProps> = ({first = 1, step = 3, count = 10, isDone}) => {



    const data: Array<React.ReactNode> = []

    for (let i = 0; i <= count; i++) {
        data.push(<li key={i}>{first + i * step}</li>)
    }

    isDone()

    return(
        <div>
           <ul>
            {data} 
           </ul> 
        </div>
    )
}

export default Sequence