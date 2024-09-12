import Navigation from "@/components/Navigation";
import React from "react";

const links = [
  { title: "Teacher", href: "/about/teacher" },
  { title: "Student", href: "/about/student" },
];

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation items={links} />
      <div className='border border-red-600 min-h-[500px] grid items-center justify-center'>{children}</div>
    </div>
  );
}
