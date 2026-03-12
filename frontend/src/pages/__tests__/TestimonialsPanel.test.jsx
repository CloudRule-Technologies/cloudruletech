import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import TestimonialsPanel from '../../components/Admin/dashboard/TestimonialsPanel';

describe('TestimonialsPanel Component', () => {
    it('renders testimonials manager and items correctly', () => {
        const mockTestimonials = [
            { id: 1, clientName: 'Alice Test', clientRole: 'CEO', message: 'Great work', isActive: true, rating: 5 },
            { id: 2, clientName: 'Bob Test', clientRole: 'CTO', message: 'Good job', isActive: false, rating: 4 }
        ];
        const toggleMock = vi.fn();
        const deleteMock = vi.fn();
        const addMock = vi.fn();

        render(
            <TestimonialsPanel
                newTestimonial={{ clientName: '', clientRole: '', message: '' }}
                setNewTestimonial={vi.fn()}
                onAddTestimonial={addMock}
                testimonials={mockTestimonials}
                onToggleTestimonialVisibility={toggleMock}
                onDeleteTestimonial={deleteMock}
            />
        );

        expect(screen.getByText('Testimonials Manager')).toBeDefined();

        // Check items
        expect(screen.getByText('Alice Test')).toBeDefined();
        expect(screen.getByText('Posted')).toBeDefined();
        expect(screen.getByText('Unpost')).toBeDefined();

        expect(screen.getByText('Bob Test')).toBeDefined();
        expect(screen.getByText('Pending')).toBeDefined();
        expect(screen.getByText('Post to Services')).toBeDefined();

        // Interactions
        fireEvent.click(screen.getByText('Add Testimonial'));
        expect(addMock).toHaveBeenCalled();
    });
});
