import React from 'react'

export function useDebounce(value:string, delay:number){
    const[debouncedValue, setDebouncedValue]= React.useState(value)

    React.useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value)
        }, delay)
    return()=>{
        clearTimeout(handler)
    }
    },[value, delay])

    return debouncedValue



}

//sets debounced value to changed value everytime usestate is called, the call is based on the set delay

//efficiency so that youu dont push to db every ms.     