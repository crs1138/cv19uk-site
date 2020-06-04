import { FaUserSecret } from 'react-icons/fa';

export default {
    name: `author`,
    type: `document`,
    title: `Author`,
    icon: FaUserSecret,
    fields: [
        {
            name: `name`,
            type: `string`,
            title: `Name`
        },
        {
            name: `bio`,
            type: `richText`,
            title: `Biography`,
        },
        {
            name: `image`,
            type: `figure`,
            title: `Image`,
        },
    ],
}