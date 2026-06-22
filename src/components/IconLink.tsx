import type { Icon } from "@phosphor-icons/react";

type IconLinkProps = {
  href: string;
  label: string;
  icon: Icon;
};

export function IconLink({ href, label, icon: IconComponent }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors duration-150 hover:border-accent hover:text-accent active:scale-[0.97]"
    >
      <IconComponent size={18} weight="regular" aria-hidden />
    </a>
  );
}
