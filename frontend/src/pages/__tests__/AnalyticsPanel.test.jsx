import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import AnalyticsPanel from '../../components/Admin/dashboard/AnalyticsPanel';

describe('AnalyticsPanel Component', () => {
    it('renders analytics data correctly', () => {
        const mockAnalytics = {
            totalViews: 1000,
            todayViews: 50,
            topPages: [
                { path: '/home', views: 500 },
                { path: '/about', views: 200 }
            ]
        };

        render(<AnalyticsPanel analytics={mockAnalytics} />);

        expect(screen.getByText('Analytics Dashboard')).toBeDefined();
        expect(screen.getByText('1000')).toBeDefined();
        expect(screen.getByText('50')).toBeDefined();
        expect(screen.getByText('/home')).toBeDefined();
        expect(screen.getByText('500')).toBeDefined();
    });
});
