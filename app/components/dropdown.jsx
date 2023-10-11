
import { useState } from "react";
import { DropdownMenu, Transition } from "@headlessui/react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger>
        <button
          type="button"
          className="inline-flex items-center justify-center w-full rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white hover:bg-green-700"
          onClick={handleToggle}
          data-dropdown-toggle="dropdownMenu"
        >
          Show: Whole week
        </button>
      </DropdownMenu.Trigger>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <DropdownMenu.Content className="relative">
          <ul className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <li className="py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100">
              <a href="#">Whole week</a>
            </li>
            <li>
              <div className="border-t border-gray-200"></div>
              <li className="py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100">
                <a href="#">Today</a>
              </li>
            </li>
            <li>
              <div className="border-t border-gray-200"></div>
              <li className="py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100">
                <a href="#">Tomorrow</a>
              </li>
            </li>
          </ul>
        </DropdownMenu.Content>
      </Transition>
    </DropdownMenu>
  );
};

export default Dropdown;
