import web1 from "../../assets/images/web1.png"
import web2 from "../../assets/images/web2.png";
import web3 from "../../assets/images/web3.png";
import web4 from "../../assets/images/web4.png";
import web5 from "../../assets/images/web5.png";
import web6 from "../../assets/images/web6.png";

const projects = [web1, web2, web3, web4, web5, web6];

const Tile = (p: { image: string, key: number }) => {
    return (
        <>
            <div className="basis-1/3 flex-1 ">
                <img
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                    src={p.image}
                />
            </div>
        </>
    )
}

const Projects = () => {
    return (
        <>
            <section className="pad py-10">
                <div>
                    <h3 className="text-3xl py-1 dark:text-light ">Portofolio</h3>
                    <p className="text-md py-2 leading-8 text-gray-800 dark:text-light-300">
                        Since the beginning of my journey as a freelance designer and
                        developer, I've done remote work for
                        <span className="text-highlight-500"> agencies </span>
                        consulted for <span className="text-highlight-500">startups </span>
                        and collaborated with talanted people to create digital products
                        for both business and consumer use.
                    </p>
                    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                        I offer from a wide range of services, including brand design,
                        programming and teaching.
                    </p>
                </div>
                <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">

                    {projects.map((img: string, index: number) =>
                        <Tile image={img} key={index} />
                    )}

                </div>
            </section>
        </>
    )
}

export default Projects;