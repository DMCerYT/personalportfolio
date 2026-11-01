import { render, screen, within } from '@testing-library/react';
import ProjectDecisions from './ProjectDecisions';

test('renders separate decision paragraphs and captioned evidence in one visible section', () => {
  render(<ProjectDecisions
    decision={['The first decision and its rationale.', 'The second decision and its tradeoff.']}
    artifacts={[{
      title: 'Search interface',
      src: '/images/projects/search.png',
      alt: 'Restaurant results alongside a map',
      caption: 'Numbered results connect each restaurant to its map marker.',
    }]}
  />);
  const section = screen.getByRole('heading', { name: 'Design decisions and rationale' }).closest('section');
  expect(section).toHaveAttribute('id', 'decisions');
  const first = within(section).getByText('The first decision and its rationale.');
  const second = within(section).getByText('The second decision and its tradeoff.');
  expect(first.tagName).toBe('P');
  expect(second.tagName).toBe('P');
  expect(first).not.toBe(second);
  expect(first).toBeVisible();
  expect(second).toBeVisible();
  const screenshot = within(section).getByRole('img', { name: 'Restaurant results alongside a map' });
  expect(screenshot).toHaveAttribute('src', '/images/projects/search.png');
  expect(within(screenshot.closest('figure')).getByText(/Numbered results connect/)).toBeVisible();
});

test('keeps single-paragraph projects and labeled placeholders working', () => {
  render(<ProjectDecisions decision="An existing decision." artifacts={[{ title: 'Prototype', caption: 'Evidence to add.' }]} />);
  expect(screen.getByText('An existing decision.')).toBeVisible();
  expect(screen.getByRole('img', { name: 'Placeholder for Prototype' })).toHaveAttribute('src', '/images/case-study-placeholder.svg');
});

test('places graphics between their associated paragraphs in authored order', () => {
  render(<ProjectDecisions decision={[
    { type: 'heading', text: 'A decision informed by research' },
    'First paragraph.',
    { type: 'image', title: 'First graphic', src: '/first.png', alt: 'First screenshot', caption: 'Evidence for the first decision.' },
    'Second paragraph.',
    'Third paragraph.',
    { type: 'image', title: 'Third graphic', src: '/third.png', alt: 'Third screenshot', caption: 'Evidence for the third decision.' },
  ]} />);
  const section = screen.getByRole('heading', { name: 'Design decisions and rationale' }).closest('section');
  const narrative = Array.from(section.children).slice(2);
  expect(narrative.map(element => element.tagName)).toEqual(['H3', 'P', 'DIV', 'P', 'P', 'DIV']);
  expect(within(section).getByRole('heading', { name: 'A decision informed by research', level: 3 })).toBeVisible();
  expect(narrative[1]).toHaveTextContent('First paragraph.');
  expect(within(narrative[2]).getByRole('img', { name: 'First screenshot' })).toHaveAttribute('src', '/first.png');
  expect(narrative[3]).toHaveTextContent('Second paragraph.');
  expect(narrative[4]).toHaveTextContent('Third paragraph.');
  expect(within(narrative[5]).getByRole('img', { name: 'Third screenshot' })).toHaveAttribute('src', '/third.png');
  expect(within(narrative[5]).getByText('Evidence for the third decision.')).toBeVisible();
});
