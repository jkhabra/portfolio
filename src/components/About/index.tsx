import design from "../../assets/images/dev-ed-wave.png";


const About = () => {
    return (
        <>
            <section>
                <div className="flex flex-col-reverse md:flex-row items-center gap-x-20 mb-10">
                    <div>
                        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                            J Khabra
                        </h2>
                        <h3 className="text-2xl py-2 dark:text-primary-light md:text-3xl">
                            Fullstack Developer.
                        </h3>
                        <p className="text-md py-5 leading-8 text-gray-800 dark:text-secondary-light max-w-md md:text-xl">
                            Freelancer providing services for programming and design content
                            needs. Join me down below and let's get cracking!
                        </p>
                    </div>

                    <div className="bg-gradient-to-b from-teal-500 rounded-full relative overflow-hidden w-72 h-72 md:w-52 md:h-52 ">
                        <img className=" w-full h-full" src={design} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;