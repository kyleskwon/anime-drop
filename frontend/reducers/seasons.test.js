jest.unmock('./seasons')

import seasons from './seasons'

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
            }]
          }
      }

      const expectedState = {
          '2015-spring': [{
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
          }]
      };

      expect(seasons(state, action)).toEqual(expectedState);
  })

  it('sets loading to true', () => {

      const state = {
        loading: false
      }

      const action = {
        type: 'LOADING_SEASON_PENDING',
      }

      const expectedState = {
        loading: true
      };

      expect(seasons(state, action)).toEqual(expectedState);
  })

  it('sets loading to false', () => {

      const state = {
        loading: true
      }

      const action = {
        type: 'LOADING_SEASON_COMPLETE',
      }

      const expectedState = {
        loading: false
      };

      expect(seasons(state, action)).toEqual(expectedState);
  })

  it('Returns default state on random action', () => {

    const state = {
      loading: true
    }

    let action = {
      type: 'RANDOM_ACTION',
      foo: 'bar'
    }

    let expectedState = {
      loading: true
    }

    expect(seasons(state, action)).toEqual(expectedState);
  })
})
