import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import OverviewPanel from '../../components/Admin/dashboard/OverviewPanel';

describe('OverviewPanel Component', () => {
    it('renders overall dashboard stats correctly', () => {
        const mockOverview = {
            totalViews: 5000,
            todayViews: 100,
            totalEnquiries: 25,
            totalTestimonials: 10,
            postedTestimonials: 8,
            pendingTestimonials: 2,
            totalAdmins: 3,
            topPagePath: '/services',
            topPageViews: 800
        };

        render(<OverviewPanel overview={mockOverview} />);

        expect(screen.getByText('Overall Dashboard')).toBeDefined();
        expect(screen.getByText('5000')).toBeDefined();
        expect(screen.getByText(/Today: 100/)).toBeDefined();
        expect(screen.getByText('25')).toBeDefined();
        expect(screen.getByText('10')).toBeDefined();
        expect(screen.getByText('3')).toBeDefined();
        expect(screen.getByText('/services')).toBeDefined();
        expect(screen.getByText('800 views')).toBeDefined();
    });
});
