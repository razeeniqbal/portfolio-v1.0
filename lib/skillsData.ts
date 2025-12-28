export interface TechSkill {
  name: string;
  icon: string;
  color: string;
}

export const techStack: TechSkill[] = [
  // Frontend
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: 'linear-gradient(135deg, #e34c26 0%, #f06529 100%)' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: 'linear-gradient(135deg, #264de4 0%, #2965f1 100%)' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', color: 'linear-gradient(135deg, #563d7c 0%, #7952b3 100%)' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: 'linear-gradient(135deg, #06b6d4 0%, #38bdf8 100%)' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'linear-gradient(135deg, #f0db4f 0%, #f7df1e 100%)' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'linear-gradient(135deg, #007acc 0%, #3178c6 100%)' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: 'linear-gradient(135deg, #42b883 0%, #35495e 100%)' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'linear-gradient(135deg, #61dafb 0%, #149eca 100%)' },
  { name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', color: 'linear-gradient(135deg, #cc6699 0%, #bf4080 100%)' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', color: 'linear-gradient(135deg, #764abc 0%, #593d88 100%)' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: 'linear-gradient(135deg, #000000 0%, #404040 100%)' },

  // Backend & Databases
  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', color: 'linear-gradient(135deg, #646cff 0%, #747bff 100%)' },
  { name: 'Visual Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg', color: 'linear-gradient(135deg, #68217a 0%, #8e44ad 100%)' },
  { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg', color: 'linear-gradient(135deg, #00979d 0%, #00b4b8 100%)' },
  { name: 'Notion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg', color: 'linear-gradient(135deg, #000000 0%, #2c2c2c 100%)' },
  { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', color: 'linear-gradient(135deg, #00add8 0%, #5dc9e2 100%)' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'linear-gradient(135deg, #026e00 0%, #68a063 100%)' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: 'linear-gradient(135deg, #000000 0%, #404040 100%)' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', color: 'linear-gradient(135deg, #8892be 0%, #777bb4 100%)' },
  { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg', color: 'linear-gradient(135deg, #cb3837 0%, #fb3e44 100%)' },
  { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', color: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)' },
  { name: 'Prisma ORM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', color: 'linear-gradient(135deg, #0c344b 0%, #16a394 100%)' },

  // Tools & Platforms
  { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', color: 'linear-gradient(135deg, #7f52ff 0%, #b47dff 100%)' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: 'linear-gradient(135deg, #0db7ed 0%, #2496ed 100%)' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: 'linear-gradient(135deg, #00758f 0%, #4479a1 100%)' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'linear-gradient(135deg, #13aa52 0%, #4db33d 100%)' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: 'linear-gradient(135deg, #f5820d 0%, #ffca28 100%)' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', color: 'linear-gradient(135deg, #3ecf8e 0%, #38b2ac 100%)' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', color: 'linear-gradient(135deg, #ff6c37 0%, #ef5b25 100%)' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: 'linear-gradient(135deg, #f24e1e 0%, #a259ff 100%)' },
  { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', color: 'linear-gradient(135deg, #00c4cc 0%, #7d2ae8 100%)' },

  // Version Control
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: 'linear-gradient(135deg, #181717 0%, #4d4d4d 100%)' },
];

// Python & Data Science specific (for your portfolio)
export const pythonStack: TechSkill[] = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'linear-gradient(135deg, #306998 0%, #FFD43B 100%)' },
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', color: 'linear-gradient(135deg, #150458 0%, #E70488 100%)' },
  { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', color: 'linear-gradient(135deg, #013243 0%, #4DABCF 100%)' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: 'linear-gradient(135deg, #FF6F00 0%, #FFA726 100%)' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: 'linear-gradient(135deg, #EE4C2C 0%, #FF6F3C 100%)' },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', color: 'linear-gradient(135deg, #0078D4 0%, #50E6FF 100%)' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', color: 'linear-gradient(135deg, #FF9900 0%, #F90 100%)' },
  { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', color: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)' },
];
