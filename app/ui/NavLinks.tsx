"use client";

import {
  DocumentIcon,
  HomeIcon,
  DocumentCheckIcon,
  MicrophoneIcon,
  PhotoIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Update Resume",
    href: "/dashboard/update-resume",
    icon: DocumentIcon,
  },
  {
    name: "Create Cover Letter",
    href: "/dashboard/cover-letter",
    icon: DocumentCheckIcon,
  },
  {
    name: "Transcribe Audio from Video",
    href: "/dashboard/transcribe-audio",
    icon: MicrophoneIcon,
  },
  {
    name: "Create AI Generated Images",
    href: "/dashboard/image-generation",
    icon: PhotoIcon,
  },
  {
    name: "Create SQL Queries",
    href: "/dashboard/sql-queries",
    icon: QuestionMarkCircleIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-1 rounded-md p-1 text-sm md:text-base font-medium hover:bg-mainPageGray hover:text-black md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-mainPageGray text-black": pathname === link.href,
              },
              "mb-1"
            )}
          >
            {LinkIcon && <LinkIcon className="w-6" />}
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
