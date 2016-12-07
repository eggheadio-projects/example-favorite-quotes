import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import LikeCounter from './LikeCounter';

describe('LikeCounter', () => {

  it('should render like counts', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LikeCounter count={5} />);
    const actual = renderer.getRenderOutput();
    const expected = '5 likes';
    expect(actual).toIncludeJSX(expected);
  });
});
