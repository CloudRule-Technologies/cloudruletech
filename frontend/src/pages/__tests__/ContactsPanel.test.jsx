import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ContactsPanel from '../../components/Admin/dashboard/ContactsPanel';

describe('ContactsPanel Component', () => {
    it('renders contacts list correctly', () => {
        const mockContacts = [
            { id: 1, name: 'John Doe', email: 'john@example.com', message: 'Hello there', createdAt: '2023-01-01' },
        ];

        render(<ContactsPanel contacts={mockContacts} />);

        expect(screen.getByText('Contact Submissions')).toBeDefined();
        expect(screen.getByText('John Doe')).toBeDefined();
        expect(screen.getByText('(john@example.com)')).toBeDefined();
        expect(screen.getByText('Hello there')).toBeDefined();
    });
});
