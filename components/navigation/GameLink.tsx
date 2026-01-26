"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function GameLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={() => {
        const delay = Math.floor(Math.random() * 2000) + 800;
        sessionStorage.setItem(
          "gameLoadingDelay",
          delay.toString()
        );
      }}
    >
      {children}
    </Link>
  );
}
