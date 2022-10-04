import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const Layout = () => {
    const [activeTheme, setTheme] = useThemeSwitcher();
    const theme = activeTheme === 'dark' ? 'dark' : 'ligt';

    return (
        <div className="text-primary-dark dark:text-primary-light">
            <div onClick={() => setTheme(theme)}>
                hello world
            </div>
        </div>
    )
}

export default Layout;