const timeCriterias = [
    {
        id: 1,
        name: 'Time range',
        children: [
            {
                id: 1,
                name: 'Last 30 min',
                children: [
                    {
                        id: 1,
                        name: 'None',
                    },
                    {
                        id: 2,
                        name: 'By every 5 minutes',
                    },
                ],
            },
            {
                id: 2,
                name: 'Last hour',
                children: [
                    {
                        id: 1,
                        name: 'None',
                    },
                    {
                        id: 2,
                        name: 'By every 5 minutes',
                    },
                    {
                        id: 3,
                        name: 'By every 30 minutes',
                    },
                ],
            },
            {
                id: 3,
                name: 'Last 2 hours',
                children: [
                    {
                        id: 1,
                        name: 'By every 5 minutes',
                    },
                    {
                        id: 2,
                        name: 'By every 30 minutes',
                    },
                    {
                        id: 3,
                        name: 'By hour',
                    },
                ],
            },
            {
                id: 4,
                name: 'Last 4 hours',
                children: [
                    {
                        id: 1,
                        name: 'By every 30 minutes',
                    },
                    {
                        id: 2,
                        name: 'By hour',
                    },
                ],
            },
            {
                id: 5,
                name: 'Last 8 hours',
                children: [
                    {
                        id: 1,
                        name: 'By every 30 minutes',
                    },
                    {
                        id: 2,
                        name: 'By hour',
                    },
                ],
            },
            {
                id: 5,
                name: 'Last 8 hours',
                children: [
                    {
                        id: 1,
                        name: 'By every 30 minutes',
                    },
                    {
                        id: 2,
                        name: 'By hour',
                    },
                ],
            },
            {
                id: 6,
                name: 'Last 16 hours',
                children: [
                    {
                        id: 1,
                        name: 'By every 30 minutes',
                    },
                    {
                        id: 2,
                        name: 'By hour',
                    },
                ],
            },
            {
                id: 7,
                name: 'Last 24 hours',
                children: [
                    {
                        id: 1,
                        name: 'By every 30 minutes',
                    },
                    {
                        id: 2,
                        name: 'By hour',
                    },
                ],
            },
            {
                id: 8,
                name: 'Yesterday',
                children: [
                    {
                        id: 1,
                        name: 'By every 30 minutes',
                    },
                    {
                        id: 2,
                        name: 'By hour',
                    },
                ],
            },
            {
                id: 9,
                name: 'Today',
                children: [
                    {
                        id: 1,
                        name: 'By every 30 minutes',
                    },
                    {
                        id: 2,
                        name: 'By hour',
                    },
                ],
            },
            {
                id: 10,
                name: 'Last 7 days',
                children: [
                    {
                        id: 1,
                        name: 'By hour',
                    },
                    {
                        id: 2,
                        name: 'By day',
                    },
                ],
            },
            {
                id: 11,
                name: 'Last 14 days',
                children: [
                    {
                        id: 1,
                        name: 'By hour',
                    },
                    {
                        id: 2,
                        name: 'By day',
                    },
                ],
            },
            {
                id: 12,
                name: 'Last 30 days',
                children: [
                    {
                        id: 1,
                        name: 'By day',
                    },
                    {
                        id: 2,
                        name: 'By week',
                    },
                    {
                        id: 3,
                        name: 'By day of the week',
                    },
                ],
            },
            {
                id: 13,
                name: 'Last week',
                children: [
                    {
                        id: 1,
                        name: 'By hour',
                    },
                    {
                        id: 2,
                        name: 'By week',
                    },
                ],
            },
            {
                id: 14,
                name: 'Last 2 weeks',
                children: [
                    {
                        id: 1,
                        name: 'By hour',
                    },
                    {
                        id: 2,
                        name: 'By day of the week',
                    },
                    {
                        id: 3,
                        name: 'By day',
                    },
                    {
                        id: 4,
                        name: 'By week',
                    },
                ],
            },
            {
                id: 15,
                name: 'Last month',
                children: [
                    {
                        id: 1,
                        name: 'By day of the week',
                    },
                    {
                        id: 2,
                        name: 'By day',
                    },
                    {
                        id: 3,
                        name: 'By week ',
                    },
                ],
            },
            {
                id: 16,
                name: 'Last 2 months',
                children: [
                    {
                        id: 1,
                        name: 'By day of the week',
                    },
                    {
                        id: 2,
                        name: 'By day',
                    },
                    {
                        id: 3,
                        name: 'By week ',
                    },
                ],
            },
            {
                id: 17,
                name: 'Last 6 months',
                children: [
                    {
                        id: 1,
                        name: 'By day of the week',
                    },
                    {
                        id: 2,
                        name: 'By day',
                    },
                ],
            },
            {
                id: 18,
                name: 'Last year',
                children: [
                    {
                        id: 1,
                        name: 'By week',
                    },
                    {
                        id: 2,
                        name: 'By month',
                    },
                ],
            },
            {
                id: 19,
                name: 'Last 2 years',
                children: [
                    {
                        id: 1,
                        name: 'By week',
                    },
                    {
                        id: 2,
                        name: 'By month',
                    },
                    {
                        id: 3,
                        name: 'By year',
                    },
                ],
            },
            {
                id: 20,
                name: 'Last 5 years',
                children: [
                    {
                        id: 1,
                        name: 'By month',
                    },
                    {
                        id: 2,
                        name: 'By year',
                    },
                ],
            },
            {
                id: 21,
                name: 'Custom time range',
                children: [
                    {
                        id: 1,
                        name: 'By hour',
                    },
                    {
                        id: 2,
                        name: 'By day',
                    },
                    {
                        id: 3,
                        name: 'By week',
                    },
                    {
                        id: 4,
                        name: 'By month',
                    },
                    {
                        id: 5,
                        name: 'By year',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        name: 'Period over period',
        children: [
            {
                id: 1,
                name: 'This 30 min over last 30 min',
                children: [
                    {
                        id: 1,
                        name: 'None',
                    },
                    {
                        id: 2,
                        name: 'By every 5 minutes',
                    },
                ],
            },
            {
                id: 2,
                name: 'This hour over last hour',
                children: [
                    {
                        id: 1,
                        name: 'By every 5 minutes',
                    },
                    {
                        id: 2,
                        name: 'By every 30 minutes',
                    },
                ],
            },
            {
                id: 3,
                name: 'This 2 hours over last 2 hours',
                children: [
                    {
                        id: 1,
                        name: 'By every 5 minutes',
                    },
                    {
                        id: 2,
                        name: 'By every 30 minutes',
                    },
                    {
                        id: 3,
                        name: 'By hour',
                    },
                ],
            },
            {
                id: 4,
                name: 'This 4 hours over last 4 hours',
                children: [
                    {
                        id: 1,
                        name: 'By every 30 minutes',
                    },
                    {
                        id: 2,
                        name: 'By hour',
                    },
                ],
            },
            {
                id: 5,
                name: 'This 8 hours over last 8 hours',
                children: [
                    {
                        id: 1,
                        name: 'By every 30 minutes',
                    },
                    {
                        id: 2,
                        name: 'By hour',
                    },
                ],
            },
            {
                id: 6,
                name: 'This 16 hours over last 16 hours',
                children: [
                    {
                        id: 1,
                        name: 'By every 30 minutes',
                    },
                    {
                        id: 2,
                        name: 'By hour',
                    },
                ],
            },
            {
                id: 7,
                name: 'Last 24 hours over previuos 24 hours',
                children: [
                    {
                        id: 1,
                        name: 'By every 30 minutes',
                    },
                    {
                        id: 2,
                        name: 'By hour',
                    },
                ],
            },
            {
                id: 8,
                name: 'Today over yesterday',
                children: [
                    {
                        id: 1,
                        name: 'By every 30 minutes',
                    },
                    {
                        id: 2,
                        name: 'By hour',
                    },
                ],
            },
            {
                id: 9,
                name: 'Today over same day last week',
                children: [
                    {
                        id: 1,
                        name: 'By every 30 minutes',
                    },
                    {
                        id: 2,
                        name: 'By hour',
                    },
                ],
            },
            {
                id: 10,
                name: 'Yesterday over same day last week',
                children: [
                    {
                        id: 1,
                        name: 'By every 30 minutes',
                    },
                    {
                        id: 2,
                        name: 'By hour',
                    },
                ],
            },
            {
                id: 11,
                name: 'Last 7 days over previous 7 days',
                children: [
                    {
                        id: 1,
                        name: 'By hour',
                    },
                    {
                        id: 2,
                        name: 'By day',
                    },
                ],
            },
            {
                id: 12,
                name: 'This week over last week',
                children: [
                    {
                        id: 1,
                        name: 'By hour',
                    },
                    {
                        id: 2,
                        name: 'By day',
                    },
                ],
            },
            {
                id: 13,
                name: 'This week over same week last month',
                children: [
                    {
                        id: 1,
                        name: 'By hour',
                    },
                    {
                        id: 2,
                        name: 'By day',
                    },
                ],
            },
            {
                id: 14,
                name: 'Last 4 weeks over previous 4 weeks',
                children: [
                    {
                        id: 1,
                        name: 'By hour',
                    },
                    {
                        id: 2,
                        name: 'By day of the week',
                    },
                    {
                        id: 3,
                        name: 'By day',
                    },
                    {
                        id: 4,
                        name: 'By week',
                    },
                ],
            },
            {
                id: 15,
                name: 'This month over last month',
                children: [
                    {
                        id: 1,
                        name: 'By hour',
                    },
                    {
                        id: 2,
                        name: 'By day of the week',
                    },
                    {
                        id: 3,
                        name: 'By day',
                    },
                    {
                        id: 4,
                        name: 'By week',
                    },
                ],
            },
            {
                id: 16,
                name: 'This month over same month last year',
                children: [
                    {
                        id: 1,
                        name: 'By hour',
                    },
                    {
                        id: 2,
                        name: 'By day of the week',
                    },
                    {
                        id: 3,
                        name: 'By day',
                    },
                    {
                        id: 4,
                        name: 'By week',
                    },
                ],
            },
            {
                id: 17,
                name: 'Last 6 months over previous 6 months',
                children: [
                    {
                        id: 1,
                        name: 'By hour',
                    },
                    {
                        id: 2,
                        name: 'By day of the week',
                    },
                    {
                        id: 3,
                        name: 'By day',
                    },
                ],
            },
            {
                id: 18,
                name: 'Last 12 months over previous 12 months',
                children: [
                    {
                        id: 1,
                        name: 'By day',
                    },
                    {
                        id: 2,
                        name: 'By week',
                    },
                    {
                        id: 3,
                        name: 'By month',
                    },
                ],
            },
            {
                id: 19,
                name: 'This year over last year',
                children: [
                    {
                        id: 1,
                        name: 'By day',
                    },
                    {
                        id: 2,
                        name: 'By week',
                    },
                    {
                        id: 3,
                        name: 'By month',
                    },
                ],
            },
            {
                id: 20,
                name: 'This year over last 2 years',
                children: [
                    {
                        id: 1,
                        name: 'By week',
                    },
                    {
                        id: 2,
                        name: 'By month',
                    },
                    {
                        id: 3,
                        name: 'By year',
                    },
                ],
            },
            {
                id: 21,
                name: 'This year over last 3 years',
                children: [
                    {
                        id: 1,
                        name: 'By month',
                    },
                    {
                        id: 2,
                        name: 'By year',
                    },
                ],
            },
            {
                id: 22,
                name: 'This year over last 4 years',
                children: [
                    {
                        id: 1,
                        name: 'By month',
                    },
                    {
                        id: 2,
                        name: 'By year',
                    },
                ],
            },
            {
                id: 23,
                name: 'This year over last 5 years',
                children: [
                    {
                        id: 1,
                        name: 'By month',
                    },
                    {
                        id: 2,
                        name: 'By year',
                    },
                ],
            },
            {
                id: 24,
                name: 'This 2 years over previous 2 years ',
                children: [
                    {
                        id: 1,
                        name: 'By month',
                    },
                    {
                        id: 2,
                        name: 'By year',
                    },
                ],
            },
        ],
    },
]

const [selectedValue, setSelectedValue] = useState({
    timeCriterial: null,
    rangeSelection: null,
    aggregation: null,
})
