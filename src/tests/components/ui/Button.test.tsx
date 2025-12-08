import { render, screen } from '@testing-library/react';
import Button from '../../../components/ui/Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button variant="primary">Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
