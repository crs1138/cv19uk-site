import { useState, useEffect } from 'react';
import sanityClient from '@sanity/client';
import { fetchAllQuery } from './Queries';

function useEvents(query = fetchAllQuery) {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect( () => {

        const client = sanityClient({
            projectId: `he2py649`,
            dataset:   `production`,
        });

        async function fetchEvents() {
            const response = await client.fetch( query )
    
            setEvents(response);
            setLoading(false);
        }

        fetchEvents();
    }, [query]);

    return [events, loading];
}
export { useEvents };