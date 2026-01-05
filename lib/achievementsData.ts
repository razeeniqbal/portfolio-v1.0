export interface Achievement {
  id: string;
  title: string;
  organization: string;
  issuedDate: string;
  description: string;
  category: 'certification' | 'award' | 'course' | 'achievement';
  image: string;
  credentialUrl?: string;
  credentialId?: string;
}

export const achievements: Achievement[] = [
  // Microsoft Certifications
  {
    id: '1',
    title: 'Microsoft Certified: Power BI Data Analyst Associate',
    organization: 'Microsoft',
    issuedDate: 'September 2023',
    description: 'Expert in Power BI data visualization, modeling, and business intelligence solutions.',
    category: 'certification',
    image: '/achievements/microsoft-powerbi.jpg',
    credentialUrl: 'https://learn.microsoft.com/en-us/users/razeeniqbal/credentials/DE6CEB296EC4D874',
    credentialId: 'DE6CEB296EC4D874'
  },
  {
    id: '2',
    title: 'Microsoft Certified: Azure AI Fundamentals',
    organization: 'Microsoft',
    issuedDate: 'December 2024',
    description: 'Foundational knowledge in ML, AI concepts, and Azure AI services.',
    category: 'certification',
    image: '/achievements/microsoft-ai.jpg',
    credentialUrl: 'https://learn.microsoft.com/en-us/certifications/'
  },
  {
    id: '3',
    title: 'Microsoft Certified: Azure Fundamentals',
    organization: 'Microsoft',
    issuedDate: 'October 2024',
    description: 'Cloud fundamentals including Azure services, security, compliance, and pricing.',
    category: 'certification',
    image: '/achievements/microsoft-azure.jpg',
    credentialUrl: 'https://learn.microsoft.com/en-us/certifications/'
  },
  {
    id: '4',
    title: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
    organization: 'Microsoft',
    issuedDate: 'December 2024',
    description: 'Security, compliance, and identity fundamentals for Microsoft cloud services.',
    category: 'certification',
    image: '/achievements/microsoft-security.jpg',
    credentialUrl: 'https://learn.microsoft.com/en-us/certifications/',
    credentialId: 'B563D7D85230C4E'
  },

  // Python Certification
  {
    id: '5',
    title: 'PCEP – Certified Entry-Level Python Programmer',
    organization: 'Python Institute',
    issuedDate: 'September 2023',
    description: 'Certified in Python fundamentals, syntax, and programming techniques.',
    category: 'certification',
    image: '/achievements/python-pcep.jpg',
    credentialUrl: 'https://www.pythoninstitute.org/'
  },

  // Google Cloud Certifications
  {
    id: '6',
    title: 'Create ML Models with BigQuery ML Skill Badge',
    organization: 'Google Cloud',
    issuedDate: 'April 2025',
    description: 'Create ML models with BigQuery including regression and classification.',
    category: 'certification',
    image: '/achievements/google-bigquery.jpg',
    credentialUrl: 'https://www.cloudskillsboost.google/'
  },
  {
    id: '7',
    title: 'Prompt Design in Vertex AI Skill Badge',
    organization: 'Google Cloud',
    issuedDate: 'March 2025',
    description: 'Proficient in designing effective prompts for large language models.',
    category: 'certification',
    image: '/achievements/google-vertex.jpg',
    credentialUrl: 'https://www.cloudskillsboost.google/'
  },

  // IBM Data Science Certifications
  {
    id: '8',
    title: 'Data Analysis with Python',
    organization: 'IBM SkillsBuild',
    issuedDate: 'April 2025',
    description: 'Data analysis with Python including manipulation, visualization, and statistics.',
    category: 'certification',
    image: '/achievements/ibm-data-python.jpg',
    credentialId: 'f69be515945f41848da758a3534cdab8'
  },
  {
    id: '9',
    title: 'Data Science 101',
    organization: 'IBM SkillsBuild',
    issuedDate: 'April 2025',
    description: 'Introduction to data science fundamentals, concepts, and methodologies.',
    category: 'certification',
    image: '/achievements/ibm-ds101.jpg',
    credentialId: '634f673197544ce38cb9aa2587fd0782'
  },
  {
    id: '10',
    title: 'Data Science Methodology',
    organization: 'IBM SkillsBuild',
    issuedDate: 'April 2025',
    description: 'Data science methodology from problem formulation to model deployment.',
    category: 'certification',
    image: '/achievements/ibm-methodology.jpg',
    credentialId: 'e952973f82c443d98d0786eca34a0b00'
  },
  {
    id: '11',
    title: 'Data Visualization with Python',
    organization: 'IBM SkillsBuild',
    issuedDate: 'April 2025',
    description: 'Data visualization with Matplotlib, Seaborn, and Plotly.',
    category: 'certification',
    image: '/achievements/ibm-visualization.jpg',
    credentialId: '9bc9df5cd4c1437abb293d2f716f13e4'
  },
  {
    id: '12',
    title: 'Python 101 for Data Science',
    organization: 'IBM SkillsBuild',
    issuedDate: 'April 2025',
    description: 'Python programming fundamentals for data science applications.',
    category: 'certification',
    image: '/achievements/ibm-python101.jpg',
    credentialId: '509f8539dbcd468ca020aa6b8f71cdda'
  },
  {
    id: '13',
    title: 'Data Science Tools',
    organization: 'IBM SkillsBuild',
    issuedDate: 'April 2025',
    description: 'Essential data science tools: Jupyter, RStudio, and GitHub.',
    category: 'certification',
    image: '/achievements/ibm-tools.jpg',
    credentialId: '582b153478374211a18a550be919f0bd'
  },

  // Big Data & Hadoop
  {
    id: '14',
    title: 'Hadoop 101',
    organization: 'IBM SkillsBuild',
    issuedDate: 'April 2025',
    description: 'Hadoop ecosystem and distributed computing fundamentals.',
    category: 'certification',
    image: '/achievements/ibm-hadoop.jpg',
    credentialId: 'af90efc4fdc44ccd98108ec86dcdba48'
  },
  {
    id: '15',
    title: 'Big Data 101',
    organization: 'IBM SkillsBuild',
    issuedDate: 'April 2025',
    description: 'Big data concepts, technologies, and applications.',
    category: 'certification',
    image: '/achievements/ibm-bigdata.jpg',
    credentialId: '8f38bc90d85f433dbe74495bb2b9e56f'
  },
  {
    id: '16',
    title: 'Spark Fundamentals I',
    organization: 'IBM SkillsBuild',
    issuedDate: 'April 2025',
    description: 'Apache Spark fundamentals for large-scale data processing.',
    category: 'certification',
    image: '/achievements/ibm-spark.jpg',
    credentialId: 'd96c42857dbf40ec9c9a6b69f50fa285'
  },

  // AI & Machine Learning
  {
    id: '17',
    title: 'Artificial Intelligence Fundamentals',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'AI concepts, machine learning, and neural networks.',
    category: 'certification',
    image: '/achievements/ibm-ai-fundamentals.jpg'
  },
  {
    id: '18',
    title: 'Understanding and Applying Text Embeddings',
    organization: 'DeepLearning.AI',
    issuedDate: 'April 2025',
    description: 'Text embeddings, semantic search, and NLP techniques.',
    category: 'certification',
    image: '/achievements/deeplearning-embeddings.jpg'
  },
  {
    id: '19',
    title: 'Machine Learning Foundations: Linear Algebra',
    organization: 'LinkedIn Learning',
    issuedDate: 'October 2024',
    description: 'Linear algebra foundations for machine learning.',
    category: 'course',
    image: '/achievements/linkedin-linear.jpg'
  },
  {
    id: '20',
    title: 'Artificial Intelligence Foundations: Thinking Machines',
    organization: 'LinkedIn Learning',
    issuedDate: 'October 2024',
    description: 'History, concepts, and future of AI and machine learning.',
    category: 'course',
    image: '/achievements/linkedin-ai.jpg'
  },

  // Microsoft Copilot & Generative AI
  {
    id: '21',
    title: 'Boost Your Productivity with Microsoft Copilot',
    organization: 'Mereka',
    issuedDate: 'March 2025',
    description: 'Microsoft Copilot for enhanced productivity and AI workflows.',
    category: 'course',
    image: '/achievements/mereka-copilot.jpg',
    credentialId: 'fb6bb11d'
  },
  {
    id: '22',
    title: 'Explore Generative AI',
    organization: 'Mereka',
    issuedDate: 'March 2025',
    description: 'Generative AI technologies, applications, and best practices.',
    category: 'course',
    image: '/achievements/mereka-genai.jpg',
    credentialId: '7f1306b8'
  },
  {
    id: '23',
    title: 'Explore Responsible AI',
    organization: 'Mereka',
    issuedDate: 'March 2025',
    description: 'Ethical AI development, bias mitigation, and responsible practices.',
    category: 'course',
    image: '/achievements/mereka-responsible.jpg',
    credentialId: 'cd838cb5'
  },
  {
    id: '24',
    title: 'Get Started with Microsoft Copilot',
    organization: 'Mereka',
    issuedDate: 'March 2025',
    description: 'Microsoft Copilot features and practical applications.',
    category: 'course',
    image: '/achievements/mereka-getstarted.jpg',
    credentialId: '75b5641c'
  },
  {
    id: '25',
    title: 'Explore AI for All',
    organization: 'Mereka',
    issuedDate: 'March 2025',
    description: 'AI concepts and applications for diverse audiences.',
    category: 'course',
    image: '/achievements/mereka-aiforall.jpg',
    credentialId: 'd6179ae4'
  },

  // Professional Certifications
  {
    id: '26',
    title: 'Certified Data Analyst Associate',
    organization: 'Asia Pacific University (APU/APIIT)',
    issuedDate: 'August 2023',
    description: 'Statistical methods, data visualization, and analytical techniques.',
    category: 'certification',
    image: '/achievements/apu-analyst.jpg'
  },
  {
    id: '27',
    title: 'Graduate Engineer',
    organization: 'The Institution of Engineers Malaysia',
    issuedDate: 'October 2022',
    description: 'Graduate Engineer recognition by IEM.',
    category: 'certification',
    image: '/achievements/iem-graduate.jpg',
    credentialId: '119043'
  },
  {
    id: '28',
    title: 'Graduate Engineer',
    organization: 'Board of Engineers Malaysia',
    issuedDate: 'March 2022',
    description: 'Graduate Engineer registration with BEM.',
    category: 'certification',
    image: '/achievements/bem-graduate.jpg',
    credentialId: 'G1207508A'
  },

  // Additional IBM Certifications
  {
    id: '29',
    title: 'AI Foundations',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'AI, machine learning, deep learning, and neural networks.',
    category: 'certification',
    image: '/achievements/ibm-ai-foundations.jpg'
  },
  {
    id: '30',
    title: 'Agile Explorer',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Agile methodologies, Scrum framework, and iterative development.',
    category: 'certification',
    image: '/achievements/ibm-agile.jpg'
  },
  {
    id: '31',
    title: 'Data Fundamentals',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Data management, structures, and analysis principles.',
    category: 'certification',
    image: '/achievements/ibm-data-fundamentals.jpg'
  },
  {
    id: '32',
    title: 'Data Science Foundations - Level 1',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Data science foundations: essential concepts and methodologies.',
    category: 'certification',
    image: '/achievements/ibm-ds-level1.jpg'
  },
  {
    id: '33',
    title: 'Data Science Foundations - Level 2 (V2)',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Advanced data science concepts with practical applications.',
    category: 'certification',
    image: '/achievements/ibm-ds-level2.jpg'
  },
  {
    id: '34',
    title: 'Data Science Methodologies',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Data science methodologies and best practices.',
    category: 'certification',
    image: '/achievements/ibm-ds-methodologies.jpg'
  },
  {
    id: '35',
    title: 'Data Science Tools',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Essential data science tools and platforms.',
    category: 'certification',
    image: '/achievements/ibm-ds-tools.jpg'
  },
  {
    id: '36',
    title: 'Data Analysis Using Python',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Advanced data analysis with Python and data science libraries.',
    category: 'certification',
    image: '/achievements/ibm-data-analysis-python.jpg'
  },
  {
    id: '37',
    title: 'Data Visualization Using Python',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Compelling data visualizations with Python libraries.',
    category: 'certification',
    image: '/achievements/ibm-data-viz-python.jpg'
  },
  {
    id: '38',
    title: 'Python for Data Science',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Python programming for data science applications.',
    category: 'certification',
    image: '/achievements/ibm-python-ds.jpg'
  },
  {
    id: '39',
    title: 'Hadoop Foundations - Level 1',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Hadoop ecosystem and distributed data processing.',
    category: 'certification',
    image: '/achievements/ibm-hadoop-level1.jpg'
  },
  {
    id: '40',
    title: 'Spark - Level 1',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Apache Spark for big data processing and analytics.',
    category: 'certification',
    image: '/achievements/ibm-spark-level1.jpg'
  },

  // Additional Mereka Certifications
  {
    id: '41',
    title: 'Explore AI Basics',
    organization: 'Mereka',
    issuedDate: 'March 2025',
    description: 'AI basics and real-world applications.',
    category: 'course',
    image: '/achievements/mereka-ai-basics.jpg',
    credentialId: 'e484d41b'
  },
  {
    id: '42',
    title: 'Explore Internet Search and Beyond',
    organization: 'Mereka',
    issuedDate: 'March 2025',
    description: 'Advanced internet search and information retrieval techniques.',
    category: 'course',
    image: '/achievements/mereka-search.jpg',
    credentialId: 'f9f3a231'
  },
];
