import web5 from "../../assets/images/web5.png";
import web6 from "../../assets/images/web6.png";

import taxi from "../../assets/images/taxi.png";
import wallfeed from "../../assets/images/wallfeed.png";
import pharmacy from "../../assets/images/pharmacy.png";
import musicphreak from "../../assets/images/musicphreak.png";
import restaurant from "../../assets/images/restaurant.png";

import Waves from "../venta/waves";

interface ProjectProps {
  key?: number;
  name: string;
  img: any;
  description: string;
}

const projects = [
  {
    name: "Taxi",
    img: taxi,
    description:
      "“Taxi App” was a client project i did during my full time employment.\
        it was done on a very tight deadline under minimum supervision. \
        It is like a clone of uber/ola.",
  },
  {
    name: "Wallfeed",
    img: wallfeed,
    description:
      "WallFeed is a chrome extension. In this extension users can see posts \
       and users can suggest the post url to admin. Admin can approve/reject \
       users suggestions and if admin approves the suggestion then post displays \
       on the home page.",
  },
  {
    name: "Pharmacy",
    img: pharmacy,
    description:
      "Pharmacy App is a mobile app and built for android and ios. \
      In this app users can book pharmacies then app finds the nearby \
      delivery agents (around rage in 3 km). When agents accept the booking \
      then the app holds the delivery amount. This app uses the credit score \
      (Aduro money) as well.",
  },
  {
    name: "Musicphreak",
    img: musicphreak,
    description:
      "“Musicphreak” is a clone of Gaana.com. It was a my personal \
        project i did during my free time. I had used Beautiful Soup \
        (Python package) to scrap some music sites and store data in my \
        db and build rest APIs in Express and ui in react.",
  },
  {
    name: "SoS App",
    img: web5,
    description:
      "SoS is an insolent app meant for Software Development teams to \
       be more effective in creating good quality software. It does so \
       by bringing transparency in your team and by aiming to save\
       you from meetings.",
  },
  {
    name: "Restaurant",
    img: restaurant,
    description:
      "Resto Find is an app which users can find and book restaurants.\
       It is Zomato clone. In this app users can add their restaurant \
       then admin can approve/reject it. Users can login with Google, \
       faceBook or create app account. This app provides deals \
       and offers to users as well.",
  },
];

const Tile2 = (p: ProjectProps) => {
  return (
    <>
      <div className="p-10 rounded-md border border-gray-200 dark:border-gray-800 hover:p-0">
        <div className="proj-imgbx flex justify-center h-full w-full">
          <img
            className=" object-center object-scale-down"
            width={"80%"}
            height={"80%"}
            src={p.img}
          />
          <div className="proj-txtx text-light p-3">
            <h4>{p.name}</h4>
            <span>{p.description}</span>
          </div>
        </div>
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <section className="pad py-10 min-h-auto ">
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

        <div className="px-10 mt-5 grid grid-cols-1 gap-4 xl:grid-cols-3 md:grid-cols-2">
          {projects.map((t: ProjectProps, index: number) => (
            <Tile2
              name={t.name}
              img={t.img}
              description={t.description}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
