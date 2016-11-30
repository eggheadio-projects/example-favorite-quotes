import {store} from './store';
import expect from 'expect';

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
