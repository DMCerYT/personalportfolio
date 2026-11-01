import { render, screen, within } from '@testing-library/react';
import ProjectDetail from './ProjectDetail';
import { showcaseProjects } from '../data/projects';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>,
  Navigate: () => null,
  useParams: () => ({ slug: 'playpeek' }),
}), { virtual: true });

test('makes the PlayPeek case study discoverable while clearly marking the app as pre-release', () => {
  expect(showcaseProjects.some(project => project.slug === 'playpeek')).toBe(true);
  render(<ProjectDetail />);

  expect(screen.getByRole('heading', { name: 'PlayPeek', level: 1 })).toBeVisible();
  const status = screen.getByRole('complementary', { name: 'Development status' });
  expect(within(status).getByText('In active development')).toBeVisible();
  expect(within(status).getByText(/Expected launch: late November 2026/)).toBeVisible();
  expect(screen.getByText(/PlayPeek has not launched yet/)).toBeVisible();
  expect(screen.getByRole('img', { name: /PlayPeek floating mini player/ })).toBeVisible();
  expect(screen.getByRole('img', { name: /PlayPeek General settings in Spanish/ })).toBeVisible();
  expect(screen.queryAllByRole('img', { name: /Placeholder for/ })).toHaveLength(0);
  screen.getAllByRole('link', { name: 'Visit PlayPeek · Coming soon' }).forEach(link => {
    expect(link).toHaveAttribute('href', 'https://playpeek.dmcer.org');
  });
});
