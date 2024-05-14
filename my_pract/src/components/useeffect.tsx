import React, {useState, useEffect} from 'react';

function Effect(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1) 
        },1000)
    },[])

    return(
        <div>
            <h1> Count : {count}</h1>
        </div>
    )
}

export default Effect