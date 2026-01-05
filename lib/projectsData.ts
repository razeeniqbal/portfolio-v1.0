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
    description: 'XGBoost-powered job matching with ML and semantic analysis for accurate candidate-job matching.',
    image: '/projects/job-matching-t2.jpg',
    techStack: ['Python', 'XGBoost', 'Scikit-Learn', 'NLP'],
    featured: true,
    category: 'ml',
    githubUrl: 'https://github.com/razeeniqbal/job-matching-system-t2',
    tags: ['Machine Learning', 'XGBoost', 'Semantic Analysis'],
    stars: 1
  },
  {
    id: '2',
    title: 'EduGen',
    description: 'Educational content generation platform for creating and managing educational materials efficiently.',
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
    description: 'Hackathon 2025: Sales automation platform with Claude AI for intelligent lead management and insights.',
    image: '/projects/leadsightz.jpg',
    techStack: ['TypeScript', 'Next.js', 'Claude AI', 'React'],
    featured: true,
    category: 'web',
    githubUrl: 'https://github.com/razeeniqbal/hackathon-cursor-leadsightz',
    tags: ['Hackathon', 'AI', 'Sales Automation']
  },
  {
    id: '4',
    title: 'Aircraft Journey Summary Extractor',
    description: 'Aircraft journey data extraction and analysis with Python for flight pattern insights.',
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
    description: 'OpenCV face recognition system with Streamlit interface, featuring HOG extraction and SVM classification.',
    image: '/projects/face-recognition.jpg',
    techStack: ['Python', 'OpenCV', 'Streamlit', 'SVM'],
    featured: true,
    category: 'ml',
    githubUrl: 'https://github.com/razeeniqbal/face-recognition-system',
    tags: ['Computer Vision', 'Face Recognition', 'OpenCV']
  },
  {
    id: '6',
    title: 'Job Matching System T1',
    description: 'Modular job matching with quantitative scoring based on skills, experience, and education.',
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
    description: 'Deep learning for plant disease classification using transfer learning and CNN models.',
    image: '/projects/plant-disease.jpg',
    techStack: ['Python', 'TensorFlow', 'Transfer Learning', 'CNN'],
    featured: false,
    category: 'ml',
    githubUrl: 'https://github.com/razeeniqbal/Plant-Disease-Classification',
    tags: ['Deep Learning', 'Image Classification', 'Agriculture']
  },
  {
    id: '8',
    title: 'HR Analytics Dashboard & Predictive Model',
    description: 'Predict employee attrition with ML models and interactive dashboards for talent retention insights.',
    image: '/projects/hr-analytics.jpg',
    techStack: ['Python', 'Pandas', 'Scikit-Learn', 'Visualization'],
    featured: false,
    category: 'data',
    githubUrl: 'https://github.com/razeeniqbal/HR-Analytics-Dashboard-Predictive-Model',
    tags: ['Data Science', 'HR Analytics', 'Predictive Modeling']
  },
  {
    id: '9',
    title: 'Excel Bike Sales Dashboard',
    description: 'Excel dashboard for bike sales analysis with dynamic charts, pivot tables, and demographics insights.',
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
    description: 'Excel dashboard for coffee sales with interactive charts, trends, and customer segmentation analysis.',
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
    description: 'Power BI dashboard for food preparation planning with resource tracking and survival analytics.',
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
    description: 'Analysis of London bike sharing data with EDA and visualization of usage patterns and weather effects.',
    image: '/projects/london-bike.jpg',
    techStack: ['Python', 'Jupyter', 'Pandas', 'Matplotlib'],
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
