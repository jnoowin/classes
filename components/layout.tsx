import React from "react";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactChild[];
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-neutral-100 pt-10">
        {React.Children.map(children, (component) => component)}
      </div>
    </>
  );
}

export default Layout;
