import { render } from '@testing-library/react';
import { LineTextLine } from './line-text-line';

describe('Given LineTextLine component', () => {
  it('WHEN component is called THEN the component is rendered with default props', () => {
    const { getByText, getByTestId } = render(<LineTextLine />);
    expect(getByTestId('line-text-line')).toBeInTheDocument();
    expect(getByText('Or')).toBeInTheDocument();
  });

  it('WHEN custom separator text is sent THEN the component is rendered with custom text', () => {
    const { getByText } = render(<LineTextLine separatorText="And" />);
    expect(getByText('And')).toBeInTheDocument();
  });

  it('WHEN thin border prop is true THEN the component with line is rendered ', () => {
    const { getByTestId } = render(<LineTextLine thinBorder={true} />);
    expect(getByTestId('line-text-line')).toBeDefined();
  });

  it('WHEN thin border prop is false THEN the component with line is rendered', () => {
    const { getByTestId } = render(<LineTextLine thinBorder={false} />);
    expect(getByTestId('line-text-line')).toBeDefined();
  });
});
