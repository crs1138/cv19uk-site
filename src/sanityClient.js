import sanityClient from '@sanity/client';

const mySanityClient = sanityClient({
    projectId: `he2py649`,
    dataset:   `production`,
    useCdn:    true,
});

export default mySanityClient;