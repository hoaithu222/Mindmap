"use client";
import Link from "next/link";
import "./style.css";
import { usePathname } from "next/navigation";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import { MenuIcon } from "lucide-react";


const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return response.json();
};

export default function Menu() {
  const { user, isLoading } = useUser();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: users, error } = useSWR(
    process.env.NEXT_PUBLIC_SERVER_API ? `${process.env.NEXT_PUBLIC_SERVER_API}/users` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  const activeItem = (path) => {
    return path === pathname;
  };

  useEffect(() => {
    const checkAndAddUser = async () => {
      if (!user || !users) return;

      const userExists = users.some(
        (existingUser) => existingUser.sub === user.sub || existingUser.email === user.email
      );

      if (!userExists) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/users`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });

          if (response.ok) {
            mutate(`${process.env.NEXT_PUBLIC_SERVER_API}/users`);
          }
        } catch (error) {
          console.error("Error adding user:", error);
        }
      }
    };

    checkAndAddUser();
  }, [user, users]);
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.inner-menu')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);


  return (
    <div className="inner-menu relative">
      {/* Mobile menu button */}
      <button
        className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block p-2 rounded-md hover:bg-gray-100"
        onClick={(e) => {
          e.stopPropagation();
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        {isMenuOpen ? (
          <X className="h-6 w-6 text-blue-500" />
        ) : (
          <MenuIcon className="h-6 w-6 text-blue-500" />
        )}
      </button>

      {/* Navigation and Auth Container */}
      <div className={`
        ${isMenuOpen ? 'flex' : 'hidden'}
        sm:absolute sm:top-14 sm:left-0 sm:w-full sm:bg-white sm:shadow-lg sm:rounded-lg sm:p-4
        md:flex md:relative md:top-auto md:left-auto md:w-auto md:bg-transparent md:shadow-none md:p-0
        lg:flex lg:relative lg:top-auto lg:left-auto lg:w-auto lg:bg-transparent lg:shadow-none lg:p-0
        xl:flex xl:relative xl:top-auto xl:left-auto xl:w-auto xl:bg-transparent xl:shadow-none xl:p-0
        2xl:flex 2xl:relative 2xl:top-auto 2xl:left-auto 2xl:w-auto 2xl:bg-transparent 2xl:shadow-none 2xl:p-0
      `}>
        {/* Navigation Menu */}
        <ul className="
          sm:flex sm:flex-col sm:w-full sm:space-y-2
          md:flex-row md:items-center md:space-y-0 md:space-x-4
          lg:flex-row lg:items-center lg:space-y-0 lg:space-x-6
          xl:flex-row xl:items-center xl:space-y-0 xl:space-x-8
          2xl:flex-row 2xl:items-center 2xl:space-y-0 2xl:space-x-10
        ">
          <li>
            <Link
              href="/"
              className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${activeItem("/") ? "active bg-blue-500 text-white" : "hover:bg-blue-50"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Trang Chủ
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${activeItem("/about") ? "active bg-blue-500 text-white" : "hover:bg-blue-50"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Giới Thiệu
            </Link>
          </li>
          <li>
            <Link
              href="/features"
              className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${activeItem("/features") ? "active bg-blue-500 text-white" : "hover:bg-blue-50"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Tính năng
            </Link>
          </li>
          <li>
            <Link
              href="/price"
              className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${activeItem("/price") ? "active bg-blue-500 text-white" : "hover:bg-blue-50"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Bảng giá
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${activeItem("/contact") ? "active bg-blue-500 text-white" : "hover:bg-blue-50"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Liên hệ
            </Link>
          </li>

          {/* Auth Section - Now part of the menu on mobile */}
          <li className="
            sm:border-t sm:mt-4 sm:pt-4
            md:border-none md:mt-0 md:pt-0 md:ml-4
            lg:border-none lg:mt-0 lg:pt-0 lg:ml-6
            xl:border-none xl:mt-0 xl:pt-0 xl:ml-8
            2xl:border-none 2xl:mt-0 2xl:pt-0 2xl:ml-10
          ">
            {user ? (
              <div className="
                sm:flex sm:flex-col sm:space-y-2
                md:flex-row md:items-center md:space-y-0 md:space-x-4
                lg:flex-row lg:items-center lg:space-y-0 lg:space-x-4
                xl:flex-row xl:items-center xl:space-y-0 xl:space-x-4
                2xl:flex-row 2xl:items-center 2xl:space-y-0 2xl:space-x-4
              ">
                <span className="text-blue-600 font-medium">Hi, {user.name}</span>
                <Link
                  href="/my-mindmap"
                  className="block py-2 px-4 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mindmap
                </Link>
                <Link
                  href="/api/auth/logout"
                  className="block py-2 px-4 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Đăng xuất
                </Link>
              </div>
            ) : (
              <div className="
                sm:flex sm:flex-col sm:space-y-2
                md:flex-row md:items-center md:space-y-0 md:space-x-4
                lg:flex-row lg:items-center lg:space-y-0 lg:space-x-4
                xl:flex-row xl:items-center xl:space-y-0 xl:space-x-4
                2xl:flex-row 2xl:items-center 2xl:space-y-0 2xl:space-x-4
              ">
                <Link
                  href="/api/auth/login"
                  className="block py-2 px-4 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Đăng nhập
                </Link>
                <Link
                  href="/api/auth/login"
                  className="block py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Đăng kí
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}