function IconWrapper({ children, className = '' }) {
  return (
    <span className={className} aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none" role="presentation">
        {children}
      </svg>
    </span>
  );
}

export function AssistantIcon({ className }) {
  return (
    <IconWrapper className={className}>
      <path
        d="M15 10H46C48.2091 10 50 11.7909 50 14V39"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M15 10V49C15 51.2091 16.7909 53 19 53H33"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M24 20H41"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M24 28H41"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="39.5" cy="42.5" r="6.5" stroke="currentColor" strokeWidth="2.6" />
      <path
        d="M29 54C29 48.4772 33.4772 44 39 44H40C45.5228 44 50 48.4772 50 54"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </IconWrapper>
  );
}

export function ResearchIcon({ className }) {
  return (
    <IconWrapper className={className}>
      <path
        d="M19 11H45V52L32 43L19 52V11Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M31.5 11V25"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M32 25L40 18"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </IconWrapper>
  );
}

export function RetailIcon({ className }) {
  return (
    <IconWrapper className={className}>
      <path
        d="M15 25H49L46 17C45.4 15.2 43.7 14 41.8 14H22.2C20.3 14 18.6 15.2 18 17L15 25Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M18 25V49H46V25"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M15 25C15 29.4183 18.5817 33 23 33C27.4183 33 31 29.4183 31 25"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M31 25C31 29.4183 34.5817 33 39 33C43.4183 33 47 29.4183 47 25"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M24 49V39H40V49"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M28 43H36"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </IconWrapper>
  );
}
