import { useState, useEffect } from "react"

// custom React hook to keep budgets/expenses even when the page refreshes
export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        // there exists something in local storage, so let's use that
        if(jsonValue !== null) return JSON.parse(jsonValue)

        // otherwise, use the default value passed into useState(), which can either be a function or a regular value
        if(typeof defaultValue === 'function'){
            return defaultValue()
        }else{
            return defaultValue
        }
    })

    // whenever any of the values of key or value change, update local storage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}