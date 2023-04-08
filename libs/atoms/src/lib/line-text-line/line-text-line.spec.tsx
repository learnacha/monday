import { render } from '@testing-library/react';

import LineTextLine from './line-text-line';

describe('LineTextLine', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LineTextLine />);
    expect(baseElement).toBeTruthy();
  });
});
