import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ContentPanel from '../../components/Admin/dashboard/ContentPanel';

describe('ContentPanel Component', () => {
    it('renders section tabs and content layout correctly', () => {
        const mockContentSections = {
            home: { title: 'Home Title' },
            services: { title: 'Services Title' }
        };
        const mockContentDraft = { title: 'Draft Title' };
        const selectSectionMock = vi.fn();
        const saveMock = vi.fn();

        render(
            <ContentPanel
                isSubadmin={false}
                contentSections={mockContentSections}
                selectedSection="home"
                onSelectSection={selectSectionMock}
                contentDraft={mockContentDraft}
                updateDraftAtPath={vi.fn()}
                onOpenRichTextEditor={vi.fn()}
                onSaveContent={saveMock}
            />
        );

        // Checks tabs based on object keys
        expect(screen.getByText('home')).toBeDefined();
        expect(screen.getByText('services')).toBeDefined();

        // Check inner value rendering
        expect(screen.getByDisplayValue('Draft Title')).toBeDefined();
        expect(screen.getByText('Title')).toBeDefined();

        // Interaction 
        fireEvent.click(screen.getByText('Save Content'));
        expect(saveMock).toHaveBeenCalled();
    });
});
