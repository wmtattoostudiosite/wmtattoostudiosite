export function getHeaderHeight(): number {
  if (typeof document === "undefined") return 90;

  const raw = getComputedStyle(document.documentElement).getPropertyValue("--header-height");
  const parsed = Number.parseFloat(raw);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 90;
}

export function scrollToAnchor(href: string, behavior: ScrollBehavior = "smooth"): boolean {
  if (!href.startsWith("#") || href === "#") return false;

  const id = decodeURIComponent(href.slice(1));
  const target = document.getElementById(id);
  if (!target) return false;

  const top = target.getBoundingClientRect().top + window.scrollY - getHeaderHeight();
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}
