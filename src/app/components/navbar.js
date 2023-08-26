import React, { useContext } from 'react'
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { GlobalThemeContext } from '../context/themeContext';

export const Navbar = () => {
    const val = useContext(GlobalThemeContext);
    const {toggleTheme,backgroundTheme,textTheme,currentLogo,isDarkMode} = val;

  return (
    <nav class={`${backgroundTheme} px-4 lg:px-6 py-2.5`}>
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" class="flex items-center">
              <img
                src={currentLogo}
                class="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span
                class={`self-center text-xl font-semibold whitespace-nowrap ${textTheme}`}
              >
                BlockFlow
              </span>
            </a>
            <div
              class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <button class={`${textTheme} block py-4 pr-1 pl-1`}>
                    DOCS
                  </button>
                </li>
                <li>
                  <button class={`${textTheme} block py-4 pr-1 pl-1`}>
                    BLOG
                  </button>
                </li>
                <li>
                  <button class={`${textTheme} block py-4 pr-1 pl-1`}>
                    PRICING
                  </button>
                </li>
                <li>
                  <button class={`${textTheme} block py-4 pr-1 pl-1`}>
                    CONTACT US
                  </button>
                </li>
                <li>
                  {/* <button onClick={toggleTheme} class={`${textTheme} block p py-4 pr-1 pl-1`} >Theme</button> */}
                  <DarkModeSwitch
                    class={`${textTheme} block p py-4 pr-1 pl-1`}
                    checked={isDarkMode}
                    onChange={toggleTheme}
                    size={60}
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
  )
}
