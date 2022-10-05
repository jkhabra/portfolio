import Header from "./header";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import AppFooter from "./footer";

const Layout = () => {
    return (
        <>
            <div className="min-h-screen">
                <Header />
                <About />
                <Skills />
                <Projects />
                <AppFooter />
            </div>
        </>
    );
};

export default Layout;
