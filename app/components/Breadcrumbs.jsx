"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () =>{
      const pathname = usePathname();
     const pathSegments = pathname
    .split("/")
    .filter((segment) => segment); // remove empty strings

  return (
      <nav
        className="absolute top-4 left-16 flex items-center gap-2 mt-10 text-white text-[8px]"
        style={{ zIndex: 10 }}
      >
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;
          return (
            <React.Fragment key={href}>
              <span className="mx-1">/</span>
              {isLast ? (
                <span className="capitalize">{segment}</span>
              ) : (
                <Link href={href} className="hover:underline capitalize">
                  {segment}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
  )

}

export default Breadcrumbs