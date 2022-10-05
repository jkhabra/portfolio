import design from "../../assets/images/dev-ed-wave.png";
import config from "../../config";

const About = () => {
    return (
        <>
            <section>

                <div className=" min-h-[40em] flex flex-col-reverse md:flex-row items-center gap-x-20 mb-10">
                    <div>
                        <h2 className="text-5xl py-2 text-highlight-600 font-medium dark:text-highlight-400 md:text-6xl">
                            Hi, I am {config.appName}
                        </h2>
                        <h3 className="text-2xl py-2 text-dark-300 dark:text-light md:text-3xl">
                            Fullstack Developer.
                        </h3>
                        <p className="text-md py-5 leading-8 text-gray-800 dark:text-light-300 max-w-md md:text-xl">
                            A passionate Full Stack Software Developer 🚀 having an experience of building Web
                            and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some 
                            other cool libraries and frameworks.
                        </p>
                    </div>

                    <div className="bg-gradient-to-b from-highlight-500 rounded-full relative overflow-hidden w-72 h-72 md:w-52 md:h-52 ">
                        <img className=" w-full h-full" src={design} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;