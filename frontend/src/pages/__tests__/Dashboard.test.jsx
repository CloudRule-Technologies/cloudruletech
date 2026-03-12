import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Dashboard from '../../components/Admin/dashboard/Dashboard';

// Mock the react-router hooks and services used in Dashboard
vi.mock('react-router-dom', () => ({
    useNavigate: () => vi.fn(),
    Link: ({ children }) => <a>{children}</a>,
}));

vi.mock('../../services/api', () => ({
    api: {
        getAdminContent: vi.fn(() => Promise.resolve({ content: {} })),
        getAnalyticsSummary: vi.fn(() => Promise.resolve({ summary: {} })),
        getEnquiries: vi.fn(() => Promise.resolve({ enquiries: [] })),
        getAdminTestimonials: vi.fn(() => Promise.resolve({ testimonials: [] })),
        getAdmins: vi.fn(() => Promise.resolve({ admins: [] })),
    },
    getAdminSession: vi.fn(() => ({ user: { email: 'test@cloudrule.com', role: 'admin' } })),
    clearAdminSession: vi.fn(),
}));

describe('Dashboard Component', () => {
    it('renders the dashboard header and default overview tab correctly', async () => {
        render(<Dashboard />);

        // Header check
        expect(await screen.findByText('CloudRule Admin Panel')).toBeDefined();
        expect(screen.getByText('Logged in as test@cloudrule.com')).toBeDefined();
        expect(screen.getByText('Logout')).toBeDefined();

        // Default Overview Panel check based on role 'admin'
        expect(screen.getByText('Overall Dashboard')).toBeDefined();

        // Also ensuring sidebar tabs render
        expect(screen.getByText('Overview')).toBeDefined();
        expect(screen.getByText('Analytics')).toBeDefined();
    });
});
