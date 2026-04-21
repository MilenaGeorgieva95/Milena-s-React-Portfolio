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
      <div className={"page-content " + styles.wrapper}>
        <nav
          aria-label="Global"
          className={"mx-auto p-6 lg:px-8 " + styles.popoverGroup}
        >
          <div className={"flex lg:hidden " + styles.burgerBtn}>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <PopoverGroup
            className={"hidden lg:flex lg:gap-x-12 " + styles.popoverGroup}
          >
            <div className={styles.navLink}>
              <Link to="/" className={styles.homeBtn}>
                MILENA'S PORTFOLIO
              </Link>
            </div>
            <div className={styles.navLinksGroup}>
              <Link to="/cv">CV</Link>
            </div>
          </PopoverGroup>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm ${styles.mobilePanel}`}>
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
            <div className={styles.mobileMenu}>
              <div className={styles.mobileMenuInner}>
                <div
                  className={styles.mobileMenuLinks}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <a href="/" className={styles.mobileLink}>
                    Home
                  </a>

                  <a href="/cv" className={styles.mobileLink}>
                    CV
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </section>
  );
}
