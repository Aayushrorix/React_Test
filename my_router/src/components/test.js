import {useState} from 'react';


const B = ({count, setCount}) => {
    return (
        <>
        
        <h1>Count : {count}</h1>
        <button onClick={()=>(setCount(count+1))}> Increase </button>
        </>
    )
}

const A = () => {
    const [count, setCount] = useState(0)

    return (
        <B count={count} setCount={setCount}/>
    )
}


export default A;