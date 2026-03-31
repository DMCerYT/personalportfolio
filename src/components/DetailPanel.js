import detailStyles from '../styles/projectDetail.module.css';
import UnderConstruction from './UnderConstruction';

export default function DetailPanel({
  title,
  children,
  fullWidth = false,
  isUnderConstruction = false, // This prop can be used to conditionally render an "Under Construction" message or placeholder content if needed in the future
}) {
  return (
    <article className={`${detailStyles.panel} ${fullWidth ? detailStyles.fullWidth : ''}`.trim()}>
      <h2>{title}</h2>
      {children}
      {isUnderConstruction ? (<UnderConstruction />) : null}
    </article>
  );
}
