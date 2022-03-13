/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-space-cadet sticky top-0 left-0 right-0 h-14 flex items-center"
    >
      <Link href="/">
        <a className="text-2xl font-bold text-white ml-6">CoUVA</a>
      </Link>
    </Disclosure>
  );
}
