import React from "react";

export default function Button({
  children,
  variant = "ghost",
  icon: Icon,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  target,
  rel,
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-sm text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  let variantClasses = "";
  if (variant === "inverse") {
    variantClasses = "bg-inverse-bg text-inverse-fg font-bold hover:bg-text-primary";
  } else if (variant === "accent") {
    variantClasses = "bg-accent text-accent-fg font-bold hover:bg-accent-strong";
  } else {
    variantClasses = "bg-transparent border border-border text-text-primary hover:border-border-strong";
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        onClick={onClick}
      >
        {Icon && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </button>
  );
}
