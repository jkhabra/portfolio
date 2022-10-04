import Header from "./header";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import AppFooter from "./footer";

const Layout = () => {
    return (
        <>
            <main className=" bg-primary-light px-10 dark:bg-primary-dark md:px-20 lg:px-40">
                <div className="min-h-screen">
                    <Header />
                    <About />
                    <Skills />
                    <Projects />
                    <AppFooter />
                </div>
            </main>
        </>
    );
};

export default Layout;
