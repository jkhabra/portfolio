import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiOutlineSun } from "react-icons/hi";

import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import config from "../../config";

const Header = () => {
    const [activeTheme, setTheme] = useThemeSwitcher();
    const theme = activeTheme === 'dark';

    const openInNewTab = (): void => {
        const newWindow = window.open(config.resumeUrl, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return (
        <>
            <nav className="font-burtons py-10 mb-12 flex justify-between text-primary-dark dark:text-light">
                <h1 className="font-burtons text-xl">{config.appName}</h1>
                <ul className="flex items-center">
                    <li>
                        {theme ?
                            <BsFillMoonStarsFill
                                onClick={() => setTheme('dark')}
                                className=" cursor-pointer text-2xl hover:scale-95"
                            />
                            : <HiOutlineSun onClick={() => setTheme('light')}
                                className=" cursor-pointer text-2xl hover:scale-95" />
                        }
                    </li>
                    <li className=" cursor-pointer">
                        <span
                        onClick={openInNewTab}
                            className="bg-gradient-to-r from-cyan-500 text to-highlight-500 text-light px-4 py-2 border-none rounded-md ml-8"
                        >
                            Resume
                        </span>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header;