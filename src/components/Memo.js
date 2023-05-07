import { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import Child from "./Child";

const Memo = () =>{
    const dummyDetails =[
        {
        "name":"saleem",
        "age": 20,
    },
        {
        name:"saleem kahn",
        age: 21,
    },
        {
        name:"saleem asdas",
        age: 22,
    }
];
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((prev) => prev +1);
    }

    const decrement = () => setCount((prev)=> prev-1);

    const handleChange = useCallback(() => {
        // Function body
        alert('useCallback called');
    },[/* Dependencies array */]);

    const handleData = () => {
         // Update dummyDetails using the spread operator
         const updatedDetails = [
            ...dummyDetails,
            {
                name: "new name",
                age: 23
            }
        ];
        console.log(updatedDetails);
    }
    const memoizedDetails = useMemo(()=>dummyDetails,[]);

    return (
        <div>
            <h2>Count is : {count}</h2>
            <button className="btn btn-primary" onClick={increment}>Increment</button>
            <button onClick={decrement} className="btn btn-primary">decrement</button>
            <Child onChange={handleChange} details = {memoizedDetails} />
            <button className="btn btn-primary" onClick={()=>setCount(0)}>Reset</button>
            <button className="btn btn-primary" onClick={handleData} >change data</button>
        </div>
    );
}

export default Memo;