import design from "../../assets/images/dev-ed-wave.png";
import config from "../../config";

const About = () => {
    return (
        <>
            <section>

                <div className=" min-h-[40em] flex flex-col-reverse md:flex-row items-center gap-x-20 mb-10">
                    <div>
                        <h2 className="text-5xl py-2 text-highlight-600 font-medium dark:text-highlight-400 md:text-6xl">
                            {config.appName}
                        </h2>
                        <h3 className="text-2xl py-2 text-dark-300 dark:text-light md:text-3xl">
                            Fullstack Developer.
                        </h3>
                        <p className="text-md py-5 leading-8 text-gray-800 dark:text-light-300 max-w-md md:text-xl">
                            Freelancer providing services for programming and design content
                            needs. Join me down below and let's get cracking!
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