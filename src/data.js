// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Kiran Kumari",
  role: "React.js Frontend Developer",
  location: "Jamshedpur, India",
  email: "Kirankumari20850@gmail.com",
  phone: "+91 8092723900",
  linkedin: "https://linkedin.com/in/kirankumari-dev",
  github: "https://github.com/kiku5858",
  about: [
    "I'm a React.js developer with a B.Tech in Computer Science (2023) and 1.5 years of Java Full Stack training at J Spiders, Bengaluru.",
    "Since 2025 I've been building React apps on my own, using Firebase, REST APIs and the Groq AI API. I'm looking for a fresher Frontend or Full Stack role where I can build products people use every day.",
  ],
  facts: [
    { label: "Location", value: "Jamshedpur, India" },
    { label: "Education", value: "B.Tech CSE, Arka Jain University" },
    { label: "Training", value: "Java Full Stack, J Spiders" },
    { label: "Looking for", value: "Frontend / Full Stack (fresher)" },
  ],
};

export const skills = [
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "React Router", "Context API", "Flexbox", "CSS Grid"] },
  { title: "Backend and database", items: ["Node.js (basic)", "Express.js", "Firebase Auth", "Firestore", "MongoDB", "SQL"] },
  { title: "AI and APIs", items: ["Groq AI API", "REST APIs", "Speech Recognition", "Text-to-Speech"] },
  { title: "Tools", items: ["Git", "GitHub", "Netlify", "VS Code", "Chrome DevTools"] },
];

// Add your links in `live` and `github`. A link shows only when it is filled in.
export const projects = [
  {
    title: "AI Interview Preparation Platform",
    featured: true,
    badge: "Main project, still improving",
    summary: "Practice mock interviews by speaking your answers. The app asks role-specific questions, reads them aloud and gives AI feedback.",
    points: [
      "Groq AI generates interview questions and feedback for each role.",
      "Voice answers through Speech Recognition, with questions read aloud by Text-to-Speech.",
      "Dashboard with interview history, scores, progress and analytics.",
      "Animated score counters, timers and reusable components, with data stored in Firestore.",
    ],
    tech: ["React.js", "Firebase", "Groq AI API", "Speech Recognition", "Text-to-Speech"],
    live: "",
    github: "https://github.com/kiku5858",
  },
  {
    title: "Kivon Luxe",
    summary: "Jewellery e-commerce front end.",
    points: [
      "10+ product pages with React Router.",
      "Add-to-cart with quantity control, shared through Context API.",
      "Responsive layout with Flexbox and CSS Grid.",
    ],
    tech: ["React.js", "Context API", "React Router"],
    live: "https://tubular-sorbet-89fea1.netlify.app/",
    github: "https://github.com/kiku5858",
  },
  {
    title: "Weather Forecast App",
    summary: "Real-time weather for any city.",
    points: [
      "Live data from the OpenWeatherMap API.",
      "Debounced search avoids extra API calls.",
      "Icons change with the weather condition.",
    ],
    tech: ["React.js", "OpenWeatherMap", "REST API"],
    live: "",
    github: "https://github.com/kiku5858",
  },
  {
    title: "Personal Portfolio",
    summary: "My first portfolio, deployed on Netlify.",
    points: [
      "8+ reusable React components.",
      "Responsive across phone, tablet and laptop.",
      "Live on Netlify.",
    ],
    tech: ["React.js", "Netlify"],
    live: "",
    github: "https://github.com/kiku5858",
  },
];

export const journey = [
  { time: "2025 to now", title: "Independent Frontend Developer", text: "Building React apps with the Groq AI API, Firebase and REST APIs, including the AI interview platform." },
  { time: "Jun 2023 to Dec 2024", title: "Java Full Stack Trainee, J Spiders, Bengaluru", text: "1.5 years of training in Java, Spring Boot, React.js and REST APIs. Built 3 end-to-end React projects deployed on Netlify." },
  { time: "2019 to May 2023", title: "B.Tech in Computer Science, Arka Jain University", text: "Jamshedpur." },
  { time: "2016 to 2019", title: "Diploma in Engineering, Govt. Women's Polytechnic", text: "Started my engineering path here." },
];

export const navLinks = ["About", "Skills", "Projects", "Certificates", "Journey", "Contact"];

export const stats = [
  { value: "4", label: "Projects built" },
  { value: "1.5 yrs", label: "Full Stack training" },
  { value: "3", label: "Projects live on Netlify" },
  { value: "10+", label: "Product pages in one store" },
];

// Add `issuer` (who gave the certificate) and `link` (certificate URL) when you have them.
export const certificates = [
  { title: "Python", issuer: "Think NEXT Technologies Private Limited", link: "", tags: ["Python"] },
  { title: "Cloud Computing with AWS", issuer: "ARDENT Computech pvt. ltd.", link: "", tags: ["AWS", "Cloud Computing"] },
  { title: "Java Full Stack Development", issuer: "J Spiders, Bengaluru", link: "", tags: ["Java", "Spring Boot", "React.js"] },
];
