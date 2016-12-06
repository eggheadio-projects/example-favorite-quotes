import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

const CoolComponent = ({greeting}) => (
  <div>
    <h1>Greeting</h1>
    <div>{greeting}!</div>
  </div>
);

describe('CoolComponent', () => {

  it('should render the greeting', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<CoolComponent greeting='hello world' />);
    const actual = renderer.getRenderOutput();
    const expected = <div>hello world!</div>;
    expect(actual).toIncludeJSX(expected);
  });
});
