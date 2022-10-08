interface Config {
  appName: string;
  basename?: string;
  urls: { github?: string; twitter?: string; linkedin?: string };
  resumeUrl: string;
}

const config: Config = {
  appName: "J Khabra",
  urls: { github: "https://github.com/jkhabra", twitter: "", linkedin: "" },
  resumeUrl: "https://docs.google.com/document/d/1zYgrsuVv4CCv_Eu07gP8cctDBoNVWOECTGt8eFooBJM/edit?usp=sharing"
};

export default config;
