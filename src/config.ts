interface Config {
  appName: string;
  basename?: string;
  urls: { github?: string; twitter?: string; linkedin?: string };
}

const config: Config = {
  appName: "J Khabra",
  urls: { github: "https://github.com/jkhabra", twitter: "", linkedin: "" },
};

export default config;
