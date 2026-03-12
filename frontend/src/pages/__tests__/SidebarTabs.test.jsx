import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import SidebarTabs from '../../components/Admin/dashboard/SidebarTabs';

describe('SidebarTabs Component', () => {
    it('renders tabs correctly based on subadmin role', () => {
        const tabs = [
            { key: 'overview', label: 'Overview' },
            { key: 'services', label: 'Services' },
            { key: 'seo', label: 'SEO' },
        ];
        const onTabChange = vi.fn();

        const { rerender } = render(
            <SidebarTabs
                tabs={tabs}
                activeTab="overview"
                onTabChange={onTabChange}
                isSubadmin={false}
                tabBadges={{ overview: 2 }}
            />
        );

        expect(screen.getByText('Overview')).toBeDefined();
        expect(screen.getByText('Services')).toBeDefined();
        expect(screen.getByText('SEO')).toBeDefined();
        expect(screen.getByText('2')).toBeDefined(); // Badge count

        fireEvent.click(screen.getByText('Services'));
        expect(onTabChange).toHaveBeenCalledWith('services');

        // Re-render as subadmin
        rerender(
            <SidebarTabs
                tabs={tabs}
                activeTab="services"
                onTabChange={onTabChange}
                isSubadmin={true}
                tabBadges={{}}
            />
        );

        // Subadmin should only see services out of these
        expect(screen.queryByText('Overview')).toBeNull();
        expect(screen.queryByText('SEO')).toBeNull();
        expect(screen.getByText('Services')).toBeDefined();
    });
});
