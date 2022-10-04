import { BsFillMoonStarsFill } from "react-icons/bs";

import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const Header = () => {
    const [activeTheme, setTheme] = useThemeSwitcher();
    const theme = activeTheme === 'dark' ? 'dark' : 'ligt';

    return (
        <>
            <nav className="font-burtons py-10 mb-12 flex justify-between dark:text-white">
                <h1 className="font-burtons text-xl">JKhabra</h1>
                <ul className="flex items-center">
                    <li>
                        <BsFillMoonStarsFill
                            onClick={() => setTheme(theme)}
                            className=" cursor-pointer text-2xl"
                        />
                    </li>
                    <li>
                        <a
                            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                            href="#"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header;