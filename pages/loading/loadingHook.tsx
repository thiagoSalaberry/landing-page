import { useEffect, useState } from "react";
export function loadingHook(id:string) {
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const start = () => {
        setData(false);
        setLoading(true);
        setError(false);
        setTimeout(() => {
        if (Math.random() >  0.5) {
            setError(true);
        } else {
            setData(true);
        }
        setLoading(false);
        }, Math.floor(1000 + Math.random() * 1000)); // random delay between 1 and 3 seconds
    };
    useEffect(()=>{
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if(Object.keys(data).length == 0) throw new Error;
                setData(data)
            })
            .catch(() => setError(true))
            .finally(()=>setLoading(false))
    }, [id]);
    return { data, loading, error}
    return {
        data,
        loading,
        error,
        start
    }
}