import { describe, it, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import { api, setAdminSession, clearAdminSession, getAdminSession } from '../../services/api';

vi.mock('axios', () => {
    const mockAxios = {
        interceptors: {
            request: { use: vi.fn() },
            response: { use: vi.fn() }
        },
        post: vi.fn(),
        get: vi.fn(),
        create: vi.fn(() => mockAxios)
    };

    // Create a callable mock instance
    const callableMock = vi.fn((config) => Promise.resolve({ data: {} }));
    callableMock.interceptors = mockAxios.interceptors;
    callableMock.create = vi.fn(() => callableMock);

    return {
        default: callableMock
    };
});

describe('API Service', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
    });

    it('sets, gets and clears admin session in localStorage correctly', () => {
        // Test set
        setAdminSession('test-token', { id: 1, role: 'admin' });

        expect(localStorage.getItem('admin_token')).toBe('test-token');
        expect(localStorage.getItem('admin_user')).toBe('{"id":1,"role":"admin"}');

        // Test get
        const session = getAdminSession();
        expect(session.token).toBe('test-token');
        expect(session.user).toEqual({ id: 1, role: 'admin' });

        // Test clear
        clearAdminSession();
        expect(localStorage.getItem('admin_token')).toBeNull();
        expect(localStorage.getItem('admin_user')).toBeNull();
    });

    it('calls standard api methods properly through the axios instance', async () => {
        // Arrange generic successful response structure for our callable mock
        axios.mockResolvedValueOnce({ data: { message: 'Success' } });

        // Act
        const result = await api.getPublicContent();

        // Assert
        expect(axios).toHaveBeenCalledWith(expect.objectContaining({
            url: '/content',
            method: 'GET'
        }));
        expect(result).toEqual({ message: 'Success' });
    });

    it('calls login properly with payload', async () => {
        axios.mockResolvedValueOnce({ data: { token: 'new-token' } });

        const payload = { email: 'admin@cloudrule.com', password: 'password' };
        const result = await api.login(payload);

        expect(axios).toHaveBeenCalledWith(expect.objectContaining({
            url: '/auth/login',
            method: 'POST',
            data: payload
        }));
        expect(result.token).toBe('new-token');
    });
});
