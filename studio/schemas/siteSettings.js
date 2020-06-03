export default {
    name: `siteSettings`,
    type: `document`,
    title: `Site Settings`,
    __experimental_actions: [`update`, /* `create`, `delete`, */ `publish`],
    fields: [
        {
            title: `Site's main heading`,
            name: `title`,
            type: `string`,
        },
        {
            title: `Introduction text`,
            name: `description`,
            type: `richText`,
            description: `Describe the website, the reason behind creating it, who it is for and what the visitors will find here`,
        },
        {
            title: `Footer content`,
            name: `footer`,
            type: `richText`,
            description: `Content of the footer`,
        },
    ],
}