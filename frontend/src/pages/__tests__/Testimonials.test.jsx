import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Testimonials from '../../components/Testimonials/Testimonials';
import { api } from '../../services/api';

vi.mock('../../services/api', () => ({
    api: {
        getTestimonials: vi.fn(),
    },
}));

describe('Testimonials Component', () => {
    it('renders testimonials successfully', async () => {
        api.getTestimonials.mockResolvedValueOnce({
            testimonials: [
                { id: 1, message: 'Great job!', clientName: 'Bob', clientRole: 'Developer' }
            ]
        });

        render(<Testimonials />);

        await waitFor(() => {
            expect(screen.getByText('Testimonials')).toBeDefined();
            expect(screen.getByText('Great job!')).toBeDefined();
            expect(screen.getByText('Bob')).toBeDefined();
            expect(screen.getByText('Developer')).toBeDefined();
        });
    });

    it('returns null if there are no testimonials', async () => {
        api.getTestimonials.mockResolvedValueOnce({ testimonials: [] });
        const { container } = render(<Testimonials />);
        await waitFor(() => {
            expect(container.innerHTML).toBe('');
        });
    });
});
