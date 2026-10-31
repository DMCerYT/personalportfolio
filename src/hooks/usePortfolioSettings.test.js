import { act, renderHook } from '@testing-library/react';
import usePortfolioSettings from './usePortfolioSettings';
import { DEFAULT_SETTINGS, SETTINGS_STORAGE_KEY } from '../utils/portfolioSettings';

beforeEach(() => window.localStorage.clear());
afterEach(() => jest.restoreAllMocks());

test('restores preferences, persists changes, and keeps unrelated settings', () => {
  window.localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify({ theme: 'dark', dynamicBackgroundEnabled: false }));
  const { result } = renderHook(usePortfolioSettings);
  expect(result.current.settings).toEqual({ theme: 'dark', dynamicBackgroundEnabled: false });
  act(() => result.current.changeTheme('light'));
  act(() => result.current.toggleDynamicBackground());
  expect(JSON.parse(window.localStorage.getItem(SETTINGS_STORAGE_KEY))).toEqual(DEFAULT_SETTINGS);
});

test.each(['broken json', 'null', '{"theme":"invalid","dynamicBackgroundEnabled":"false"}'])(
  'recovers invalid stored preferences: %s', stored => {
    window.localStorage.setItem(SETTINGS_STORAGE_KEY, stored);
    const { result } = renderHook(usePortfolioSettings);
    expect(result.current.settings).toEqual(DEFAULT_SETTINGS);
  }
);

test('settings remain usable when browser storage is denied', () => {
  jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('denied'); });
  jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('denied'); });
  const { result } = renderHook(usePortfolioSettings);
  act(() => result.current.changeTheme('dark'));
  expect(result.current.settings.theme).toBe('dark');
});
