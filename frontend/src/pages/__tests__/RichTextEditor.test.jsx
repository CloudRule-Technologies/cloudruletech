import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import RichTextEditor from '../../components/Admin/dashboard/RichTextEditor';

describe('RichTextEditor Component', () => {
    it('does not render when closed', () => {
        const { container } = render(
            <RichTextEditor open={false} value="" onSave={vi.fn()} onClose={vi.fn()} />
        );
        expect(container.innerHTML).toBe('');
    });

    it('renders when open and allows close/save', () => {
        const saveMock = vi.fn();
        const closeMock = vi.fn();

        render(
            <RichTextEditor open={true} value="<p>Test</p>" onSave={saveMock} onClose={closeMock} />
        );

        expect(screen.getByText('Rich Text Editor')).toBeDefined();

        // Check buttons
        expect(screen.getByText('B')).toBeDefined();
        expect(screen.getByText('Close')).toBeDefined();

        fireEvent.click(screen.getByText('Close'));
        expect(closeMock).toHaveBeenCalled();

        fireEvent.click(screen.getByText('Save Formatted Text'));
        expect(saveMock).toHaveBeenCalled();
    });
});
