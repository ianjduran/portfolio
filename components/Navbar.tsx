import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  {
    name: "Home",
    type: "internal",
    href: "/",
  },
  {
    name: "About",
    type: "internal",
    href: "/about",
  },
  {
    name: "Projects",
    type: "internal",
    href: "/projects",
  },
  {
    name: "Resume",
    type: "external",
    href: "https://drive.google.com/file/d/1KXRZaNrpHVHZFRE-Amym2TTo8yk1ao07/view",
  },
];

export default function Navbar() {
  const router = useRouter();
  return (
    <Popover className="relative bg-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-end py-6 md:space-x-10">
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <HiBars3 className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            {navItems.map((navItem, i) => {
              if (navItem.type == "external") {
                return (
                  <a
                    href={navItem.href}
                    key={i}
                    className="font-oxygen tracking-wider text-base font-semibold transition-colors ease-out text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    {navItem.name}
                  </a>
                );
              }
              return (
                <Link
                  href={navItem.href}
                  key={i}
                  className={"font-oxygen tracking-wider text-base font-semibold transition-colors ease-out text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"}
                >
                  {navItem.name}
                </Link>
              );
            })}
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-10"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-end justify-end">
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                    <HiXMark className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8 justify-center">
                  {navItems.map((navItem, i) => {
                    if (navItem.type == "external") {
                      return (
                        <a
                          href={navItem.href}
                          key={i}
                          className="font-oxygen tracking-wider text-base font-semibold transition-colors ease-out text-gray-500 hover:text-gray-900"
                        >
                          {navItem.name}
                        </a>
                      );
                    }
                    return (
                      <Link
                        href={navItem.href}
                        key={i}
                        className="font-oxygen tracking-wider text-base font-semibold transition-colors ease-out text-gray-500 hover:text-gray-900"
                      >
                        {navItem.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
