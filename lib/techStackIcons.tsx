// Tech Stack Icon Mapping
// Using simple-icons CDN for tech logos

export const techStackIcons: { [key: string]: string } = {
  // Languages
  'Python': 'https://cdn.simpleicons.org/python/3776AB',
  'JavaScript': 'https://cdn.simpleicons.org/javascript/F7DF1E',
  'TypeScript': 'https://cdn.simpleicons.org/typescript/3178C6',
  'Java': 'https://cdn.simpleicons.org/oracle/F80000',
  'C++': 'https://cdn.simpleicons.org/cplusplus/00599C',
  'SQL': 'https://cdn.simpleicons.org/mysql/4479A1',
  'HTML': 'https://cdn.simpleicons.org/html5/E34F26',
  'CSS': 'https://cdn.simpleicons.org/css3/1572B6',
  'Go': 'https://cdn.simpleicons.org/go/00ADD8',
  'PHP': 'https://cdn.simpleicons.org/php/777BB4',

  // Frameworks & Libraries
  'React': 'https://cdn.simpleicons.org/react/61DAFB',
  'Next.js': 'https://cdn.simpleicons.org/nextdotjs/000000',
  'Vue.js': 'https://cdn.simpleicons.org/vuedotjs/4FC08D',
  'Angular': 'https://cdn.simpleicons.org/angular/DD0031',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs/339933',
  'Express': 'https://cdn.simpleicons.org/express/000000',
  'Django': 'https://cdn.simpleicons.org/django/092E20',
  'Flask': 'https://cdn.simpleicons.org/flask/000000',
  'FastAPI': 'https://cdn.simpleicons.org/fastapi/009688',
  'TailwindCSS': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  'Bootstrap': 'https://cdn.simpleicons.org/bootstrap/7952B3',

  // Data Science & ML
  'TensorFlow': 'https://cdn.simpleicons.org/tensorflow/FF6F00',
  'PyTorch': 'https://cdn.simpleicons.org/pytorch/EE4C2C',
  'Scikit-Learn': 'https://cdn.simpleicons.org/scikitlearn/F7931E',
  'Pandas': 'https://cdn.simpleicons.org/pandas/150458',
  'NumPy': 'https://cdn.simpleicons.org/numpy/013243',
  'Keras': 'https://cdn.simpleicons.org/keras/D00000',
  'XGBoost': 'https://cdn.simpleicons.org/xgboost/FF6600',
  'OpenCV': 'https://cdn.simpleicons.org/opencv/5C3EE8',

  // Databases
  'MongoDB': 'https://cdn.simpleicons.org/mongodb/47A248',
  'PostgreSQL': 'https://cdn.simpleicons.org/postgresql/4169E1',
  'MySQL': 'https://cdn.simpleicons.org/mysql/4479A1',
  'Redis': 'https://cdn.simpleicons.org/redis/DC382D',
  'Firebase': 'https://cdn.simpleicons.org/firebase/FFCA28',
  'Supabase': 'https://cdn.simpleicons.org/supabase/3FCF8E',
  'SQLite': 'https://cdn.simpleicons.org/sqlite/003B57',

  // Cloud & DevOps
  'AWS': 'https://cdn.simpleicons.org/amazonaws/232F3E',
  'Azure': 'https://cdn.simpleicons.org/microsoftazure/0078D4',
  'GCP': 'https://cdn.simpleicons.org/googlecloud/4285F4',
  'Docker': 'https://cdn.simpleicons.org/docker/2496ED',
  'Kubernetes': 'https://cdn.simpleicons.org/kubernetes/326CE5',
  'Git': 'https://cdn.simpleicons.org/git/F05032',
  'GitHub': 'https://cdn.simpleicons.org/github/181717',
  'GitLab': 'https://cdn.simpleicons.org/gitlab/FC6D26',

  // Tools & Platforms
  'Jupyter': 'https://cdn.simpleicons.org/jupyter/F37626',
  'Streamlit': 'https://cdn.simpleicons.org/streamlit/FF4B4B',
  'Power BI': 'https://cdn.simpleicons.org/powerbi/F2C811',
  'Tableau': 'https://cdn.simpleicons.org/tableau/E97627',
  'Apache Spark': 'https://cdn.simpleicons.org/apachespark/E25A1C',
  'Hadoop': 'https://cdn.simpleicons.org/apachehadoop/66CCFF',
  'Airflow': 'https://cdn.simpleicons.org/apacheairflow/017CEE',
  'Kafka': 'https://cdn.simpleicons.org/apachekafka/231F20',

  // Other
  'Machine Learning': 'https://cdn.simpleicons.org/tensorflow/FF6F00',
  'Deep Learning': 'https://cdn.simpleicons.org/pytorch/EE4C2C',
  'NLP': 'https://cdn.simpleicons.org/openai/412991',
  'Computer Vision': 'https://cdn.simpleicons.org/opencv/5C3EE8',
  'Data Analysis': 'https://cdn.simpleicons.org/pandas/150458',
  'API': 'https://cdn.simpleicons.org/fastapi/009688',
  'REST API': 'https://cdn.simpleicons.org/postman/FF6C37',
  'GraphQL': 'https://cdn.simpleicons.org/graphql/E10098',
};

export function getTechIcon(tech: string): string | null {
  return techStackIcons[tech] || null;
}
