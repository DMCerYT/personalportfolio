import { Link } from 'react-router-dom';

/** Keep app routes in the router; open external resources in a separate tab. */
export default function ResourceLink({ href, children, ...props }) {
  return href.startsWith('/') ? (
    <Link to={href} {...props}>{children}</Link>
  ) : (
    <a href={href} target="_blank" rel="noreferrer" {...props}>{children}</a>
  );
}
