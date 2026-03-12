import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import SeoPanel from '../../components/Admin/dashboard/SeoPanel';

describe('SeoPanel Component', () => {
    it('renders seo controls correctly and handles inputs', () => {
        const mockSeoForm = { title: 'Test Title', description: 'Test Desc', keywords: 'test, keywords' };
        const setSeoPageKey = vi.fn();
        const onLoadSeo = vi.fn();
        const setSeoForm = vi.fn();
        const onSaveSeo = vi.fn();

        render(
            <SeoPanel
                seoPageKey="home"
                setSeoPageKey={setSeoPageKey}
                onLoadSeo={onLoadSeo}
                seoForm={mockSeoForm}
                setSeoForm={setSeoForm}
                onSaveSeo={onSaveSeo}
            />
        );

        expect(screen.getByText('SEO Controls')).toBeDefined();
        expect(screen.getByDisplayValue('home')).toBeDefined();
        expect(screen.getByDisplayValue('Test Title')).toBeDefined();
        expect(screen.getByDisplayValue('Test Desc')).toBeDefined();
        expect(screen.getByDisplayValue('test, keywords')).toBeDefined();

        fireEvent.click(screen.getByText('Load SEO'));
        expect(onLoadSeo).toHaveBeenCalled();

        fireEvent.click(screen.getByText('Save SEO'));
        expect(onSaveSeo).toHaveBeenCalled();
    });
});
