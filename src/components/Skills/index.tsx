import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaSass,
    FaJsSquare,
    FaNode,
    FaNpm,
    FaPython,
    FaDocker,
} from "react-icons/fa";
import { DiMongodb, DiPostgresql } from 'react-icons/di';
import { SiHasura, SiExpress, SiGraphql, SiFlask } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const tileData = [
    { name: "html-5", icon: FaHtml5 },
    { name: "Css--3", icon: FaCss3Alt },
    { name: "sass", icon: FaSass },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "nodejs", icon: FaNode },
    { name: "expressjs", icon: SiExpress },
    { name: "reactjs", icon: FaReact },
    { name: "nextjs", icon: TbBrandNextjs },
    { name: "npm", icon: FaNpm },
    { name: "python", icon: FaPython },
    { name: "flask", icon: SiFlask },
    { name: "GraphQL", icon: SiGraphql },

    { name: "docker", icon: FaDocker },
    { name: "MongoDB", icon: DiMongodb },
    { name: "PostgreSQL", icon: DiPostgresql },
    { name: "hasura", icon: SiHasura },
];

interface SkillsProps {
    name: string;
    icon: any;
}

const Tile = (p: SkillsProps) => {
    return (
        <>
            <div className="flex flex-col gap-y-2 items-center text-gray-400">
                <p.icon className="w-[3em] h-[3em] hover:text-indigo-500" />
                <span className=" text-xs"> {p.name} </span>
            </div>
        </>
    );
};

const Proficientcy = () => {
    return (
        <div className="dark:text-light">
            <h3 className="text-3xl pb-5">Proficiency</h3>
            <div className="flex flex-col mb-5">
                <span className="mb-5">Frontend/Design</span>
                <div className="h-4 bg-gray-400 rounded-lg">
                    <span className=" bg-indigo-400 w-[85%] h-full rounded-lg border-none block" />
                </div>
            </div>

            <div className="flex flex-col mb-5">
                <span className="mb-5">Backend</span>
                <div className="h-4 bg-gray-400 rounded-lg">
                    <span className=" bg-indigo-400 w-[75%] h-full rounded-lg border-none block" />
                </div>
            </div>
            <div className="flex flex-col mb-5">
                <span className="mb-5">Programming</span>
                <div className="h-4 bg-gray-400 rounded-lg">
                    <span className=" bg-indigo-400 w-[90%] h-full rounded-lg border-none block" />
                </div>
            </div>
        </div>

    )
}

const Skills = () => {
    return (
        <>
            <section className="pad h-auto min-h-[25em] c-bg">
                <div className="">
                    <div>
                        <h3 className="text-3xl py-1 dark:text-light ">My Skillsets</h3>

                        <p className="text-md py-2 leading-8 text-dark-300 dark:text-light-300">
                            I offer from a wide range of services, including brand design,
                            programming and teaching.
                        </p>
                    </div>
                    <div className="h-auto w-full xl:w-[50%] md:w-[80%] py-10 flex gap-5 flex-wrap justify-self-auto">
                        {tileData.map((p: SkillsProps) => (
                            <Tile name={p.name} icon={p.icon} />
                        ))}
                    </div>
                    <Proficientcy />
                </div>
            </section>
        </>
    );
};

export default Skills;
