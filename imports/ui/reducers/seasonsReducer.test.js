jest.unmock('./seasonsReducer')

import seasonsReducer from './seasonsReducer'

describe('Seasons Reducer', () => {
    it('Set a season to state with no current seasons', () => {

        const state = {}

        const action = {
            type: 'SET_SEASON',
            payload: {
              year: 2015,
              season: 'spring',
              animes: [{
                  "id": 20725,
                  "title_romaji": "Kuroko no Basket 3rd Season",
                  "type": "TV",
                  "image_url_med": "http://anilist.co/img/dir/anime/med/20725-Vm6ZzEFvT6w3.jpg",
                  "image_url_sml": "http://anilist.co/img/dir/anime/sml/20725-Vm6ZzEFvT6w3.jpg",
                  "adult": false,
                  "popularity": 4001,
                  "title_japanese": "黒子のバスケ 3rd SEASON",
                  "title_english": "Kuroko's Basketball 3",
                  "synonyms": ["Kuroko no Basuke 3"],
                  "image_url_lge": "http://anilist.co/img/dir/anime/reg/20725-Vm6ZzEFvT6w3.jpg",
                  "airing_status": "finished airing",
                  "average_score": 8.3,
                  "total_episodes": 25,
                  "relation_type": null,
                  "role": null
              }, {
                  "id": 20931,
                  "title_romaji": "Death Parade",
                  "type": "TV",
                  "image_url_med": "http://anilist.co/img/dir/anime/med/20931-AWa51FoEzSs9.jpg",
                  "image_url_sml": "http://anilist.co/img/dir/anime/sml/20931-AWa51FoEzSs9.jpg",
                  "adult": false,
                  "popularity": 8273,
                  "title_japanese": "デス・パレード",
                  "title_english": "Death Parade",
                  "synonyms": [],
                  "image_url_lge": "http://anilist.co/img/dir/anime/reg/20931-AWa51FoEzSs9.jpg",
                  "airing_status": "finished airing",
                  "average_score": 8.2,
                  "total_episodes": 12,
                  "relation_type": null,
                  "role": null
              }, {
                  "id": 20799,
                  "title_romaji": "JoJo no Kimyou na Bouken: Stardust Crusaders - Egypt-hen",
                  "type": "TV",
                  "image_url_med": "http://anilist.co/img/dir/anime/med/20799-c780OcSAJeGH.jpg",
                  "image_url_sml": "http://anilist.co/img/dir/anime/sml/20799-c780OcSAJeGH.jpg",
                  "adult": false,
                  "popularity": 2158,
                  "title_japanese": "ジョジョの奇妙な冒険 スターダストクルセイダース エジプト編",
                  "title_english": "JoJo's Bizarre Adventure: Stardust Crusaders - Battle in Egypt",
                  "synonyms": ["Dai San Bu Kujo Jotaro: Mirai e no Isan"],
                  "image_url_lge": "http://anilist.co/img/dir/anime/reg/20799-c780OcSAJeGH.jpg",
                  "airing_status": "finished airing",
                  "average_score": 8.1,
                  "total_episodes": 24,
                  "relation_type": null,
                  "role": null
              }, {
                  "id": 20652,
                  "title_romaji": "Durarara!!x2 Shou",
                  "type": "TV",
                  "image_url_med": "http://anilist.co/img/dir/anime/med/20652-WVzT1gWTdkPt.png",
                  "image_url_sml": "http://anilist.co/img/dir/anime/sml/20652-WVzT1gWTdkPt.png",
                  "adult": false,
                  "popularity": 6210,
                  "title_japanese": "デュラララ!!×２ 承",
                  "title_english": "Durarara!! X2",
                  "synonyms": ["DRRR!! 2 Shou"],
                  "image_url_lge": "http://anilist.co/img/dir/anime/reg/20652-WVzT1gWTdkPt.png",
                  "airing_status": "finished airing",
                  "average_score": 8,
                  "total_episodes": 12,
                  "relation_type": null,
                  "role": null
              }]
            }
        }

        const expectedState = {
            'spring-2015': [{
                "id": 20725,
                "title_romaji": "Kuroko no Basket 3rd Season",
                "type": "TV",
                "image_url_med": "http://anilist.co/img/dir/anime/med/20725-Vm6ZzEFvT6w3.jpg",
                "image_url_sml": "http://anilist.co/img/dir/anime/sml/20725-Vm6ZzEFvT6w3.jpg",
                "adult": false,
                "popularity": 4001,
                "title_japanese": "黒子のバスケ 3rd SEASON",
                "title_english": "Kuroko's Basketball 3",
                "synonyms": ["Kuroko no Basuke 3"],
                "image_url_lge": "http://anilist.co/img/dir/anime/reg/20725-Vm6ZzEFvT6w3.jpg",
                "airing_status": "finished airing",
                "average_score": 8.3,
                "total_episodes": 25,
                "relation_type": null,
                "role": null
            }, {
                "id": 20931,
                "title_romaji": "Death Parade",
                "type": "TV",
                "image_url_med": "http://anilist.co/img/dir/anime/med/20931-AWa51FoEzSs9.jpg",
                "image_url_sml": "http://anilist.co/img/dir/anime/sml/20931-AWa51FoEzSs9.jpg",
                "adult": false,
                "popularity": 8273,
                "title_japanese": "デス・パレード",
                "title_english": "Death Parade",
                "synonyms": [],
                "image_url_lge": "http://anilist.co/img/dir/anime/reg/20931-AWa51FoEzSs9.jpg",
                "airing_status": "finished airing",
                "average_score": 8.2,
                "total_episodes": 12,
                "relation_type": null,
                "role": null
            }, {
                "id": 20799,
                "title_romaji": "JoJo no Kimyou na Bouken: Stardust Crusaders - Egypt-hen",
                "type": "TV",
                "image_url_med": "http://anilist.co/img/dir/anime/med/20799-c780OcSAJeGH.jpg",
                "image_url_sml": "http://anilist.co/img/dir/anime/sml/20799-c780OcSAJeGH.jpg",
                "adult": false,
                "popularity": 2158,
                "title_japanese": "ジョジョの奇妙な冒険 スターダストクルセイダース エジプト編",
                "title_english": "JoJo's Bizarre Adventure: Stardust Crusaders - Battle in Egypt",
                "synonyms": ["Dai San Bu Kujo Jotaro: Mirai e no Isan"],
                "image_url_lge": "http://anilist.co/img/dir/anime/reg/20799-c780OcSAJeGH.jpg",
                "airing_status": "finished airing",
                "average_score": 8.1,
                "total_episodes": 24,
                "relation_type": null,
                "role": null
            }, {
                "id": 20652,
                "title_romaji": "Durarara!!x2 Shou",
                "type": "TV",
                "image_url_med": "http://anilist.co/img/dir/anime/med/20652-WVzT1gWTdkPt.png",
                "image_url_sml": "http://anilist.co/img/dir/anime/sml/20652-WVzT1gWTdkPt.png",
                "adult": false,
                "popularity": 6210,
                "title_japanese": "デュラララ!!×２ 承",
                "title_english": "Durarara!! X2",
                "synonyms": ["DRRR!! 2 Shou"],
                "image_url_lge": "http://anilist.co/img/dir/anime/reg/20652-WVzT1gWTdkPt.png",
                "airing_status": "finished airing",
                "average_score": 8,
                "total_episodes": 12,
                "relation_type": null,
                "role": null
            }]
        };

        expect(seasonsReducer(state, action)).toEqual(expectedState);
    })
})
