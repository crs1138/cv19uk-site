# CV19-UK-Timeline - Changelog

This is a list of changes applied to the [CV19-UK-Timeline](https://cv19uk.planxdesign.eu)
project. The changelog is following [Semantic Verisoning](https://semver.org/)

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