import React from "react";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center pt-10">
        {React.Children.map(children, (component) => component)}
      </main>
    </>
  );
}

export default Layout;
