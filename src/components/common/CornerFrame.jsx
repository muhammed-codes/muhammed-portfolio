import React from "react";

export default function CornerFrame({ children, className = "", active = true }) {
  return (
    <div className={`relative ${className}`}>
      {active && (
        <>
          <span className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-border-accent pointer-events-none z-10" />
          <span className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-border-accent pointer-events-none z-10" />
          <span className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-border-accent pointer-events-none z-10" />
          <span className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-border-accent pointer-events-none z-10" />
        </>
      )}
      {children}
    </div>
  );
}
