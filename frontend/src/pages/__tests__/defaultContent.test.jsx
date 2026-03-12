import { describe, it, expect } from 'vitest';
import { defaultContent } from '../../content/defaultContent';

describe('defaultContent', () => {
    it('should be structured correctly as an object', () => {
        expect(defaultContent).toBeDefined();
        expect(typeof defaultContent).toBe('object');
    });

    it('should have the correct top-level sections', () => {
        expect(defaultContent).toHaveProperty('home');
        expect(defaultContent).toHaveProperty('services');
        expect(defaultContent).toHaveProperty('about');
        expect(defaultContent).toHaveProperty('career');
    });

    describe('home section', () => {
        it('should have hero, features, and cta', () => {
            const { home } = defaultContent;
            expect(home).toHaveProperty('hero');
            expect(home.hero).toHaveProperty('titleLine1');
            expect(home).toHaveProperty('features');
            expect(Array.isArray(home.features)).toBe(true);
            expect(home).toHaveProperty('cta');
        });
    });

    describe('services section', () => {
        it('should contain stats, coreServices, and processSteps', () => {
            const { services } = defaultContent;
            expect(services).toHaveProperty('stats');
            expect(Array.isArray(services.stats)).toBe(true);
            expect(services).toHaveProperty('coreServices');
            expect(Array.isArray(services.coreServices)).toBe(true);
            expect(services).toHaveProperty('processSteps');
            expect(Array.isArray(services.processSteps)).toBe(true);
        });
    });

    describe('about section', () => {
        it('should contain brand info, services, and team details', () => {
            const { about } = defaultContent;
            expect(about).toHaveProperty('brandName', 'Cloudrule Technology');
            expect(about).toHaveProperty('services');
            expect(about).toHaveProperty('headTeam');
            expect(about).toHaveProperty('techTeam');
            expect(Array.isArray(about.services)).toBe(true);
            expect(Array.isArray(about.headTeam)).toBe(true);
            expect(Array.isArray(about.techTeam)).toBe(true);
        });
    });

    describe('career section', () => {
        it('should contain career opening details, requirements, and offers', () => {
            const { career } = defaultContent;
            expect(career).toHaveProperty('heroBadge');
            expect(career).toHaveProperty('openingsTitle');
            expect(career).toHaveProperty('requirements');
            expect(career).toHaveProperty('offers');
            expect(Array.isArray(career.requirements)).toBe(true);
            expect(Array.isArray(career.offers)).toBe(true);
        });
    });
});
