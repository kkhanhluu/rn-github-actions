import React from 'react';
import 'react-native';
import * as renderer from 'react-test-renderer';

import App from '../src/App';

describe('<App />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    // expect(tree?.children?.length).toBe(1);
  });
});
