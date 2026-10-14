export function Logo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g fill="currentColor">
        <circle cx="17" cy="16" r="8" />
        <circle cx="31" cy="16" r="8" />
        <circle cx="17" cy="30" r="8" />
        <circle cx="31" cy="30" r="8" />
      </g>
    </svg>
  );
}
