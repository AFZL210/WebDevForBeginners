import { useState, useEffect } from "react";

// instead of hardcoding the axios request we will pass the request from
// component who needs it -- so we can set header, and other property easily
const useQuery = (request) => {
    const [response, setResponse] = useState({});

    useEffect(() => {
        request.then((fetchResponse) => {
            setResponse(fetchResponse.data);
        })
    }, [])

    return { response }
}

export default useQuery;