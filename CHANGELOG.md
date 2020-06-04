# CV19-UK-Timeline - Changelog

This is a list of changes applied to the [CV19-UK-Timeline](https://cv19uk.planxdesign.eu)
project. The changelog is following [Semantic Verisoning](https://semver.org/)

## [1.1.3] (2020-06-04)

### Changed

* license from GPL3 to MIT
* rewrite the README following tips from https://dev.to/sylwiavargas/recipe-for-a-good-readme-3m6j

## [1.1.2] (2020-06-04)

### Removed

* cleaned up unnecessary package-lock.json files - we use Yarn

## [1.1.1] (2020-06-04)

### Security

* Upgrades the dependencies of the @sanity/core project

## [1.1.0] (2020-06-04)

### Changed

* the structure of the whole repo to monorepo containing the Sanity Studio

### Fixed

* the OpenGraph URL and Twitter Card URL

## [1.0.0-rc.2] (2020-05-23)

### Added

* added CNAME file

## [1.0.0-rc.1] (2020-05-23)

### Added

* added contribution guide

### Fixed

* fixed typo in the headings
  
## [0.7.0] (2020-05-23)

### Added

* meta tags for the Facebook OpenGraph and Twitter cards
  
## [0.6.0] (2020-05-23)

### Added

* position sticky for the labels of the months/years

## [0.5.6] (2020-05-22)

### Fixed

* fix the missing serializer for the external links in the `details` field

## [0.5.5] (2020-05-22)

### Changed

* changed the posibility of making the links in the `details` field external

## [0.5.4] (2020-05-22)

### Changed

* wraps long links in the sources meta data onto new lines.

## [0.5.3] (2020-05-22)

### Fixed

* the date output was fixed on the backend level. This meant changes to the way
  the date is processed on the frontend. I, now again, deal with a date as a
  simple string in format YYYY-MM-DD.

## [0.5.2] (2020-05-17)

### Fixed

* the days were off by a day due to the database scheme and frontend working in
  different local times.

## [0.5.1] (2020-05-17)

### Changed

* enabled use of CDN for Sanity requests

## [0.5.0] (2020-05-17)

### Added

* favicon for various platforms
* automated tests for Helpers functions
* automated test for the App component

## [0.4.1] (2020-05-17)

### Fixed

* the colour of the links in the footer

## [0.4.0] (2020-05-17)

### Added

* components for the header and footer, also necessary hooks to fetch data
  from the db and update the App's state
* GPLv3 license
* image for the App's heading

### Changed

* liberalized the App's style library, so the styles defined there are 
  accessible through the whole application
* changed the accent colour to match the image in the heading

## [0.3.1] (2020-05-15)

### Changed

* set the text alignment to the right for narrow screen.

## [0.3.0] (2020-05-15)

### Added

* added a component for listing the sources

### Changed

* changed the event's sources to accommodate multiple values.
* changed the display of images inside of the event's details to stay within the
  boundaries of the description and to stop being cropped.
* changed the order of the meta values and the description, so the date stays
  above the description and the author of each event listing together with
  sources appear below.
* improved readability by increasing the text size for bigger screens and by
  making the text darker
* set the HTML document title.

## [0.2.0] (2020-05-14)

### Added

* Added spinner whilst loading data
* Added _source_ and _published by_ output to the events list
* Added _details_ field to the events list

## [0.1.1] (2020-05-14)

### Added

* Added the settings for deployment on GitHub pages
* Compiled for production

## [0.1.0] (2020-05-14)

### Added

* Added the React frontend application structure and styling
* Added the Timeline component
* Added API to fetch data from Sanity.io