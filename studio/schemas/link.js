export default {
    name: `link`,
    type: `object`,
    title: `URL Link`,
    fields: [
        {
            name: `title`,
            type: `string`,
            title: `URL title`,
        },
        {
            name: `url`,
            type: `url`,
            title: `URL`,
        },
        {
            name: `blank`,
            type: `boolean`,
            title: `Blank`,
            description: `Open in new window?`,
        },
    ],
}