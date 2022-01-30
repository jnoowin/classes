import React from "react";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactChild;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {React.Children.map(children, (component, index) => component)}
    </>
  );
}

export default Layout;
