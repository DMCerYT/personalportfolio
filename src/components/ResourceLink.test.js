import { render, screen } from '@testing-library/react';
import ResourceLink from './ResourceLink';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children, ...props }) => <a href={to} data-router-link="true" {...props}>{children}</a>,
}), { virtual: true });

test('preserves router navigation for internal paths and safe external resource attributes', () => {
  render(<>
    <ResourceLink href="/projects/playpeek">Project</ResourceLink>
    <ResourceLink href="https://github.com/DMCerYT">Repository</ResourceLink>
  </>);
  expect(screen.getByRole('link', { name: 'Project' })).toHaveAttribute('data-router-link', 'true');
  expect(screen.getByRole('link', { name: 'Project' })).not.toHaveAttribute('target');
  expect(screen.getByRole('link', { name: 'Repository' })).toHaveAttribute('target', '_blank');
  expect(screen.getByRole('link', { name: 'Repository' })).toHaveAttribute('rel', 'noreferrer');
});
