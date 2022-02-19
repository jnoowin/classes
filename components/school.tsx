import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";
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
      <Disclosure.Button className="w-full p-3 flex justify-between rounded-lg bg-midnight-blue  hover:bg-blue-900">
        <span className="text-lg sm:text-2xl font-medium text-left text-white">
          {name}
        </span>
        <ChevronUpIcon
          className={`${
            open ? "transform -rotate-180" : ""
          } w-5 h-5 text-white self-center ease-in-out duration-100`}
        />
      </Disclosure.Button>
      <Transition
        as={React.Fragment}
        enter="transition-all"
        enterFrom="transform h-0"
        enterTo="transform h-10"
      >
        <Disclosure.Panel className="px-4 mt-2 text-sm overflow-hidden rounded-lg shadow-lg text-gray-500 bg-white">
          If you're unhappy with your purchase for any reason, email us within
          90 days and we'll refund you in full, no questions asked. If you're
          unhappy with your purchase for any reason, email us within 90 days and
          we'll refund you in full, no questions asked. If you're unhappy with
          your purchase for any reason, email us within 90 days and we'll refund
          you in full, no questions asked. If you're unhappy with your purchase
          for any reason, email us within 90 days and we'll refund you in full,
          no questions asked.
        </Disclosure.Panel>
      </Transition>
    </>
  );

  return <Disclosure defaultOpen>{schoolRenderProp}</Disclosure>;
}

export default School;
