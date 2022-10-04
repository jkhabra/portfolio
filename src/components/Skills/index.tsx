import data from './tilesData.json';

const tileData = data?.list;

interface SkillsProps {
    title: string;
    dis: string;
    options: string[];
}

const Tile = (p: SkillsProps) => {
    return (
        <>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                    {p.title}
                </h3>
                <p className="py-2">
                    {p.dis}
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                {p.options.map((tex: string, index: number) =>
                    <p key={index} className="text-gray-800 py-1">{tex}</p>
                )}
            </div>
        </>
    )
}

const Skills = () => {
    return (
        <>
            <section>
                <div>
                    <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
                    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                        Since the beginning of my journey as a freelance designer and
                        developer, I've done remote work for
                        <span className="text-teal-500"> agencies </span>
                        consulted for <span className="text-teal-500">startups </span>
                        and collaborated with talanted people to create digital products
                        for both business and consumer use.
                    </p>
                    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                        I offer from a wide range of services, including brand design,
                        programming and teaching.
                    </p>
                </div>
                <div className="lg:flex gap-10">

                    {tileData.map((t: SkillsProps, index: number) =>
                        <Tile key={index} title={t.title} dis={t.dis} options={t.options} />
                    )}

                </div>
            </section>
        </>
    )
}

export default Skills;