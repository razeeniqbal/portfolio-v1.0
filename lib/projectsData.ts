export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  featured: boolean;
  category: 'web' | 'mobile' | 'ml' | 'data' | 'other';
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  stars?: number;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Job Matching System T2',
    description: 'An XGBoost-powered job matching system that uses machine learning and semantic analysis to accurately match candidates with job requirements, providing transparent scoring and explanations through an interactive dashboard.',
    image: '/projects/job-matching-t2.jpg',
    techStack: ['Python', 'XGBoost', 'Machine Learning', 'Scikit-Learn', 'NLP'],
    featured: true,
    category: 'ml',
    githubUrl: 'https://github.com/razeeniqbal/job-matching-system-t2',
    tags: ['Machine Learning', 'XGBoost', 'Semantic Analysis'],
    stars: 1
  },
  {
    id: '2',
    title: 'EduGen',
    description: 'Educational content generation platform built with TypeScript and modern web technologies. Helps create and manage educational materials efficiently.',
    image: '/projects/edugen.jpg',
    techStack: ['TypeScript', 'Next.js', 'React', 'Education Tech'],
    featured: false,
    category: 'web',
    githubUrl: 'https://github.com/razeeniqbal/edugen',
    tags: ['Education', 'Content Generation', 'Web Platform']
  },
  {
    id: '3',
    title: 'LeadSightz - Sales Automation Platform',
    description: 'Cursor x Anthropic Hackathon 2025 submission: A smart platform for automating the sales pipeline using Claude Sonnet 4.5 and Next.js. Features intelligent lead management and AI-powered insights.',
    image: '/projects/leadsightz.jpg',
    techStack: ['TypeScript', 'Next.js', 'Claude AI', 'Anthropic', 'React'],
    featured: true,
    category: 'web',
    githubUrl: 'https://github.com/razeeniqbal/hackathon-cursor-leadsightz',
    tags: ['Hackathon', 'AI', 'Sales Automation']
  },
  {
    id: '4',
    title: 'Aircraft Journey Summary Extractor',
    description: 'Data extraction and analysis tool for aircraft journey data. Built with Python and Jupyter Notebook for efficient data processing and flight pattern analysis.',
    image: '/projects/aircraft.jpg',
    techStack: ['Python', 'Jupyter Notebook', 'Data Analysis', 'Pandas'],
    featured: false,
    category: 'data',
    githubUrl: 'https://github.com/razeeniqbal/aircraft-journey-summary-extractor',
    tags: ['Data Engineering', 'Analysis', 'Aviation']
  },
  {
    id: '5',
    title: 'Face Recognition System',
    description: 'A lightweight, OpenCV-based face recognition system with a Streamlit web interface that detects and identifies faces in images. Features multiple detection methods, face alignment, and HOG feature extraction with SVM classification.',
    image: '/projects/face-recognition.jpg',
    techStack: ['Python', 'OpenCV', 'Streamlit', 'SVM', 'Computer Vision'],
    featured: true,
    category: 'ml',
    githubUrl: 'https://github.com/razeeniqbal/face-recognition-system',
    tags: ['Computer Vision', 'Face Recognition', 'OpenCV']
  },
  {
    id: '6',
    title: 'Job Matching System T1',
    description: 'A modular job matching system that quantitatively scores candidate-job fit based on weighted skills, experience, education, and certification criteria.',
    image: '/projects/job-matching-t1.jpg',
    techStack: ['Python', 'Machine Learning', 'Data Analysis', 'Scoring System'],
    featured: false,
    category: 'ml',
    githubUrl: 'https://github.com/razeeniqbal/job-matching-system-t1',
    tags: ['Machine Learning', 'Job Matching', 'Scoring']
  },
  {
    id: '7',
    title: 'Plant Disease Classification',
    description: 'This project demonstrates practical implementation of deep learning concepts, model comparison methodology, and the advantages of transfer learning for image classification tasks.',
    image: '/projects/plant-disease.jpg',
    techStack: ['Python', 'Deep Learning', 'TensorFlow', 'Transfer Learning', 'CNN'],
    featured: false,
    category: 'ml',
    githubUrl: 'https://github.com/razeeniqbal/Plant-Disease-Classification',
    tags: ['Deep Learning', 'Image Classification', 'Agriculture']
  },
  {
    id: '8',
    title: 'HR Analytics Dashboard & Predictive Model',
    description: 'A data science project to predict employee attrition, analyze HR trends, and provide actionable insights for talent retention. Includes interactive dashboards and machine learning models.',
    image: '/projects/hr-analytics.jpg',
    techStack: ['Python', 'Pandas', 'Scikit-Learn', 'Data Visualization', 'ML'],
    featured: false,
    category: 'data',
    githubUrl: 'https://github.com/razeeniqbal/HR-Analytics-Dashboard-Predictive-Model',
    tags: ['Data Science', 'HR Analytics', 'Predictive Modeling']
  },
  {
    id: '9',
    title: 'Excel Bike Sales Dashboard',
    description: 'Interactive Excel dashboard analyzing bike sales data with dynamic charts, pivot tables, and sales performance metrics. Features customer demographics analysis and regional sales insights.',
    image: '/projects/excel-bike-sales.jpg',
    techStack: ['Excel', 'Data Visualization', 'Pivot Tables', 'Dashboard Design'],
    featured: false,
    category: 'data',
    githubUrl: 'https://github.com/razeeniqbal/excel-bike-sales',
    tags: ['Excel', 'Dashboard', 'Sales Analytics']
  },
  {
    id: '10',
    title: 'Excel Coffee Sales Dashboard',
    description: 'Comprehensive Excel dashboard for coffee sales analysis featuring interactive charts, sales trends, and product performance metrics. Includes customer segmentation and time-series analysis.',
    image: '/projects/excel-coffee-sales.jpg',
    techStack: ['Excel', 'Data Analysis', 'Dashboard', 'Charts'],
    featured: false,
    category: 'data',
    githubUrl: 'https://github.com/razeeniqbal/excel-coffee-sales',
    tags: ['Excel', 'Dashboard', 'Sales Analytics']
  },
  {
    id: '11',
    title: 'Power BI Apocalypse Food Prep Dashboard',
    description: 'Power BI dashboard for apocalypse food preparation planning and inventory management. Features interactive visualizations for resource tracking and survival planning analytics.',
    image: '/projects/powerbi-apocolypse.jpg',
    techStack: ['Power BI', 'Data Visualization', 'DAX', 'Dashboard'],
    featured: false,
    category: 'data',
    githubUrl: 'https://github.com/razeeniqbal/powerbi-apocolypse-food-prep',
    tags: ['Power BI', 'Dashboard', 'Planning']
  },
  {
    id: '12',
    title: 'London Bike Sharing Analysis',
    description: 'Jupyter Notebook-based analysis of London bike sharing data. Includes data cleaning, exploratory data analysis, and visualization of bike usage patterns across different seasons and weather conditions.',
    image: '/projects/london-bike.jpg',
    techStack: ['Python', 'Jupyter Notebook', 'Pandas', 'Data Visualization', 'Matplotlib'],
    featured: false,
    category: 'data',
    githubUrl: 'https://github.com/razeeniqbal/python-london-bike',
    tags: ['Data Science', 'EDA', 'Visualization']
  },
];

export const projectCategories = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile Apps' },
  { value: 'ml', label: 'Machine Learning' },
  { value: 'data', label: 'Data Engineering' },
  { value: 'other', label: 'Other' },
];
