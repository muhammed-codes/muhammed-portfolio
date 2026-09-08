import React from "react";

export default function FormField({
  label,
  name,
  type = "text",
  rows,
  placeholder,
  value,
  onChange,
  error,
  required = true,
}) {
  const isTextarea = type === "textarea";
  const Component = isTextarea ? "textarea" : "input";

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="font-mono text-caption uppercase tracking-caption text-text-muted font-medium flex items-center justify-between"
      >
        <span>{label}</span>
        {required && <span className="text-accent text-[10px]">*REQ</span>}
      </label>

      <Component
        id={name}
        name={name}
        type={!isTextarea ? type : undefined}
        rows={rows || (isTextarea ? 5 : undefined)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 bg-surface-alt border rounded-sm font-mono text-body-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-colors duration-200 resize-none ${
          error
            ? "border-accent"
            : "border-border hover:border-border-strong focus:border-border-accent"
        }`}
      />

      {error && (
        <span className="font-mono text-[11px] text-accent mt-0.5">
          ! {error}
        </span>
      )}
    </div>
  );
}
