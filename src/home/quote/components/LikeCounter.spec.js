import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import LikeCounter from './LikeCounter';

describe('LikeCounter', () => {

  it('should show the like count as active', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LikeCounter count={5} isActive={true} />);
    const actual = renderer.getRenderOutput().props.className
      .includes('LikeCounter--active');
    const expected = true;
    expect(actual).toEqual(expected);
  });

  it('should show the like count as inactive', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LikeCounter count={5} isActive={false} />);
    const actual = renderer.getRenderOutput().props.className
      .includes('LikeCounter--active');
    const expected = false;
    expect(actual).toEqual(expected);
  });
});