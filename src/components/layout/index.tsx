import Header from "./header";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";

const Layout = () => {
    return (
        <>
            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
                <div className="min-h-screen">
                    <Header />
                    <About />
                    <Skills />
                    <Projects />
                </div>
            </main>
        </>
    );
};

export default Layout;
