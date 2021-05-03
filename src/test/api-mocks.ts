export const mocks = {
    '/lol/platform/v3/champion-rotations': {
        'freeChampionIds': [
            14,
            34,
            37,
            38,
            74,
            77,
            85,
            96,
            120,
            145,
            150,
            246,
            497,
            876,
            887
        ],
        'freeChampionIdsForNewPlayers': [
            18,
            81,
            92,
            141,
            37,
            238,
            19,
            45,
            25,
            64
        ],
        'maxNewPlayerLevel': 10
    },
    '/lol/clash/v1/players/by-summoner/{summonerId}': [
        {
            'summonerId': 'Fj_jrhi6l1v_-JPFE6fjyUQvhkTjEnid21N3wuzRN6k',
            'teamId': '39a85060-1ccc-499c-a656-bdf2d2b52a80',
            'position': 'FILL',
            'role': 'CAPTAIN'
        },
        {
            'summonerId': 'Fj_jrho6l1v_-JPFE6fjyUQvhkTjEnid21N3wazRN8k',
            'teamId': '39a85060-1ccc-499c-a656-bdf2d2b52a80',
            'position': 'MID',
            'role': 'MEMBER'
        },
        {
            'summonerId': 'Fj_jrhi6l1v_-JPFE0fjyUQvhkTjEnid21N9wuzRN6k',
            'teamId': '39a85060-1ccc-499c-a656-bdf2d2b52a80',
            'position': 'BOTTOM',
            'role': 'MEMBER'
        }
    ],
    '/lol/clash/v1/teams/{teamId}': {
        'id': '39a85060-1ccc-499c-a656-bdf2d2b52a80',
        'tournamentId': 2101,
        'name': 'bichota chota gaming',
        'iconId': 12,
        'tier': 1,
        'captain': 'Fj_jrhi6l1v_-JPFE6fjyUQvhkTjEnid21N3wuzRN6k',
        'abbreviation': 'uwu',
        'players': [
            {
                'summonerId': 'SCmRCQI17LXqKdlkzKQ7b1ra9yOCaS_wcE_wceGQlZ5L7w',
                'position': 'FILL',
                'role': 'MEMBER'
            },
            {
                'summonerId': 'xQeBlevGlqrArBRXW-NSmRKSfB3ChtG6e9H9a3--yG1IEQ',
                'position': 'FILL',
                'role': 'MEMBER'
            },
            {
                'summonerId': 'dp-U8VBQtyVhAgUID-stOBS3nMlTKqCp98RzmEhDnfTSRA',
                'position': 'JUNGLE',
                'role': 'MEMBER'
            },
            {
                'summonerId': 'En-yY5Zv7oGqlIqhZJmx1nVIemc67cnWRyCf0kzADULM',
                'position': 'TOP',
                'role': 'MEMBER'
            },
            {
                'summonerId': 'Fj_jrhi6l1v_-JPFE6fjyUQvhkTjEnid21N3wuzRN6k',
                'position': 'FILL',
                'role': 'CAPTAIN'
            }
        ]
    },
    '/lol/clash/v1/tournaments':[
        {
            'id': 2141,
            'themeId': 24,
            'nameKey': 'msi2021',
            'nameKeySecondary': 'day_2',
            'schedule': [
                {
                    'id': 2121,
                    'registrationTime': 1620601200000,
                    'startTime': 1620608400000,
                    'cancelled': false
                }
            ]
        },
        {
            'id': 2161,
            'themeId': 24,
            'nameKey': 'msi2021',
            'nameKeySecondary': 'day_3',
            'schedule': [
                {
                    'id': 2141,
                    'registrationTime': 1622329200000,
                    'startTime': 1622336400000,
                    'cancelled': false
                }
            ]
        },
        {
            'id': 2121,
            'themeId': 24,
            'nameKey': 'msi2021',
            'nameKeySecondary': 'day_1',
            'schedule': [
                {
                    'id': 2101,
                    'registrationTime': 1620514800000,
                    'startTime': 1620522000000,
                    'cancelled': false
                }
            ]
        },
        {
            'id': 2101,
            'themeId': 14,
            'nameKey': 'shurima',
            'nameKeySecondary': 'day_4',
            'schedule': [
                {
                    'id': 2081,
                    'registrationTime': 1619996400000,
                    'startTime': 1620003600000,
                    'cancelled': false
                }
            ]
        },
        {
            'id': 2142,
            'themeId': 24,
            'nameKey': 'msi2021',
            'nameKeySecondary': 'day_4',
            'schedule': [
                {
                    'id': 2122,
                    'registrationTime': 1622415600000,
                    'startTime': 1622422800000,
                    'cancelled': false
                }
            ]
        }
    ],
    '/lol/clash/v1/tournaments/by-team/{teamId}':{
        'id': 2101,
        'themeId': 14,
        'nameKey': 'shurima',
        'nameKeySecondary': 'day_4',
        'schedule': [
            {
                'id': 2081,
                'registrationTime': 1619996400000,
                'startTime': 1620003600000,
                'cancelled': false
            }
        ]
    },
    '/lol/clash/v1/tournaments/{tournamentId}':{
        'id': 2141,
        'themeId': 24,
        'nameKey': 'msi2021',
        'nameKeySecondary': 'day_2',
        'schedule': [
            {
                'id': 2121,
                'registrationTime': 1620601200000,
                'startTime': 1620608400000,
                'cancelled': false
            }
        ]
    }
}