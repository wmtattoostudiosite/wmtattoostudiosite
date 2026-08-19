type LogoProps = {
  href?: string | null;
  className?: string;
};

/**
 * Logo oficial + nome do estúdio.
 */
export default function Logo({ href = "#inicio", className = "" }: LogoProps) {
  const content = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo_wm.webp"
        alt="WM Tattoo Studio"
        width={96}
        height={96}
        className="logo-mark"
      />
      <div className="logo-text">
        WM Tattoo Studio
        <small>Barretos · SP</small>
      </div>
    </>
  );

  if (href === null) {
    return <div className={`logo ${className}`.trim()}>{content}</div>;
  }

  return (
    <a href={href} className={`logo ${className}`.trim()}>
      {content}
    </a>
  );
}
