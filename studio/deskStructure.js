import S from '@sanity/desk-tool/structure-builder';
import { FaCogs } from 'react-icons/fa';

export default () =>
    S.list()
        .title(`Content`)
        .items([
            ...S.documentTypeListItems()
                .filter( listItem => ![`siteSettings`].includes(listItem.getId() )),
            // Add visual divider
            S.divider(),
            // The siteSetting singleton starts here
            S.listItem()
                .title(`Site settings`)
                .icon(FaCogs)
                .child(
                    S.editor()
                        .schemaType(`siteSettings`)
                        .documentId(`siteSettings`)
                ),
        ])