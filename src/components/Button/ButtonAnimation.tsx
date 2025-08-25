export const ButtonAnimation = () => (
  <>
    <span
      aria-hidden
      className="pointer-events-none absolute top-2 right-2 left-2 h-px origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100"
    />
    <span
      aria-hidden
      className="pointer-events-none absolute right-2 bottom-2 left-2 h-px origin-right scale-x-0 bg-current transition-transform delay-75 duration-300 group-hover:scale-x-100"
    />
    <span
      aria-hidden
      className="pointer-events-none absolute top-2 bottom-2 left-2 w-px origin-top scale-y-0 bg-current transition-transform delay-150 duration-300 group-hover:scale-y-100"
    />
    <span
      aria-hidden
      className="pointer-events-none absolute top-2 right-2 bottom-2 w-px origin-bottom scale-y-0 bg-current transition-transform delay-200 duration-300 group-hover:scale-y-100"
    />
  </>
);
