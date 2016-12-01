import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import likeCounter from './LikeCounter';

describe('LikeCounter', () => {

  it('should be a link', function() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LikeCounter count={5} />);
  });
});