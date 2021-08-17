import {useState, useEffect} from "react";

export const useRequestApi = ({api}) => {

    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState();
    const [data, setData] = useState();

    const request = async (...rest) => {

        setLoading(true);
        const [error, data] = await api(...rest);

        if (error) {
            setError(error);
        }

        if (data) {
            setData(data);
        }

        setLoading(false);
    }

    return {

        isLoading,
        isError,
        data,
        request,
    }
}