import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CheckoutForm from '../../../components/CheckoutPage/CheckoutForm';
import { vi } from 'vitest';

describe('CheckoutForm', () => {
    it('renders all input fields', () => {
        render(<CheckoutForm onSubmit={() => { }} />);

        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Your Address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/ZIP Code/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
    });

    it('shows validation errors when submitting empty form', async () => {
        const handleSubmit = vi.fn();
        render(
            <div>
                <CheckoutForm onSubmit={handleSubmit} />
                <button type="submit" form="checkout-form">Submit</button>
            </div>
        );

        const submitBtn = screen.getByText('Submit');
        fireEvent.click(submitBtn);

        await waitFor(() => {
            expect(handleSubmit).not.toHaveBeenCalled();
        });
    });

    it('submits form with valid data', async () => {
        const handleSubmit = vi.fn();
        render(
            <div>
                <CheckoutForm onSubmit={handleSubmit} />
                <button type="submit" form="checkout-form">Submit</button>
            </div>
        );

        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '1234567890' } });
        fireEvent.change(screen.getByLabelText(/Your Address/i), { target: { value: '123 Main St' } });
        fireEvent.change(screen.getByLabelText(/ZIP Code/i), { target: { value: '12345' } });
        fireEvent.change(screen.getByLabelText(/City/i), { target: { value: 'New York' } });
        fireEvent.change(screen.getByLabelText(/Country/i), { target: { value: 'USA' } });

        // e-Money is default
        fireEvent.change(screen.getByLabelText(/e-Money Number/i), { target: { value: '123456789' } });
        fireEvent.change(screen.getByLabelText(/e-Money PIN/i), { target: { value: '1234' } });

        const submitBtn = screen.getByText('Submit');
        fireEvent.click(submitBtn);

        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalled();
        });
    });
});
