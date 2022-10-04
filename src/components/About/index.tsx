const About = () => {
    return (
        <>
            <section>
                <div className="text-center p-10 py-10">
                    <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                        J Khabra
                    </h2>
                    <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                        Fullstack Developer.
                    </h3>
                    <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                        Freelancer providing services for programming and design content
                        needs. Join me down below and let's get cracking!
                    </p>

                    <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;