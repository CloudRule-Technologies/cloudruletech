import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import UserRegister from '../User/Register';
import { api } from '../../services/api';

vi.mock('react-router-dom', () => ({
    Link: ({ children }) => <a>{children}</a>,
}));

vi.mock('../../services/api', () => ({
    api: {
        register: vi.fn(),
    },
}));

describe('UserRegister Component', () => {
    it('submits form successfully when passwords match', async () => {
        api.register.mockResolvedValueOnce({ message: 'Subadmin registered successfully' });

        render(<UserRegister />);

        const nameInput = screen.getByPlaceholderText('Full name');
        const emailInput = screen.getByPlaceholderText('Enter email');
        const passwordInput = screen.getByPlaceholderText('Min. 6 characters');
        const confirmPasswordInput = screen.getByPlaceholderText('Repeat password');

        fireEvent.change(nameInput, { target: { name: 'name', value: 'Test Admin' } });
        fireEvent.change(emailInput, { target: { name: 'email', value: 'test@admin.com' } });
        fireEvent.change(passwordInput, { target: { name: 'password', value: 'password123' } });
        fireEvent.change(confirmPasswordInput, { target: { name: 'confirmPassword', value: 'password123' } });

        const submitButton = screen.getByRole('button', { name: /Register Subadmin/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(api.register).toHaveBeenCalledWith({
                name: 'Test Admin',
                email: 'test@admin.com',
                password: 'password123',
            });
            expect(screen.getByText('Subadmin registered successfully')).toBeDefined();
        });
    });

    it('shows error message if passwords do not match', async () => {
        render(<UserRegister />);

        const nameInput = screen.getByPlaceholderText('Full name');
        const emailInput = screen.getByPlaceholderText('Enter email');
        const passwordInput = screen.getByPlaceholderText('Min. 6 characters');
        const confirmPasswordInput = screen.getByPlaceholderText('Repeat password');

        fireEvent.change(nameInput, { target: { name: 'name', value: 'Test Admin' } });
        fireEvent.change(emailInput, { target: { name: 'email', value: 'test@admin.com' } });
        fireEvent.change(passwordInput, { target: { name: 'password', value: 'pass123' } });
        fireEvent.change(confirmPasswordInput, { target: { name: 'confirmPassword', value: 'pass456' } });

        const submitButton = screen.getByRole('button', { name: /Register Subadmin/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText('Passwords do not match')).toBeDefined();
        });
    });
});
