import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Logo } from "@/components/logo";
import { navBarItem } from "@/shared";
//import { FaGithub, FaNpm, FaYarn } from "react-icons/fa";
import { ButtonATag } from "@/components";
import { personalInfo } from "@/shared";
import { faGithub, faNpm, faYarn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  const { networkLinks } = personalInfo;
  const [showMenu, setShowMenu] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <div className="xl:w-1/6 text-center -mt-4">
        <Logo />
      </div>
      <nav
        ref={navbarRef}
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0 justify-center" : "-left-full justify-end"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center  gap-10 transition-all duration-500 z-50`}
      >
        {navBarItem.map((navOptions) => (
          <a key={navOptions.item} href={navOptions.link} className="">
            {navOptions.item}
          </a>
        ))}
        <ButtonATag
          className="bg-gray-50  text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 ml-2"
          href={networkLinks.github}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
        </ButtonATag>
        <ButtonATag
          className="bg-gray-50  text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 ml-2"
          href="https://www.npmjs.com/package/@sentry-pkg/pkg"
        >
          <img src="NPM.svg" width={25} height={25} alt="NPM" />
        </ButtonATag>
        <ButtonATag
          className="bg-gray-50  text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 ml-2"
          href="https://yarnpkg.com/package?q=sentry-pkg&name=%40sentry-pkg%2Fpkg"
        >
          <FontAwesomeIcon icon={faYarn} size="xl" />
        </ButtonATag>
      </nav>
      <button onClick={toggleMenu} className="xl:hidden text-2xl p-2">
        {showMenu ? <X /> : <Menu />}
      </button>
    </header>
  );
};
