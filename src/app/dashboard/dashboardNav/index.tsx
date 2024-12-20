"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    name: "Summary",
    href: "/dashboard",
    iconPath: "/icons/chart.svg",
  },
  {
    name: "Sales",
    href: "#",
    iconPath: "/icons/sales.svg",
  },
  {
    name: "Chat",
    href: "/chat",
    iconPath: "/icons/chat-secondary.svg",
  },
];

const DashboardNav = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex gap-4 px-10 py-4">
        <Image
          src="/icons/logo.svg"
          alt="Logo"
          width={33.2}
          height={33.2}
          className="md:hidden"
        />
        {items.map((item) => {
          const isActive = item.href === pathname;
          return (
            <div
              className={cn("p-3 rounded-full ", isActive && "bg-brandlight")}
              key={item.name}
            >
              <Link className="flex items-center gap-3" href={item.href}>
                <Image
                  src={item.iconPath}
                  alt={item.name}
                  width={16.25}
                  height={16.25}
                />
                <p>{item.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <hr className="border-gray-300" />
    </>
  );
};

export default DashboardNav;
