"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    {
      name: "Services",
      href: "/services",
      submenu: [
        { name: "Software Development", href: "/services/software-development" },
        { name: "Internet Computing", href: "/services/internet-computing" },
        { name: "Data Analysis", href: "/services/data-analysis" },
        { name: "DevOps Engineering", href: "/services/devops" },
      ]
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Link href="/" className="flex items-center space-x-6 text-2xl font-medium text-blue-600 dark:text-gray-100">
          <span>
            <Image
              src="/img/logo.jpg"
              width="100"
              height="100"
              alt="Ekspertas Engineering"
              className="w-20"
            />
          </span>
          <span className="hidden sm:inline-block">Ekspertas Engineering</span>
        </Link>

        {/* Contact & Theme */}
        <div className="flex gap-3 nav__item mr-3 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <a
            href="mailto:contact@ekspertas.co.zw"
            className="hidden lg:inline-block px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile menu button */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-blue-500 focus:text-blue-500 focus:bg-blue-50 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              {/* Mobile menu */}
              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {/* {navigation.map((item, index) => (
                    <div key={index} className="w-full">
                      <Link
                        href={item.href}
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-50 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="pl-4">
                          {item.submenu.map((subitem, subindex) => (
                            <Link
                              key={subindex}
                              href={subitem.href}
                              className="block px-4 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500"
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))} */}
                  <a
                    href="mailto:contact@ekspertas.co.zw"
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Contact Us
                  </a>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Desktop menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {/* {navigation.map((menu, index) => (
              <li className="relative group mr-3 nav__item" key={index}>
                <Link
                  href={menu.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-50 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu.name}
                </Link>
                {menu.submenu && (
                  <div className="absolute left-0 hidden pt-2 group-hover:block">
                    <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg">
                      {menu.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))} */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

