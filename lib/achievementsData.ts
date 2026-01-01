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
    description: 'Demonstrated expertise in data visualization and business intelligence using Power BI. Skilled in preparing data, modeling data, visualizing and analyzing data, and deploying and maintaining assets.',
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
    description: 'Validated foundational knowledge of machine learning and artificial intelligence concepts and related Microsoft Azure services.',
    category: 'certification',
    image: '/achievements/microsoft-ai.jpg',
    credentialUrl: 'https://learn.microsoft.com/en-us/certifications/'
  },
  {
    id: '3',
    title: 'Microsoft Certified: Azure Fundamentals',
    organization: 'Microsoft',
    issuedDate: 'October 2024',
    description: 'Demonstrated foundational knowledge of cloud concepts, core Azure services, security, privacy, compliance, and Azure pricing and support.',
    category: 'certification',
    image: '/achievements/microsoft-azure.jpg',
    credentialUrl: 'https://learn.microsoft.com/en-us/certifications/'
  },
  {
    id: '4',
    title: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
    organization: 'Microsoft',
    issuedDate: 'December 2024',
    description: 'Validated understanding of security, compliance, and identity concepts across cloud-based and related Microsoft services.',
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
    description: 'Certified proficiency in Python programming fundamentals, including syntax, semantics, runtime environment, and basic programming techniques.',
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
    description: 'Demonstrated ability to create and evaluate machine learning models using BigQuery ML, including linear regression, binary classification, and multi-class classification models.',
    category: 'certification',
    image: '/achievements/google-bigquery.jpg',
    credentialUrl: 'https://www.cloudskillsboost.google/'
  },
  {
    id: '7',
    title: 'Prompt Design in Vertex AI Skill Badge',
    organization: 'Google Cloud',
    issuedDate: 'March 2025',
    description: 'Earned skill badge by completing the Prompt Design in Vertex AI course, demonstrating proficiency in designing effective prompts for large language models.',
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
    description: 'Completed comprehensive training in data analysis using Python, including data manipulation, visualization, and statistical analysis.',
    category: 'certification',
    image: '/achievements/ibm-data-python.jpg',
    credentialId: 'f69be515945f41848da758a3534cdab8'
  },
  {
    id: '9',
    title: 'Data Science 101',
    organization: 'IBM SkillsBuild',
    issuedDate: 'April 2025',
    description: 'Introduction to data science fundamentals, covering key concepts, methodologies, and tools used in the field.',
    category: 'certification',
    image: '/achievements/ibm-ds101.jpg',
    credentialId: '634f673197544ce38cb9aa2587fd0782'
  },
  {
    id: '10',
    title: 'Data Science Methodology',
    organization: 'IBM SkillsBuild',
    issuedDate: 'April 2025',
    description: 'Learned the major steps involved in practicing data science, including problem formulation, data collection, and model deployment.',
    category: 'certification',
    image: '/achievements/ibm-methodology.jpg',
    credentialId: 'e952973f82c443d98d0786eca34a0b00'
  },
  {
    id: '11',
    title: 'Data Visualization with Python',
    organization: 'IBM SkillsBuild',
    issuedDate: 'April 2025',
    description: 'Mastered data visualization techniques using Python libraries including Matplotlib, Seaborn, and Plotly.',
    category: 'certification',
    image: '/achievements/ibm-visualization.jpg',
    credentialId: '9bc9df5cd4c1437abb293d2f716f13e4'
  },
  {
    id: '12',
    title: 'Python 101 for Data Science',
    organization: 'IBM SkillsBuild',
    issuedDate: 'April 2025',
    description: 'Foundational Python programming for data science, covering essential libraries and programming concepts.',
    category: 'certification',
    image: '/achievements/ibm-python101.jpg',
    credentialId: '509f8539dbcd468ca020aa6b8f71cdda'
  },
  {
    id: '13',
    title: 'Data Science Tools',
    organization: 'IBM SkillsBuild',
    issuedDate: 'April 2025',
    description: 'Proficiency in essential data science tools including Jupyter, RStudio, and GitHub.',
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
    description: 'Introduction to Hadoop ecosystem, distributed computing, and big data processing fundamentals.',
    category: 'certification',
    image: '/achievements/ibm-hadoop.jpg',
    credentialId: 'af90efc4fdc44ccd98108ec86dcdba48'
  },
  {
    id: '15',
    title: 'Big Data 101',
    organization: 'IBM SkillsBuild',
    issuedDate: 'April 2025',
    description: 'Comprehensive overview of big data concepts, technologies, and applications in modern data engineering.',
    category: 'certification',
    image: '/achievements/ibm-bigdata.jpg',
    credentialId: '8f38bc90d85f433dbe74495bb2b9e56f'
  },
  {
    id: '16',
    title: 'Spark Fundamentals I',
    organization: 'IBM SkillsBuild',
    issuedDate: 'April 2025',
    description: 'Learned Apache Spark fundamentals for large-scale data processing and distributed computing.',
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
    description: 'Comprehensive introduction to AI concepts, machine learning, neural networks, and practical applications.',
    category: 'certification',
    image: '/achievements/ibm-ai-fundamentals.jpg'
  },
  {
    id: '18',
    title: 'Understanding and Applying Text Embeddings',
    organization: 'DeepLearning.AI',
    issuedDate: 'April 2025',
    description: 'Advanced course on text embeddings, semantic search, and natural language processing techniques.',
    category: 'certification',
    image: '/achievements/deeplearning-embeddings.jpg'
  },
  {
    id: '19',
    title: 'Machine Learning Foundations: Linear Algebra',
    organization: 'LinkedIn Learning',
    issuedDate: 'October 2024',
    description: 'Mathematical foundations for machine learning, focusing on linear algebra concepts and applications.',
    category: 'course',
    image: '/achievements/linkedin-linear.jpg'
  },
  {
    id: '20',
    title: 'Artificial Intelligence Foundations: Thinking Machines',
    organization: 'LinkedIn Learning',
    issuedDate: 'October 2024',
    description: 'Explored the history, concepts, and future of artificial intelligence and machine learning.',
    category: 'course',
    image: '/achievements/linkedin-ai.jpg'
  },

  // Microsoft Copilot & Generative AI
  {
    id: '21',
    title: 'Boost Your Productivity with Microsoft Copilot',
    organization: 'Mereka',
    issuedDate: 'March 2025',
    description: 'Learned to leverage Microsoft Copilot for enhanced productivity and AI-assisted workflows.',
    category: 'course',
    image: '/achievements/mereka-copilot.jpg',
    credentialId: 'fb6bb11d'
  },
  {
    id: '22',
    title: 'Explore Generative AI',
    organization: 'Mereka',
    issuedDate: 'March 2025',
    description: 'Comprehensive exploration of generative AI technologies, applications, and best practices.',
    category: 'course',
    image: '/achievements/mereka-genai.jpg',
    credentialId: '7f1306b8'
  },
  {
    id: '23',
    title: 'Explore Responsible AI',
    organization: 'Mereka',
    issuedDate: 'March 2025',
    description: 'Training on ethical AI development, bias mitigation, and responsible AI practices.',
    category: 'course',
    image: '/achievements/mereka-responsible.jpg',
    credentialId: 'cd838cb5'
  },
  {
    id: '24',
    title: 'Get Started with Microsoft Copilot',
    organization: 'Mereka',
    issuedDate: 'March 2025',
    description: 'Introduction to Microsoft Copilot features and practical applications in daily workflows.',
    category: 'course',
    image: '/achievements/mereka-getstarted.jpg',
    credentialId: '75b5641c'
  },
  {
    id: '25',
    title: 'Explore AI for All',
    organization: 'Mereka',
    issuedDate: 'March 2025',
    description: 'Accessible introduction to AI concepts and applications for diverse audiences.',
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
    description: 'Professional certification in data analysis, covering statistical methods, data visualization, and analytical techniques.',
    category: 'certification',
    image: '/achievements/apu-analyst.jpg'
  },
  {
    id: '27',
    title: 'Graduate Engineer',
    organization: 'The Institution of Engineers Malaysia',
    issuedDate: 'October 2022',
    description: 'Recognized as a Graduate Engineer by the Institution of Engineers Malaysia.',
    category: 'certification',
    image: '/achievements/iem-graduate.jpg',
    credentialId: '119043'
  },
  {
    id: '28',
    title: 'Graduate Engineer',
    organization: 'Board of Engineers Malaysia',
    issuedDate: 'March 2022',
    description: 'Registered as a Graduate Engineer with the Board of Engineers Malaysia.',
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
    description: 'Core foundations of artificial intelligence including machine learning, deep learning, and neural networks.',
    category: 'certification',
    image: '/achievements/ibm-ai-foundations.jpg'
  },
  {
    id: '30',
    title: 'Agile Explorer',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Introduction to Agile methodologies, Scrum framework, and iterative development practices.',
    category: 'certification',
    image: '/achievements/ibm-agile.jpg'
  },
  {
    id: '31',
    title: 'Data Fundamentals',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Fundamental concepts of data management, data structures, and data analysis principles.',
    category: 'certification',
    image: '/achievements/ibm-data-fundamentals.jpg'
  },
  {
    id: '32',
    title: 'Data Science Foundations - Level 1',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'First level of data science foundations covering essential concepts and methodologies.',
    category: 'certification',
    image: '/achievements/ibm-ds-level1.jpg'
  },
  {
    id: '33',
    title: 'Data Science Foundations - Level 2 (V2)',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Advanced data science foundations building on Level 1 concepts with practical applications.',
    category: 'certification',
    image: '/achievements/ibm-ds-level2.jpg'
  },
  {
    id: '34',
    title: 'Data Science Methodologies',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Comprehensive training on data science methodologies and best practices.',
    category: 'certification',
    image: '/achievements/ibm-ds-methodologies.jpg'
  },
  {
    id: '35',
    title: 'Data Science Tools',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Proficiency in essential data science tools and platforms.',
    category: 'certification',
    image: '/achievements/ibm-ds-tools.jpg'
  },
  {
    id: '36',
    title: 'Data Analysis Using Python',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Advanced data analysis techniques using Python and popular data science libraries.',
    category: 'certification',
    image: '/achievements/ibm-data-analysis-python.jpg'
  },
  {
    id: '37',
    title: 'Data Visualization Using Python',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Creating compelling data visualizations using Python visualization libraries.',
    category: 'certification',
    image: '/achievements/ibm-data-viz-python.jpg'
  },
  {
    id: '38',
    title: 'Python for Data Science',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Comprehensive Python programming for data science applications.',
    category: 'certification',
    image: '/achievements/ibm-python-ds.jpg'
  },
  {
    id: '39',
    title: 'Hadoop Foundations - Level 1',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Foundational knowledge of Hadoop ecosystem and distributed data processing.',
    category: 'certification',
    image: '/achievements/ibm-hadoop-level1.jpg'
  },
  {
    id: '40',
    title: 'Spark - Level 1',
    organization: 'IBM',
    issuedDate: 'April 2025',
    description: 'Introduction to Apache Spark for big data processing and analytics.',
    category: 'certification',
    image: '/achievements/ibm-spark-level1.jpg'
  },

  // Additional Mereka Certifications
  {
    id: '41',
    title: 'Explore AI Basics',
    organization: 'Mereka',
    issuedDate: 'March 2025',
    description: 'Basic concepts of artificial intelligence and its real-world applications.',
    category: 'course',
    image: '/achievements/mereka-ai-basics.jpg',
    credentialId: 'e484d41b'
  },
  {
    id: '42',
    title: 'Explore Internet Search and Beyond',
    organization: 'Mereka',
    issuedDate: 'March 2025',
    description: 'Advanced internet search techniques and information retrieval strategies.',
    category: 'course',
    image: '/achievements/mereka-search.jpg',
    credentialId: 'f9f3a231'
  },
];
