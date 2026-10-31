import ResourceLink from '../ResourceLink';

export default function ProjectResourceLinks({ links, className }) {
  return links.map(link => (
    <ResourceLink key={link.href} href={link.href} className={className}>
      {link.label}
    </ResourceLink>
  ));
}
