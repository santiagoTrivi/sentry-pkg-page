import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Logo } from "@/components/logo";
import { navBarItem } from "@/shared";
import { FaGithub } from "react-icons/fa";
import { ButtonATag } from "@/components";
import { personalInfo } from "@/shared";

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
          className="bg-gray-50 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 ml-2"
          href={networkLinks.github}
        >
          <FaGithub />
        </ButtonATag>
      </nav>
      <button onClick={toggleMenu} className="xl:hidden text-2xl p-2">
        {showMenu ? <X /> : <Menu />}
      </button>
    </header>
  );
};
