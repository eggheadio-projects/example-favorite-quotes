import expect from 'expect';
import quoteReducer from './quoteReducer';

describe('quoteReducer', () => {

  function stateBefore() {
    return [
      {
        text: 'Lorem ipsum',
        author: 'Jane Doe',
        id: 1,
        likeCount: 7
      },
      {
        text: 'Ullamco laboris nisi ut aliquip',
        author: 'John Smith',
        id: 2,
        likeCount: 0
      }
    ];
  }

  it('should remove quotes by id', () => {
    const action = {}
    const actual = quoteReducer(stateBefore(), action);
    const expected = stateBefore();
    expect(actual).toEqual(expected);
  });

  it('should increase quote like count by id', () => {
    const action = likeQuoteById({
      id: 2
    });
    const actual = quoteReducer(stateBefore(), action);
    const expected = [
      {
        text: 'Lorem ipsum',
        author: 'Jane Doe',
        id: 1,
        likeCount: 7
      },
      {
        text: 'Ullamco laboris nisi ut aliquip',
        author: 'John Smith',
        id: 2,
        likeCount: 1
      }
    ];
    expect(actual).toEqual(expected);
  });

  it('should decrease quote like count by id', () => {
    const action = unlikeQuoteById({
      id: 1
    });
    const actual = quoteReducer(stateBefore(), action);
    const expected = [
      {
        text: 'Lorem ipsum',
        author: 'Jane Doe',
        id: 1,
        likeCount: 6
      },
      {
        text: 'Ullamco laboris nisi ut aliquip',
        author: 'John Smith',
        id: 2,
        likeCount: 0
      }
    ];
    expect(actual).toEqual(expected);
  });

  it('should return prevous state when trying to change the like count on a quote with a non-existant id', () => {
    const action = unlikeQuoteById({
      id: 241
    });
    const actual = quoteReducer(stateBefore(), action);
    const expected = stateBefore();
    expect(actual).toEqual(expected);
  });
});
