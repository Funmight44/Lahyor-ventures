import { useEffect, useState } from "react";


//npx json-server --watch data/db.json --port 4000

const UseFetch = (endPoints) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await fetch(endPoints)
                if (!response) throw new Error('Unable to fetch')
                const data = await response.json()
                setData(data);
                setLoading(false)
            } catch (error) {
                setError(error.message)
            }
        }
        getProducts();
    }, [endPoints])



    return { error, loading, data };
}

export default UseFetch;

