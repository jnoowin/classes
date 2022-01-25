import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

interface SchoolProps {
  name: string;
  classes: string[];
}

interface DisclosureOpen {
  open?: boolean;
}

function School({ name, classes }: SchoolProps) {
  const schoolRenderProp = ({ open = true }: DisclosureOpen) => (
    <>
      <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-white bg-space-cadet rounded-lg hover:bg-poop">
        <span className="text-2xl">{name}</span>
        <ChevronUpIcon
          className={`${
            open ? "transform rotate-180" : ""
          } w-5 h-5 text-white self-center`}
        />
      </Disclosure.Button>
      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 rounded-lg bg-white">
        If you're unhappy with your purchase for any reason, email us within 90
        days and we'll refund you in full, no questions asked.
      </Disclosure.Panel>
    </>
  );

  return (
    <div className="w-full md:max-w-5xl p-2 mx-auto my-2">
      <Disclosure>{schoolRenderProp}</Disclosure>
    </div>
  );
}

export default School;
