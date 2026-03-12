import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import AdminManagementPanel from '../../components/Admin/dashboard/AdminManagementPanel';

describe('AdminManagementPanel Component', () => {
    it('renders correctly with given props', () => {
        const mockSubadminForm = { name: 'Test Name', email: 'test@gmail.com', password: '' };
        const mockAdminUsers = [
            { id: 1, name: 'Admin One', email: 'admin1@test.com', role: 'admin' },
        ];
        const mockSetSubadminForm = vi.fn();
        const mockOnSaveSubadmin = vi.fn();

        render(
            <AdminManagementPanel
                subadminForm={mockSubadminForm}
                setSubadminForm={mockSetSubadminForm}
                onSaveSubadmin={mockOnSaveSubadmin}
                adminUsers={mockAdminUsers}
            />
        );

        expect(screen.getByText('Admin Management')).toBeDefined();
        expect(screen.getByText('Admin Accounts')).toBeDefined();
        expect(screen.getByText('Admin One')).toBeDefined();
        expect(screen.getByDisplayValue('Test Name')).toBeDefined();
    });
});
