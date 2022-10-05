import web5 from "../../assets/images/web5.png";
import web6 from "../../assets/images/web6.png";

import taxi from "../../assets/images/taxi.png";
import wallfeed from "../../assets/images/wallfeed.png";
import pharmacy from "../../assets/images/pharmacy.png";
import musicphreak from "../../assets/images/musicphreak.png";
import restaurant from "../../assets/images/restaurant.png";

interface ProjectProps {
  key?: number;
  name: string;
  img: any;
}

const projects = [
  { name: "Taki", img: taxi },
  { name: "Wallfeed", img: wallfeed },
  { name: "Pharmacy", img: pharmacy },
  { name: "Musicphreak", img: musicphreak },
  { name: "Web55", img: web5 },
  { name: "Restaurant", img: restaurant },
];

const Tile = (p: ProjectProps) => {
  return (
    <>
      <div className="rounded-md bg-gradient-to-r from-sky-500 to-indigo-500">
          <img
            className=" object-center object-scale-down"
            width={"100%"}
            height={"100%"}
            src={p.img}
          />
      </div>
    </>
  );
};

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
            and collaborated with talanted people to create digital products for
            both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p>
        </div>

        <div className="px-10 grid grid-cols-1 gap-4 xl:grid-cols-3 md:grid-cols-2">
          {projects.map((t: ProjectProps, index: number) => (
            <Tile name={t.name} img={t.img} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
