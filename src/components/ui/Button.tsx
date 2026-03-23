"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="
        px-6
        py-3
        rounded-xl
        font-semibold
        text-white
        bg-gradient-to-r
        from-purple-600
        to-indigo-600
        hover:scale-105
        transition
        shadow-lg
        shadow-purple-500/30
      "
    >
      {children}
    </button>
  );
}