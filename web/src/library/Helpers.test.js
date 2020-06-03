import Helpers from './Helpers';

test(`Gets name of the month 1 to be January`, () => {
    expect(Helpers.getMonthName(1)).toBe(`January`);
});

test(`Gets name of the month 2 NOT to be January`, () => {
    expect(Helpers.getMonthName(2)).not.toBe(`January`);
});

test(`Regroup a list of events by month and year`, () => {
    const events = [
        {
          _id: `1`,
          date: `2019-12-30T23:00:00.000Z`,
          heading: `China alerts World Health Organisation to new virus.`,
        },
        {
          _id: `2`,
          date: `2020-01-23T23:00:00.000Z`,
          heading: `Study reveals a third of China’s patients require intensive care.`,
          details: `Chinese government shuts down city of Wuhan.`,
        },
        {
          _id: `3`,
          date: `2020-01-24T23:00:00.000Z`,
          heading: `Boris Johnson misses first COBRA meeting.`,
        },
    ];
    const expectedGroupedEvents = [
        {
            label: {month: `December`, year: `2019`},
            events: [
                {
                    _id: `1`,
                    date: `2019-12-30T23:00:00.000Z`,
                    heading: `China alerts World Health Organisation to new virus.`,
                }
            ]
        },
        {
            label: {month: `January`, year: `2020`},
            events: [
                {
                    _id: `2`,
                    date: `2020-01-23T23:00:00.000Z`,
                    heading: `Study reveals a third of China’s patients require intensive care.`,
                    details: `Chinese government shuts down city of Wuhan.`,
                },
                {
                    _id: `3`,
                    date: `2020-01-24T23:00:00.000Z`,
                    heading: `Boris Johnson misses first COBRA meeting.`,
                },
            ]
        },
    ]
    expect(Helpers.regroupEvents(events)).toMatchObject(expectedGroupedEvents);
});