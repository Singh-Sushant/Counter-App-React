import { useState } from "react";
import { Button } from "../components/Button"
import { Message } from "../components/Message"
export const CounterPage=()=>{
    
    const [count , setCount] = useState(0);

    const updateCount=(val)=>{
        if(val ==='+')
        setCount(count+1);
        else{
            setCount(count-1);
        }
        console.log(count);
        
        
    }
    return(
        <div className="container">
            <Message classname='alert alert-info' msg='COUNTER APP'/>
            <Message value={count} classname='alert alert-success' msg='Counter Value is '/>
            <Button fn={updateCount} classname = 'btn btn-success me-2 ' val='+'/>
            <Button fn={updateCount} classname = 'btn btn-danger ' val ='-'/>

        </div>
    )
}