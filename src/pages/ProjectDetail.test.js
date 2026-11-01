import { render, screen } from '@testing-library/react';
import ProjectDetail from './ProjectDetail';
import { showcaseProjects } from '../data/projects';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>,
  Navigate: () => null,
  useParams: () => ({ slug: 'money-mentor' }),
}), { virtual: true });

test('shows the sourced research narrative, individual role, collaboration, and original artifacts', () => {
  render(<ProjectDetail />);
  expect(screen.getByRole('heading', { name: 'The problem' })).toBeVisible();
  expect(screen.getByRole('heading', { name: 'Design decisions and rationale' })).toBeVisible();
  expect(screen.getByRole('heading', { name: 'Evaluation and limitations' })).toBeVisible();
  expect(screen.getByText(/we collected eight interviews and 26 survey responses/)).toBeVisible();
  expect(screen.getByRole('heading', { name: 'How we worked together' })).toBeVisible();
  expect(screen.getByText(/I directed and designed the main budget and budget-details layouts/)).toBeVisible();
  expect(screen.getByRole('heading', { name: 'What I learned' })).toBeVisible();
  expect(screen.getByRole('heading', { name: 'The missing Save button changed the conversation', level: 3 })).toBeVisible();
  expect(screen.queryAllByRole('img', { name: /Placeholder for/ })).toHaveLength(0);
  expect(screen.getByRole('img', { name: /Milestone 4 budget editor without/ })).toHaveAttribute('src', '/images/projects/money-mentor/budget-before-after.webp');
  expect(screen.getByRole('link', { name: 'View From an unclear action to explicit saving at full size' })).toHaveAttribute('href', '/images/projects/money-mentor/budget-before-after.webp');
  expect(screen.getByRole('link', { name: '03 Design decisions' })).toHaveAttribute('href', '#decisions');
});

test('curates completed work with research first and no placeholder destinations', () => {
  expect(showcaseProjects[0].slug).toBe('money-mentor');
  expect(showcaseProjects.every(project => !project.isUnderConstruction)).toBe(true);
  showcaseProjects.forEach(project => project.links.forEach(link => {
    expect(link.href).toMatch(/^https:\/\//);
    expect(link.href).not.toContain('example.com');
  }));
});
