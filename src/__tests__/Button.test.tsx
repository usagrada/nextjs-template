import { render, screen } from '@testing-library/react';
import { Button } from '../stories/Button';

describe('Home', () => {
  it('renders a heading', () => {
    const label = 'Hello World';
    const button = render(<Button label={label} />);

    expect(button.getByText(label)).toBeInTheDocument();
  });
});
