"use client";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import {  LogOut } from "lucide-react";

type UserType = {
  name: string;
  email?: string | null;
  image?: string | null;
};

type Props = {
  user: UserType;
};

export default function UserAvatarDropdown({ user }: Props) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="User menu"
        className="relative h-9 w-9 rounded-full overflow-hidden border border-purple-500 hover:scale-105 transition focus:outline-none"
      >
        <Image
          src={user.image || "/avatar-placeholder.png"}
          alt="User Avatar"
          fill
          className="object-cover"
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-56 rounded-xl bg-[#120A2A] border border-purple-500/20 shadow-xl z-50">
          
          {/* User Info */}
          <div className="px-4 py-3 border-b border-white/10">
            <p className="text-sm font-semibold truncate">{user.name}</p>
            {user.email && (
              <p className="text-xs text-gray-400 truncate">{user.email}</p>
            )}
          </div>

          {/* Menu */}
          <div className="py-1">
           

            <button
              onClick={() => {
                setOpen(false);
                // Replace with NextAuth signOut() or JWT logout
                window.location.href = "/logout";
              }}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
