import expect from 'expect';
import {store} from './store';

describe('store', () => {

  it('should initialize', () => {
    const actual = store.getState();
    const expected = {
      quotes: [],
      theme: {
        color: '#5DC4C6'
      }
    };
    expect(actual).toEqual(expected);
  });

  it('should work with a series of actions', () => {

    const actions = [
      {
        type: 'ADD_QUOTE_BY_ID',
        payload: {
          text: 'The best way to cheer yourself up is to try to cheer somebody else up.',
          author: 'Mark Twain',
          id: 1,
          likeCount: 24
        }
      },
      {
        type: 'ADD_QUOTE_BY_ID',
        payload: {
          text: 'Whatever you are, be a good one.',
          author: 'Abraham Lincoln',
          id: 2,
          likeCount: 0
        }
      },
      {
        type: 'REMOVE_QUOTE_BY_ID',
        payload: {id: 1}
      },
      {
        type: 'LIKE_QUOTE_BY_ID',
        payload: {id: 2}
      },
      {
        type: 'LIKE_QUOTE_BY_ID',
        payload: {id: 2}
      },
      {
        type: 'UNLIKE_QUOTE_BY_ID',
        payload: {id: 2}
      },
      {
        type: 'UPDATE_THEME_COLOR',
        payload: {color: '#777777'}
      }
    ];

    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      quotes: [
        {
          text: 'Whatever you are, be a good one.',
          author: 'Abraham Lincoln',
          id: 2,
          likeCount: 1
        }
      ],
      theme: {
        color: '#777777'
      }
    };

    expect(actual).toEqual(expected);
  });
});
