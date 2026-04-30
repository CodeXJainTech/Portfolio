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
import zapLogo from './assets/work_logo/zap.png'
import housePriceLogo from './assets/work_logo/houseprice.png'
import aiLogo from './assets/tech_logo/ai.webp'
import kafkaLogo from './assets/tech_logo/kafka.webp'
import dockerLogo from './assets/tech_logo/docker.webp'
import socketLogo from './assets/tech_logo/socket.webp'
import nextjsLogo from './assets/tech_logo/nextjs.png'
import tailwindLogo from './assets/tech_logo/tailwindcss.png'
import postgresLogo from './assets/tech_logo/postgre.png'
import redisLogo from './assets/tech_logo/redis.webp'
import prismaLogo from './assets/tech_logo/prisma.webp'
import tsLogo from './assets/tech_logo/typescript.png'
import heumanxLogo from './assets/company_logo/heumanx.jpg'
import codeCollabLogo from './assets/work_logo/codeCollab.png'
import kryptLogo from './assets/work_logo/krypt.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React JS', logo: reactLogo },
      { name: 'Next.js', logo: nextjsLogo },
      { name: 'TailwindCSS', logo: tailwindLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
    ],
  },
  {
    title: 'Backend & DB',
    skills: [
      { name: 'Node JS', logo: nodeLogo },
      { name: 'Express JS', logo: expressLogo },
      { name: 'Prisma ORM', logo: prismaLogo },
      { name: 'PostgreSQL', logo: postgresLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Redis', logo: redisLogo },
    ],
  },
  {
    title: 'System & DevOps',
    skills: [
      { name: 'Kafka', logo: kafkaLogo },
      { name: 'Docker', logo: dockerLogo },
      { name: 'Socket.IO', logo: socketLogo },
      { name: 'GitHub Actions', logo: githubLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: jsLogo },
      { name: 'TypeScript', logo: tsLogo },
      { name: 'SQL', logo: sqlLogo },
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'Scikit-learn', logo: sklearnLogo },
      { name: 'Pandas', logo: pandasLogo },
      { name: 'NumPy', logo: numpyLogo },
      { name: 'Generative AI', logo: aiLogo },
    ],
  },
  {
    title: 'Dev Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];



export const experiences = [
  {
    id: 0,
    img: heumanxLogo,
    role: "Backend Developer Intern",
    company: "HuemanX",
    date: "Mar 2026 - Present",
    desc: "Architected a microservices backend across 8 domains, ensuring 100% uptime by isolating database failures. Implemented a Kafka event bus for 18 distributed components to decouple AI inference and achieved sub-second API latency with Redis locking and Hybrid RBAC.",
    skills: [
      "Node.js", "PostgreSQL", "Kafka", "Redis", "Docker", "Microservices"
    ],
  },
  {
    id: 1,
    img: codameLogo,
    role: "Competitive Programming Lead",
    company: "Codame Club, IIIT Bhopal",
    date: "Nov 2025 - Mar 2026",
    desc: "Spearheaded the organization of 5+ large-scale coding contests for 500+ participants. Authored complex DSA problems and led technical outreach, ensuring 100% on-time execution and fostering a competitive programming ecosystem on campus.",
    skills: [
      "C++", "DSA", "Competitive Programming", "Problem Setting", "Management"
    ],
  },
  {
    id: 2,
    img: codameLogo,
    role: "Executive Member",
    company: "Codame, IIIT Bhopal",
    date: "Nov 2024 - Nov 2025",
    desc: "Conducted coding contests and authored problems to promote competitive programming. Led up-solving sessions for 100+ juniors and ranked top 15 in a 200-member batch for contest performance.",
    skills: [
      "C++", "DSA", "Competitive Programming", "Leadership"
    ],
  },
  {
    id: 3,
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
    id: 4,
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
    title: "Zap",
    description: "A workflow automation platform inspired by Zapier. It features user-defined trigger-action sequences powered by a Kafka-based event pipeline for fault-tolerant, asynchronous task execution and Prisma ORM for relational data management.",
    image: zapLogo, // Replace with your actual variable
    tags: ["Next.js", "TypeScript", "Kafka", "Prisma", "PostgreSQL", "Node.js"],
    github: "https://github.com/CodeXJainTech/Zap-project",
    webapp: "https://github.com/CodeXJainTech/Zap-project",
  },
  {
    id: 1,
    title: "Code Collab",
    description: "A real-time collaborative code editor supporting simultaneous multi-user editing via WebSockets and Operational Transformation. It features a sandboxed code execution pipeline for secure, multi-language code runs and a Redis-backed distributed architecture that optimizes presence sync and reduces conflict resolution time by 90%.",
    image: codeCollabLogo, // Replace with your actual variable
    tags: ["React", "TypeScript", "Node.js", "Redis", "PostgreSQL", "Piston"],
    github: "https://github.com/CodeXJainTech/collab-editor",
    webapp: "https://codecollabify.vercel.app/",
  },
  {
    id: 2,
    title: "Krypt: E2EE Chat App",
    description: "A military-grade, End-to-End Encrypted (E2EE) messaging platform built on a Zero-Trust architecture. It features SRP-6a authentication, ECDH key exchange, and a SHA-256 double-ratchet for perfect forward secrecy, utilizing a custom C++ WebAssembly engine for high-performance client-side AES encryption.",
    image: kryptLogo, // Replace with your actual variable
    tags: ["React", "TypeScript", "WebAssembly (C++)", "Web Crypto API", "ECDH", "AES-256-GCM", "SRP-6a", "Ratchet Protocol"],
    github: "https://github.com/CodeXJainTech/minor-project-Krypt",
    webapp: "https://github.com/CodeXJainTech/minor-project-Krypt",
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
  {
    id: 4,
    title: "SpendQuest",
    description: "SpendQuest is a lightweight, intuitive app to help users track their expenses and simulate money transfers to friends, payees, or categories. Whether you're splitting lunch, logging a shopping trip, or tracking monthly cash flow — SpendQuest makes personal finance simple and visual.",
    image: spendquestLogo,
    tags: ["React", "Node", "Express", "Rest-API", "mongodb"],
    github: "https://github.com/CodeXJainTech/spendquest-frontend",
    webapp: "https://spendquest.vercel.app",
  },
  {
    id: 5,
    title: "House Price Prediction",
    description: "A machine learning application that predicts housing prices in Bengaluru. It utilizes Linear, Ridge, and Lasso Regression models achieving an 0.80 R² score, with a Flask backend to serve predictions based on processed real-world datasets.",
    image: housePriceLogo,
    tags: ["Python", "Machine Learning", "scikit-learn", "Flask", "Pandas"],
    github: "https://github.com/CodeXJainTech/House-price-prediction",
    webapp: "https://house-price-prediction-9o82.onrender.com/",
  },
  {
    id: 6,
    title: "Banking System",
    description: "A C++ terminal-based banking system using STL and OOP for account creation, modification, and secure transactions with real-time balance management.",
    image: bankingLogo,
    tags: ["C++", "OOP", "DSA"],
    github: "https://github.com/CodeXJainTech/Banking-System",
    webapp: "https://github.com/CodeXJainTech/Banking-System",
  },
  {
    id: 7,
    title: "Weather App",
    description: "A responsive web app using OpenWeatherMap API, displaying real-time weather data for 100+ cities. Clean UI with intuitive input and graceful error handling.",
    image: weatherLogo,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/CodeXJainTech/Weather-App",
    webapp: "https://windy-lake.vercel.app",
  }
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