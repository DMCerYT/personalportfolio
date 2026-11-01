import { act, fireEvent, renderHook } from '@testing-library/react';
import useNavigationState from './useNavigationState';

beforeEach(() => jest.useFakeTimers());
afterEach(() => { jest.runOnlyPendingTimers(); jest.useRealTimers(); });

test('keeps the mobile menu mounted for its exit animation and closes settings when opening it', () => {
  const { result } = renderHook(useNavigationState);
  act(() => result.current.toggleSettings());
  act(() => result.current.toggleMenu());
  expect(result.current.isSettingsOpen).toBe(false);
  expect(result.current.isMenuOpen).toBe(true);
  act(() => result.current.closeMenu());
  expect(result.current.isMenuOpen).toBe(false);
  expect(result.current.isMenuMounted).toBe(true);
  act(() => jest.advanceTimersByTime(220));
  expect(result.current.isMenuMounted).toBe(false);
});

test('settings dismiss with Escape or an outside click, but stay open for an inside click', () => {
  const { result } = renderHook(useNavigationState);
  const panel = document.createElement('div');
  document.body.appendChild(panel);
  result.current.desktopSettingsRef.current = panel;
  act(() => result.current.toggleSettings());
  fireEvent.pointerDown(panel);
  expect(result.current.isSettingsOpen).toBe(true);
  fireEvent.keyDown(window, { key: 'Escape' });
  expect(result.current.isSettingsOpen).toBe(false);
  act(() => result.current.handleMobileSettingsClick());
  expect(result.current.isSettingsOpen).toBe(true);
  fireEvent.pointerDown(document.body);
  expect(result.current.isSettingsOpen).toBe(false);
  panel.remove();
});
