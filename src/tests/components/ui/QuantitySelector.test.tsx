import { render, screen, fireEvent } from '@testing-library/react';
import QuantitySelector from '../../../components/ui/QuantitySelector';
import { vi } from 'vitest';

describe('QuantitySelector', () => {
    it('renders with initial quantity', () => {
        render(<QuantitySelector quantity={5} onIncrement={() => { }} onDecrement={() => { }} />);
        expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('calls onIncrement when + is clicked', () => {
        const onIncrement = vi.fn();
        render(<QuantitySelector quantity={1} onIncrement={onIncrement} onDecrement={() => { }} />);

        const incrementBtn = screen.getByText('+');
        fireEvent.click(incrementBtn);

        expect(onIncrement).toHaveBeenCalled();
    });

    it('calls onDecrement when - is clicked', () => {
        const onDecrement = vi.fn();
        render(<QuantitySelector quantity={2} onIncrement={() => { }} onDecrement={onDecrement} />);

        // The component uses the minus sign character '−' (U+2212), not hyphen '-'
        const decrementBtn = screen.getByText('−');
        fireEvent.click(decrementBtn);

        expect(onDecrement).toHaveBeenCalled();
    });
});
