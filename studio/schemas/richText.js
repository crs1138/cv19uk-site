export default {
    name: `richText`,
    title: `Content`,
    type: `array`,
    of: [
        {
            type: `block`,
            styles: [],
            marks: {
                annotations: [
                    {
                        name: `link`,
                        type: `object`,
                        title: `External link`,
                        fields: [
                            {
                                name: `href`,
                                type: `url`,
                                title: `URL`,
                            },
                            {
                                name: `blank`,
                                type: `boolean`,
                                title: `Open in a new tab`,
                                description: `https://css-tricks.com/use-target_blank/`,
                            }
                        ]
                    }
                ]
            },
        },
        {
            type: `figure`,
        },
    ]
}