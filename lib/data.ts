// Core portfolio data - Only essential data used across multiple pages
// Specific data (projects, achievements, skills) are in their own dedicated files:
// - projectsData.ts - All project information
// - achievementsData.ts - All certifications and achievements
// - skillsData.ts - Tech stack and skills

export const educationCards = [
  {
    institution: 'Universiti Malaysia Pahang Al-Sultan Abdullah',
    degree: 'Master',
    field: 'Artificial Intelligence',
    period: '2024 - 2025',
    location: 'Pekan, Pahang',
    cgpa: '3.72',
    logo: undefined
  },
  {
    institution: 'Universiti Putra Malaysia',
    degree: 'Bachelor',
    field: 'Civil Engineering',
    period: '2017 - 2021',
    location: 'Serdang, Selangor',
    cgpa: '3.65',
    logo: undefined
  },
];

export const careers = [
  {
    company: 'AEM Energy Solutions',
    role: 'Data Engineer',
    period: 'Jun 2025 - Present',
    location: 'Kuala Lumpur, Malaysia',
    type: 'Hybrid' as const,
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
  cgpa: '3.72',
  university: 'UMPSA',
  status: 'Open to opportunities • Data Engineering & AI Projects',
  languages: ['Malay (Native)', 'English (Professional)', 'Arabic (Educational)'],
};
