
import project1 from "../assets/WeatherApp.jpg";
import { motion } from "framer-motion";
import project2 from "../assets/SimpleTimeApp.jpeg";
import project3 from "../assets/ER.jpg";
import project4 from "../assets/RandomImageGenerator.jpg"
import project5 from "../assets/shateki.jpg"
import project6 from "../assets/StockMarket.jpg"
const projects = [
  {
    title: "Shateki (shooting game)",
    image: project5,
    link: "https://shateki-front.vercel.app/",
    description: [
      "Using TypeScript, React, and the Canvas API, I developed a shooting game inspired by traditional Japanese festivals.",
      "I implemented both the frontend and backend, designing class-based game logic and score management systems.",
      "As the technical lead of a small team, I directed the overall system architecture and guided team members in implementing scalable, real-time features."
    ],
    technologies: ["TypeScript", "JavaScript", "React.js", "React Router", "Framer Motion", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "Vercel", "CORS"]
  },
  {
    title: "Weather App",
    image: project1,
    link: "https://weather-app-d5281.web.app/",
    description: [
      "Built a personalized weather app integrating Open Weather API and ChatGPT API that provides accurate clothing recommendations for different weather conditions.",
      "Implemented a Celsius/Fahrenheit toggle feature and successfully deployed on GitHub Pages."
    ],
    technologies: ["JavaScript", "React.js", "Next.js", "HTML", "Open Weather API", "ChatGPT API"]
  },
  {
    title: "Emergency Room App",
    image: project3,
    link: "https://github.com/Banshi-84/EmergencyRoomApp",
    description: [
      "Press and hold the red button for 5 seconds to dial 911. While waiting for an ambulance, you can ask a medical assistant for first aid using the Chat GPT API. Map function allows you to know where you are.",
      "Static answer by Bolt was replaced by dynamic answer using Chat GPT API. Confirmed operation on local server and successfully deployed to Github."
    ],
    technologies: ["JavaScript", "CSS", "Next.js","Typescript", "React", "HTML", "Bolt.new", "ChatGPT API"]
  },
  {
    title: "Observer-Strategy-Trading-System",
    image: project6,
    link: "https://github.com/Banshi-84/observer-strategy-trading-system",
    description: [
      "Implemented a Java-based stock market simulator using Observer and Strategy patterns, enabling event-driven auto-trading.",
      "Designed for extensibility with dynamic strategy switching and multi-investor support."
    ],
    technologies: ["Java"]
  },
  {
    title: "Random Image Generator",
    image: project4,
    link: "https://github.com/Banshi-84/Random-Image-Generator",
    description: [
      "Built a random image generator using the Pixabay API that provide an image when user push the button",
      "Implemented a function that generates a new image every time a button is pressed, and successfully deployed it on a GitHub pages."
    ],
    technologies: ["Pixabay API", "Python", "HTML", "CSS"]
  },
  {
    title: "SimpleTimeApp",
    image: project2,
    link: "https://simple-time-app.vercel.app/",
    description: [
      "Built a simple Time App.\n",
      "It shows current time. Numbers are raimbow\n"
    ],
    technologies: ["JavaScript", "CSS", "HTML"]
  }
  
];

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-col lg:flex-row lg:justify-center w-full max-w-4xl">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex-shrink-0 mb-4 lg:mb-0 lg:mr-8"
            ><a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="rounded w-full h-auto hover:opacity-70"
              />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4"
            >
              <h2 className="mb-2 font-semibold text-xl">{project.title}</h2>
              <div className="mb-4 text-neutral-400">
                {project.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="mr-2 bg-neutral-900 rounded px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;