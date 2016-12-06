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
});
