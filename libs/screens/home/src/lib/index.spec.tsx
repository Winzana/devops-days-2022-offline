import React from 'react';
import { render } from '@testing-library/react';

import { Home } from './';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });
});
