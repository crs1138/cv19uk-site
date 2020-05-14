import { useState, useEffect } from 'react';
import mySanityClient from '../sanityClient';
import { fetchAllQuery } from './Queries';

function useEvents(query = fetchAllQuery) {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect( () => {

        async function fetchEvents() {
            const response = await mySanityClient.fetch( query )
    
            setEvents(response);
            setLoading(false);
        }

        fetchEvents();
    }, [query]);

    return [events, loading];
}
export { useEvents };