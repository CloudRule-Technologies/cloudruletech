import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import EnquiriesPanel from '../../components/Admin/dashboard/EnquiriesPanel';

describe('EnquiriesPanel Component', () => {
    it('renders enquiries correctly', () => {
        const mockEnquiries = [
            { id: 1, name: 'Alice', email: 'alice@mail.com', role: 'Student', message: 'Question about course', createdAt: '2023-01-02' }
        ];

        render(<EnquiriesPanel enquiries={mockEnquiries} />);

        expect(screen.getByText('Reach Us Enquiries')).toBeDefined();
        expect(screen.getByText('Alice')).toBeDefined();
        expect(screen.getByText('(alice@mail.com)')).toBeDefined();
        expect(screen.getByText('Role: Student')).toBeDefined();
        expect(screen.getByText('Question about course')).toBeDefined();
    });
});
