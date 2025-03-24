import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return <main className="auth">{children}</main>;
}
