import { FaRegNewspaper } from 'react-icons/fa';
import moment from 'moment';


export default {
    name: `event`,
    type: `document`,
    title: `Timeline Event`,
    icon: FaRegNewspaper,
    preview: {
        select: {
            title: `heading`,
            subtitle: `date`,
        },
        prepare(selection) {
            const { title, subtitle } = selection;
            const date = moment.utc(subtitle);
            return {
                title: title,
                subtitle: date.format(`MMMM Do, YYYY`),
            }
        }
    },
    fields: [
      {
        name: `heading`,
        type: `string`,
        title: `Heading`,
        description: `What happened? - the short version`,
      },
      {
          title: `Date`,
          description: `When did it occur?`,
          name: `date`,
          type: `date`,
          validation: Rule => Rule.required(),
      },
      {
          title: `Details`,
          description: `Further information on the event`,
          name: `details`,
          type: `richText`,
      },
      {
          title: `Source`,
          description: `Where was this published`,
          name: `source`,
          type: `source`
      },
      {
         name: `author`,
         title: `Author`,
        description: `Who added this event?`,
         type: `reference`,
         to: [
            {
                type: `author`,
            }
         ],
      },
    ],
    orderings: [
        {
            title: `Event date (recent => old) `,
            name: `eventDateDesc`,
            by: [
                {field: `date`, direction: `desc`}
            ],
        },
        {
            title: `Event date (old => recent)`,
            name: `eventDateDesc`,
            by: [
                {field: `date`, direction: `asc`}
            ],
        },
    ],
}
