import Link from 'next/link';
import { FC, Fragment } from 'react';
import CartIcon from '../icons/cartIcon';
import { Popover, Transition } from '@headlessui/react';
import { BiMenuAltRight } from 'react-icons/bi';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'All Products', href: '/products' },
  { name: 'Categories', href: '/categories' },
  { name: 'Contact Us', href: '/contact' },
];

const Header: FC = () => {
  return (
    <Popover className="fixed top-0 z-50 ">
      <div className="relative shadow-sm pt-6 px-4 w-screen bg-white sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href={'/'}>
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                  <span className="sr-only">Workflow</span>
                  <span className="ml-3 text-xl font-bold text-primary">
                    mimi.
                  </span>
                </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  className="font-medium text-gray-700 hover:text-gray-900 mr-1"
                >
                  <CartIcon />
                </button>
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <BiMenuAltRight className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className="font-medium h-6 text-gray-500 hover:text-gray-900">
                    {item.name}
                  </a>
                </Link>
              ))}
              <button
                type="button"
                className="font-medium text-gray-500 hover:text-gray-900 mr-1"
              >
                <CartIcon />
              </button>
            </div>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Link href={'/'}>
                  <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl font-bold text-primary">
                      mimi.
                    </span>
                  </a>
                </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}X
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
            >
              Log in
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
