import detailStyles from '../styles/projectDetail.module.css';

export default function DetailPanel({
  title,
  children,
  fullWidth = false,
}) {
  return (
    <article className={`${detailStyles.panel} ${fullWidth ? detailStyles.fullWidth : ''}`.trim()}>
      <h2>{title}</h2>
      {children}
    </article>
  );
}
