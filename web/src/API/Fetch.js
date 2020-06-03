import { useState, useEffect } from 'react';
import mySanityClient from '../sanityClient';
import { fetchAllQuery, fetchSiteSettings } from './Queries';

function useEvents(query = fetchAllQuery) {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect( () => {

        async function fetchEvents() {
            const response = await mySanityClient.fetch( query );
    
            setEvents(response);
            setLoading(false);
        }

        fetchEvents();
    }, [query]);

    return [events, loading];
}

function useSettings(query = fetchSiteSettings) {
    const [settings, setSettings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {

        async function fetchSettings() {
            const response = await mySanityClient.fetch( query );

            setSettings(response);
            setLoading(false);
        }

        fetchSettings();
    }, [query]);

    return [settings, loading];
}

export { useEvents, useSettings };