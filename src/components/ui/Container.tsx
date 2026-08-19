import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "nav";
};

/**
 * Container reutilizável com largura máxima e padding consistentes.
 */
export default function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={`container-custom ${className}`.trim()}>
      {children}
    </Component>
  );
}
