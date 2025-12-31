// Portfolio data
import { Experience, Project, Skill, Certification, Achievement } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Data Engineer',
    company: 'AEM Energy Solutions',
    period: 'Jun 2025 - Present',
    description: 'Managing end-to-end data pipelines, ETL automation, and Power BI dashboards for oil & gas analytics.',
    highlights: [
      '30% reduction in data prep time',
      'SQL to NoSQL migration',
      'Cross-team collaboration'
    ],
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: '2',
    title: 'Data Analyst',
    company: 'EISmartwork',
    period: 'May 2024 - May 2025',
    description: 'Built ML models on 10M+ record datasets, created interactive dashboards, and optimized ELT pipelines.',
    highlights: [
      '20% efficiency boost',
      '50% faster reporting',
      '40% query optimization'
    ],
    color: 'from-green-600 to-green-800',
  },
  {
    id: '3',
    title: 'Engineer',
    company: 'G&P Geotechnic',
    period: 'Aug 2022 - May 2024',
    description: 'Data analysis, visualization, and automated workflows using Python & VBA Excel for engineering projects.',
    highlights: [
      '30% manual effort reduction',
      'High-accuracy analysis',
      'Engineering to data transition'
    ],
    color: 'from-purple-600 to-purple-800',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Duplicate Question Detection',
    type: 'Master\'s Research',
    description: 'NLP system using FastText & PCA for scalable duplicate detection on Quora dataset.',
    achievement: '83.7% accuracy, 78% faster computation',
    tech: ['Python', 'FastText', 'PCA', 'ML', 'NLP'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: '2',
    title: 'ETL Pipeline Automation',
    type: 'Professional Project',
    description: 'Automated data ingestion pipeline for oil & gas analytics with real-time monitoring.',
    tech: ['Python', 'SQL', 'Azure', 'Power BI'],
    color: 'from-cyan-500 to-blue-500',
  },
];

export const skills: Skill[] = [
  {
    category: 'Programming',
    items: ['Python', 'SQL', 'C++', 'R', 'HTML', 'JavaScript'],
    level: 95
  },
  {
    category: 'ML & AI',
    items: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'NLP'],
    level: 90
  },
  {
    category: 'Data Analytics',
    items: ['Power BI', 'Pandas', 'NumPy', 'Matplotlib'],
    level: 92
  },
  {
    category: 'Cloud & MLOps',
    items: ['Azure', 'AWS', 'GCP', 'Model Deployment', 'API Integration'],
    level: 85
  },
  {
    category: 'Data Engineering',
    items: ['ETL Pipelines', 'Data Cleansing', 'Big Data'],
    level: 88
  },
];

export const certifications: Certification[] = [
  {
    name: 'Azure AI-900/SC-900/AZ-900',
    org: 'Microsoft',
    year: '2024'
  },
  {
    name: 'Power BI Data Analyst PL-300',
    org: 'Microsoft',
    year: '2023'
  },
  {
    name: 'PCEP-02 Python Programmer',
    org: 'Python Institute',
    year: '2023'
  },
  {
    name: 'BigQuery ML & Vertex AI',
    org: 'Google Cloud',
    year: '2025'
  },
  {
    name: 'Big Data & Hadoop',
    org: 'IBM',
    year: '2025'
  },
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Champion - Axiata Innovation Challenge 2025',
    description: 'Won first place in national innovation challenge',
    date: '2025',
    type: 'award',
    icon: '🏆'
  },
  {
    id: '2',
    title: 'Google Speaker for AI Build 2025',
    description: 'Selected as speaker for Google AI Build event',
    date: '2025',
    type: 'milestone',
    icon: '🎤'
  },
  {
    id: '3',
    title: 'Top 20 - AWS National 2025',
    description: 'Ranked in top 20 for LLM Training competition',
    date: '2025',
    type: 'award',
    icon: '🥉'
  },
];

export const education = [
  {
    step: 'Step 1',
    title: 'Bachelor in Civil Engineering',
    content: 'University Malaysia Pahang Al-Sultan Abdullah (UMPSA) • 2018-2022 • CGPA: 3.42',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop'
  },
  {
    step: 'Step 2',
    title: 'Master in Artificial Intelligence',
    content: 'University Malaysia Pahang Al-Sultan Abdullah (UMPSA) • 2023-Present • CGPA: 3.68',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
  },
  {
    step: 'Step 3',
    title: 'Continuous Learning',
    content: 'Professional certifications and hands-on experience in Data Engineering, ML, and Cloud Platforms',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop'
  },
];

export const educationCards = [
  {
    institution: 'University Malaysia Pahang Al-Sultan Abdullah',
    degree: 'Master',
    field: 'Artificial Intelligence',
    period: '2023 - Present',
    location: 'Pekan, Pahang',
    logo: undefined
  },
  {
    institution: 'University Malaysia Pahang Al-Sultan Abdullah',
    degree: 'Bachelor',
    field: 'Civil Engineering',
    period: '2018 - 2022',
    location: 'Pekan, Pahang',
    logo: undefined
  },
];

export const careers = [
  {
    company: 'AEM Energy Solutions',
    role: 'Data Engineer',
    period: 'Jun 2025 - Present',
    location: 'Kuala Lumpur, Malaysia',
    type: 'Full-time' as const,
    logo: undefined,
    responsibilities: [
      'Design and implement end-to-end data pipelines for oil & gas analytics',
      'Automate ETL processes reducing data preparation time by 30%',
      'Develop and maintain Power BI dashboards for real-time monitoring',
      'Successfully migrated legacy SQL databases to NoSQL architecture',
      'Collaborate with cross-functional teams to optimize data workflows'
    ]
  },
  {
    company: 'EISmartwork',
    role: 'Data Analyst',
    period: 'May 2024 - May 2025',
    location: 'Kuala Lumpur, Malaysia',
    type: 'Onsite' as const,
    logo: undefined,
    responsibilities: [
      'Built machine learning models on datasets with 10M+ records',
      'Created interactive dashboards that improved reporting speed by 50%',
      'Optimized ELT pipelines resulting in 40% faster query performance',
      'Conducted statistical analysis and data visualization for business insights',
      'Increased operational efficiency by 20% through data-driven recommendations'
    ]
  },
  {
    company: 'G&P Geotechnic',
    role: 'Engineer',
    period: 'Aug 2022 - May 2024',
    location: 'Kuala Lumpur, Malaysia',
    type: 'Onsite' as const,
    logo: undefined,
    responsibilities: [
      'Performed data analysis and visualization for engineering projects',
      'Automated workflows using Python and VBA Excel reducing manual effort by 30%',
      'Developed high-accuracy analysis tools for geotechnical assessments',
      'Successfully transitioned from engineering to data science role',
      'Collaborated with engineering teams on data-driven project optimization'
    ]
  },
];

export const personalInfo = {
  name: 'Razeen Iqbal',
  role: 'Data Engineer & AI Specialist',
  email: 'razeeniqbal98@gmail.com',
  phone: '(+60) 13-7441727',
  location: 'Seri Kembangan, Malaysia',
  github: 'https://github.com/razeeniqbal',
  linkedin: 'https://linkedin.com/in/razeeniqbal',
  bio: 'Data Engineer & AI Specialist passionate about building intelligent data solutions. Currently pursuing Master\'s in AI with expertise in ETL pipelines, ML models, and cloud platforms.',
  cgpa: '3.68',
  university: 'UMPSA',
  status: 'Open to opportunities • Data Engineering & AI Projects',
  languages: ['Malay (Native)', 'English (Professional)', 'Arabic (Educational)'],
};
