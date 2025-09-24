import cppLogo from './assets/tech_logo/cpp.png';
import cLogo from './assets/tech_logo/c.png';
import pythonLogo from './assets/tech_logo/python.png';
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import jsLogo from './assets/tech_logo/javascript.png';
import reactLogo from './assets/tech_logo/reactjs.png';
import nodeLogo from './assets/tech_logo/nodejs.png';
import expressLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import sqlLogo from './assets/tech_logo/mysql.png';
import tensorflowLogo from './assets/tech_logo/tensorflow.png';
import sklearnLogo from './assets/tech_logo/sklearn.png';
import numpyLogo from './assets/tech_logo/numPy.png';
import pandasLogo from './assets/tech_logo/pandas.png';
import matplotlibLogo from './assets/tech_logo/matplotlib.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import colabLogo from './assets/tech_logo/colab.png';
import jupyterLogo from './assets/tech_logo/jupyter.png';
import bankingLogo from './assets/work_logo/banking.png';
import weatherLogo from './assets/work_logo/weather.png';
import spendquestLogo from './assets/work_logo/spendquest.png';
import inkthinkLogo from './assets/work_logo/inkthink.png';
import gssocLogo from './assets/company_logo/gssoc_logo.png';
import codameLogo from './assets/company_logo/codame_logo.png';
import iiitbLogo from './assets/company_logo/iiitb_logo.png';
import leetcode from './assets/coding_logo/leetcode.png'
import codeforces from './assets/coding_logo/codeforces.png'
import codechef from './assets/coding_logo/codechef.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: jsLogo },
      { name: 'React JS', logo: reactLogo },
    ],
  },
  {
    title: 'Backend & DB',
    skills: [
      { name: 'Node JS', logo: nodeLogo },
      { name: 'Express JS', logo: expressLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'SQL', logo: sqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'C', logo: cLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: jsLogo },
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      // { name: 'TensorFlow', logo: tensorflowLogo },
      // { name: 'Scikit-learn', logo: sklearnLogo },
      { name: 'NumPy', logo: numpyLogo },
      { name: 'Pandas', logo: pandasLogo },
      { name: 'Matplotlib', logo: matplotlibLogo },
    ],
  },
  {
    title: 'Dev Tools & Platforms',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Google Colab', logo: colabLogo },
      { name: 'Jupyter Notebook', logo: jupyterLogo },
    ],
  },
];



export const experiences = [
  {
    id: 1,
    img: codameLogo,
    role: "Executive Member",
    company: "Codame, IIIT Bhopal",
    date: "Nov 2024 - Present",
    desc: "Conducted 4+ coding contests and authored 5+ problems to promote competitive programming. Led 7+ up-solving sessions for 100+ juniors and ranked top 15 in a 200-member batch for contest performance.",
    skills: [
      "C++", "DSA", "Competitive Programming", "Leadership"
    ],
  },
  {
    id: 2,
    img: iiitbLogo,
    role: "Teaching Assistant - OOP",
    company: "IIIT Bhopal",
    date: "March 2025 - June 2025",
    desc: "Selected as course assistant for Object-Oriented Programming after achieving top scorer status in the 2027 batch. Helped peers with OOP concepts and practical implementations.",
    skills: [
      "C++", "OOP", "Teaching", "Mentoring"
    ],
  },
  {
    id: 0,
    img: gssocLogo,
    role: "Contributor",
    company: "GirlScript Summer of Code",
    date: "May 2024 - Sep 2024",
    desc: "Contributed to open-source projects by raising and documenting 10+ bug reports and enhancement requests. Collaborated with maintainers to improve issue reproducibility and project efficiency.",
    skills: [
      "Git", "GitHub", "Open Source", "Collaboration"
    ],
  },
];




export const projects = [
  {
    id: 0,
    title: "Banking System",
    description: "A C++ terminal-based banking system using STL and OOP for account creation, modification, and secure transactions with real-time balance management.",
    image: bankingLogo,
    tags: ["C++", "OOP", "DSA"],
    github: "https://github.com/CodeXJainTech/Banking-System",
    webapp: "https://github.com/CodeXJainTech/Banking-System",
  },
  {
    id: 1,
    title: "Weather App",
    description: "A responsive web app using OpenWeatherMap API, displaying real-time weather data for 100+ cities. Clean UI with intuitive input and graceful error handling.",
    image: weatherLogo,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/CodeXJainTech/Weather-App",
    webapp: "https://windy-lake.vercel.app",
  },
  {
    id: 2,
    title: "SpendQuest",
    description: "SpendQuest is a lightweight, intuitive app to help users track their expenses and simulate money transfers to friends, payees, or categories. Whether you're splitting lunch, logging a shopping trip, or tracking monthly cash flow — SpendQuest makes personal finance simple and visual.",
    image: spendquestLogo,
    tags: ["React", "Node", "Express", "Rest-API", "mongodb"],
    github: "https://github.com/CodeXJainTech/spendquest-frontend",
    webapp: "https://spendquest.vercel.app",
  },
  {
    id: 3,
    title: "Ink & Think",
    description: "A real-time multiplayer drawing & guessing game (similar to Skribbl.io) where players create or join rooms, take turns drawing, and guess words based on sketches. Built with React, Node.js, and Socket.IO for seamless live interaction.",
    image: inkthinkLogo,
    tags: ["React", "node", "socket.IO", "Rest-API", "Express"],
    github: "https://github.com/CodeXJainTech/Ink-think-frontend",
    webapp: "https://ink-think.vercel.app",
  },
];


export const codingProfiles = [
  {
    name: "LeetCode",
    logo: leetcode,
    link: "https://leetcode.com/u/anchaljain1106/",
  },
  {
    name: "CodeChef",
    logo: codechef,
    link: "https://www.codechef.com/users/anchaljain06",
  },
  {
    name: "Codeforces",
    logo: codeforces,
    link: "https://codeforces.com/profile/ToBeContinued..",
  },
];

export const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];