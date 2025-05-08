import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosurePanel,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import styles from "./Navigation.module.css";
import { Link } from "react-router";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className={styles.sectionContainer}>
      <nav
        aria-label="Global"
        className={"mx-auto flex items-center justify-between p-6 lg:px-8 "}
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <div className={styles.navLink}>
            <Link to="/" className="text-sm/6 font-semibold text-gray-900">
              Home
            </Link>
          </div>
          <div className={styles.navLinksGroup}>
            <Link
              to="/projects"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Skills and Technologies
            </Link>
            <Link
              to="/certificates"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Certificates
            </Link>
            <Link to="/cv" className="text-sm/6 font-semibold text-gray-900">
              CV
            </Link>
          </div>
          <div className={styles.navLink + " " + styles.lastLink}>
            <Link
              to="/contacts"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Contacts
            </Link>
          </div>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosurePanel className="mt-2 space-y-2"></DisclosurePanel>
                </Disclosure>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Projects
                </Link>
                <Link
                  to="/skills"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Skills and Technologies
                </Link>
                <Link
                  to="/cv"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  CV
                </Link>
                <Link
                  to="/contacts"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contacts
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </section>
  );
}
