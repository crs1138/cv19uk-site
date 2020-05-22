/**
 * RichText Block
 * @typedef {Array} Block
 * 
 * An event data type
 * @typedef {Object} Helpers~regroupEvents~Event
 * @property {String} _id     Unique ID of the event
 * @property {String} date    Date as defined by the ISO 8601 format with 
 *                            complete date plus hours, minutes and seconds
 * @property {String} heading The event's heading
 * @property {Block}  details Formatted text 
 */

/**
 * @exports Helpers Set of helping functions
 */
const Helpers = {
    /**
     * Converts month's number into month's name
     * @function
     * @param {Number} month Numeric representation of a month (1-12)
     * 
     * @returns {(String|undefined)} Name of the months for parameter in a range 1-12 and `undefined` for any other 
     *                               number
     */
    getMonthName: (month) => {
        const monthsOfYear = [
            `January`,
            `February`,
            `March`,
            `April`,
            `May`,
            `June`,
            `July`,
            `August`,
            `September`,
            `October`,
            `November`,
            `December`
        ];
        return `${monthsOfYear[month-1]}`;
    },
    /**
     * Regroups an array of events, so they are grouped by year and months
     * @function
     * @param {...Helpers~regroupEvents~Event} events Takes an array of event objects. Each object must have its property date
     * 
     * @returns {Array} Returns an array of grouped events by years and months
     */
    regroupEvents: (events) => {
        const groupedEventsObj = events.reduce( (groups, event) => {
            const {date} = event;
            const year = date.split('-')[0];
            const month = date.split('-')[1];
            const yearMonth = `${year}-${month}`;
    
            if( !groups[yearMonth] ) {
                groups[yearMonth] = [];
            }
            groups[yearMonth].push(event);
    
            return groups;
        }, {});
    
        const groupedEventsArr = [];
        for ( const yearMonth in groupedEventsObj ) {
            const date = yearMonth.split(`-`);
            const label = {
                month: Helpers.getMonthName(date[1]),
                year: date[0]
            }
            const group = {
                label,
                events: groupedEventsObj[yearMonth]
            };
            groupedEventsArr.push(group);
        }
        return groupedEventsArr;
    }
};

export default Helpers;