export function FrameFX() {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute top-2 right-2 left-2 h-px bg-current
                   origin-left scale-x-0 transition-transform duration-300
                   group-hover:scale-x-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-2 bottom-2 left-2 h-px bg-current
                   origin-right scale-x-0 transition-transform duration-300 delay-75
                   group-hover:scale-x-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-2 bottom-2 left-2 w-px bg-current
                   origin-top scale-y-0 transition-transform duration-300 delay-150
                   group-hover:scale-y-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-2 right-2 bottom-2 w-px bg-current
                   origin-bottom scale-y-0 transition-transform duration-300 delay-200
                   group-hover:scale-y-100"
      />
    </>
  );
}
