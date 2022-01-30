/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 h-16 flex items-center">
      <Link href="/">
        <a className="text-2xl font-bold text-white ml-6">CoUVA</a>
      </Link>
    </Disclosure>
  );
}
