import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import UserLogin from '../User/Login';
import { api } from '../../services/api';

vi.mock('react-router-dom', () => ({
    useNavigate: () => vi.fn(),
    Link: ({ children }) => <a>{children}</a>,
}));

vi.mock('../../services/api', () => ({
    api: {
        login: vi.fn(),
    },
    setAdminSession: vi.fn(),
}));

describe('UserLogin Component', () => {
    it('allows user to fill out the form and submit successfully', async () => {
        api.login.mockResolvedValueOnce({ token: '123', admin: { role: 'admin' } });

        const { container } = render(<UserLogin />);

        expect(screen.getByText('Login for Admin or Subadmin.')).toBeDefined();

        const emailInput = container.querySelector('input[name="email"]');
        const passwordInput = container.querySelector('input[name="password"]');

        // Test the show password toggle
        const toggleBtn = screen.getByLabelText('Show password');
        expect(passwordInput.type).toBe('password');
        fireEvent.click(toggleBtn);
        expect(passwordInput.type).toBe('text');
        fireEvent.click(screen.getByLabelText('Hide password'));
        expect(passwordInput.type).toBe('password');

        fireEvent.change(emailInput, { target: { name: 'email', value: 'admin@cloudrule.com' } });
        fireEvent.change(passwordInput, { target: { name: 'password', value: 'password123' } });

        // Since it's a form, standard query on the submit button works
        const submitButton = screen.getByRole('button', { name: /Login/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(api.login).toHaveBeenCalledWith({
                email: 'admin@cloudrule.com',
                password: 'password123'
            });
        });
    });

    it('shows error if an invalid email attempts login', async () => {
        const { container } = render(<UserLogin />);

        const emailInput = container.querySelector('input[name="email"]');
        const passwordInput = container.querySelector('input[name="password"]');

        fireEvent.change(emailInput, { target: { name: 'email', value: 'invalid@test.com' } });
        fireEvent.change(passwordInput, { target: { name: 'password', value: '123456' } });

        const submitButton = screen.getByRole('button', { name: /Login/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText('Only admin or subadmin accounts can login here')).toBeDefined();
        });
    });
});
