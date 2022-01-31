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
      <Disclosure.Button className="w-full p-5 min-w-min flex justify-between rounded-2xl bg-midnight-blue  hover:bg-blue-900">
        <span className="text-3xl font-medium text-left text-white">
          {name}
        </span>
        <ChevronUpIcon
          className={`${
            open ? "transform -rotate-180" : ""
          } w-5 h-5 text-white self-center ease-in-out duration-100`}
        />
      </Disclosure.Button>
      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-white">
        If you're unhappy with your purchase for any reason, email us within 90
        days and we'll refund you in full, no questions asked.
      </Disclosure.Panel>
    </>
  );

  return <Disclosure defaultOpen>{schoolRenderProp}</Disclosure>;
}

export default School;
