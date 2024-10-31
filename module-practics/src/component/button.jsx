import { useEffect, useState } from "react";

function Button() {
    let name = "chandu"
    let surname = "kumar"

    
    let [counter, setcounter] = useState(0);
    const Addvalue = () => {
        if (counter < 20) {
            
            console.log("clicked", {counter})
            counter = counter + 1;
            setcounter(counter)
        }
        
    }
    
    const removeValue = () => {
        console.log("Clicked", { counter });
        if (counter > 0) { 
            setcounter(counter - 1);
        }
        
    }
    function sur() {
        return <>
            <p>My name is {name} {surname} {counter} </p>
            
        </> 
    }
    
    
    return (
        <div>
            {sur()} 
            <button onClick={removeValue}>Remove Value {counter}</button>
            <button onClick={Addvalue}>Add Value {counter}</button>
            <p>Number: {counter}</p>
        </div>
    );
}
export default Button;