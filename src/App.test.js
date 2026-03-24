import { render, screen } from '@testing-library/react';

jest.mock(
  'react-router-dom',
  () => ({
    Link: ({ children, to }) => <a href={to}>{children}</a>,
  }),
  { virtual: true }
);

import Home from './pages/Home';

test('renders home call to action', () => {
  render(<Home />);
  expect(screen.getByText(/view projects/i)).toBeInTheDocument();
});
