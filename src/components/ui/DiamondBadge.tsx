type DiamondBadgeProps = {
  children: string;
  small?: boolean;
  className?: string;
};

/** Losango dourado com inicial — elemento de identidade do estúdio. */
export default function DiamondBadge({
  children,
  small = false,
  className = "",
}: DiamondBadgeProps) {
  return (
    <div className={`diamond-badge${small ? " small" : ""} ${className}`.trim()}>
      <span>{children}</span>
    </div>
  );
}
