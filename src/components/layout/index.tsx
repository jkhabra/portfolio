import Header from "./header";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import AppFooter from "./footer";
import MyBirds from "../venta";
import UseScrollToTop from "../../hooks/useScrollToTop";

const Layout = () => {
    return (
        <>
            <div className="min-h-screen">
                <MyBirds>
                    <div className="pad">
                        <Header />
                        <About />
                    </div>
                </MyBirds>
                <Skills />
                <Projects />
                <UseScrollToTop />

                <AppFooter />
            </div>
        </>
    );
};

export default Layout;
