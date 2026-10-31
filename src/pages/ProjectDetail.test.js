import { render, screen } from '@testing-library/react';
import ProjectDetail from './ProjectDetail';
import { showcaseProjects } from '../data/projects';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>,
  Navigate: () => null,
  useParams: () => ({ slug: 'money-mentor' }),
}), { virtual: true });

test('makes the research narrative and clearly labeled artifact slots visible', () => {
  render(<ProjectDetail />);
  expect(screen.getByRole('heading', { name: 'The problem' })).toBeVisible();
  expect(screen.getByRole('heading', { name: 'Design decisions and rationale' })).toBeVisible();
  expect(screen.getByRole('heading', { name: 'Evaluation and limitations' })).toBeVisible();
  expect(screen.getByText(/100\+ surveys, 10\+ interviews/)).toBeVisible();
  expect(screen.getAllByRole('img', { name: /Placeholder for/ })).toHaveLength(3);
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
