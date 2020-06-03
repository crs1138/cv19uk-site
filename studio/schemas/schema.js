// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import richDate from 'part:@sanity/form-builder/input/rich-date/schema';


import siteSettings from './siteSettings';
import event from './event';
import author from './author';
import richText from './richText';
import figure from './figure';
import link from './link';
import source from './source';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    siteSettings,
    event,
    author,
    richText,
    richDate,
    figure,
    link,
    source,
  ])
})
