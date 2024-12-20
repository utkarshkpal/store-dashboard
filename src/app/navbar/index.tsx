import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const NavbarItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    iconPath: "/icons/home.svg",
  },
  {
    name: "Chat",
    href: "/chat",
    iconPath: "/icons/chat.svg",
  },
  {
    name: "Group",
    href: "#",
    iconPath: "/icons/group.svg",
  },
  {
    name: "Settings",
    href: "#",
    iconPath: "/icons/settings.svg",
  },
];

const Navbar = () => {
  return (
    <div className="hidden md:flex md:fixed h-screen top-0 left-0 bg-brand flex-col w-[60px] items-center px-3.5 py-6">
      <Image src="/icons/logo.svg" alt="Logo" width={33.2} height={33.2} />
      <div className="my-8 w-full border-t border-secondaryBlack opacity-40" />
      <div className="flex w-full h-full flex-col items-center gap-[22px]">
        {NavbarItems.map((item, index) => {
          return (
            <Link
              className={cn(
                "flex",
                "items-center",
                "justify-center",
                "h-9",
                "rounded-lg",
                "w-9",
                index === NavbarItems.length - 1 && "mt-auto"
              )}
              key={item.name}
              href={item.href}
            >
              <Image
                src={item.iconPath}
                alt={item.name}
                width={15}
                height={15}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
