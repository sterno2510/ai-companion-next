"use client";

// import {
//   UserGroupIcon,
//   HomeIcon,
//   DocumentDuplicateIcon,
// } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard" },
  // { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Update Resume",
    href: "/dashboard/update-resume",
    // icon: DocumentDuplicateIcon,
  },
  //   { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
  { name: "Create Cover Letter", href: "/dashboard/cover-letter" },
  {
    name: "Transcribe Audio from Video",
    href: "/dashboard/transcribe-audio",
    // icon: DocumentDuplicateIcon,
  },
  {
    name: "Create AI Generated Images",
    href: "/dashboard/image-generation",
    // icon: DocumentDuplicateIcon,
  },
  {
    name: "Create SQL Queries",
    href: "/dashboard/sql-queries",
    // icon: DocumentDuplicateIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        // const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-1 rounded-md p-1 text-base font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              },
              "mb-1"
            )}
          >
            {/* <LinkIcon className="w-6" /> */}
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
