import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import LikeCounter from './LikeCounter';

describe('LikeCounter', () => {

  it('shoulder be a link', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LikeCounter count={5} />);
    const actual = renderer.getRenderOutput().type;
    const expected = 'a';
    expect(actual).toEqual(expected);
  });
});