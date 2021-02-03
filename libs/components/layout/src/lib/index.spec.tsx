import React from 'react';
import { render } from '@testing-library/react';

import { Layout } from './';

describe('Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Layout />);
    expect(baseElement).toBeTruthy();
  });
});
