import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import SettingsPanel from './SettingsPanel';

function Harness({ onClose = jest.fn() }) {
  const [settings, setSettings] = useState({ theme: 'light', dynamicBackgroundEnabled: false });
  return <SettingsPanel settings={settings} onClose={onClose}
    onChangeTheme={theme => setSettings(current => ({ ...current, theme }))}
    onToggleBackground={() => setSettings(current => ({ ...current, dynamicBackgroundEnabled: !current.dynamicBackgroundEnabled }))} />;
}

test('changes appearance and toggles animated elements in both directions', () => {
  render(<Harness />);
  fireEvent.click(screen.getByRole('radio', { name: 'Dark' }));
  expect(screen.getByRole('radio', { name: 'Dark' })).toBeChecked();
  expect(screen.getByRole('radio', { name: 'Light' })).not.toBeChecked();
  const toggle = screen.getByRole('switch', { name: 'Dynamic/Animated Elements' });
  expect(toggle).toHaveAttribute('aria-checked', 'false');
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-checked', 'true');
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-checked', 'false');
});

test('closes the floating settings panel', () => {
  const onClose = jest.fn();
  render(<Harness onClose={onClose} />);
  fireEvent.click(screen.getByRole('button', { name: 'Close settings' }));
  expect(onClose).toHaveBeenCalledTimes(1);
});
