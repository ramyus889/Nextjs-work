"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Client() {
  const pathname = usePathname();
  return (
    <header className="text-[20px] py-4 ps-4 flex  border-b-2">
      <Link
        className={` border-r-2 pe-5 ${pathname === "/" ? "text-red-500" : ""}`}
        href="/"
      >
        Click to Home
      </Link>
      <Link
        className={` border-r-2 pe-5 ps-5 ${
          pathname === "/client/settings" ? "text-red-500" : ""
        }`}
        href="/client/settings"
        scroll={false}
      >
        Click to Settings
      </Link>
      <Link
        className={` border-r-2 pe-5 ps-5 ${
          pathname === "/client" ? "text-red-500" : ""
        }`}
        href="/client"
      >
        Click to Client
      </Link>
      <Link
        className={` ps-5 ${pathname === "/about" ? "text-red-500" : ""}`}
        href="/about"
      >
        Click to Date
      </Link>
    </header>
  );
}
