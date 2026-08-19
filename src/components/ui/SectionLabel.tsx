type SectionLabelProps = {
  children: string;
  centered?: boolean;
};

/** Rótulo de seção com filete dourado. */
export default function SectionLabel({ children, centered = false }: SectionLabelProps) {
  return (
    <div className={`section-label${centered ? " justify-center" : ""}`}>
      <div className="rule" />
      <span className="eyebrow">{children}</span>
      {centered && <div className="rule" />}
    </div>
  );
}
