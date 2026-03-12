import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ServicesPanel from '../../components/Admin/dashboard/ServicesPanel';

describe('ServicesPanel Component', () => {
    it('renders services and triggers save', () => {
        const mockServicesForm = {
            coreServices: [
                { title: 'Service 1', caption: 'Caption 1' }
            ]
        };
        const setServicesForm = vi.fn();
        const onSaveServices = vi.fn();

        render(
            <ServicesPanel
                servicesForm={mockServicesForm}
                setServicesForm={setServicesForm}
                onSaveServices={onSaveServices}
            />
        );

        expect(screen.getByText('Service Page Editor')).toBeDefined();
        expect(screen.getByDisplayValue('Service 1')).toBeDefined();
        expect(screen.getByDisplayValue('Caption 1')).toBeDefined();

        fireEvent.click(screen.getByText('Save Services'));
        expect(onSaveServices).toHaveBeenCalled();
    });
});
