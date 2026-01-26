const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Pipelines", imgPath: "assets/images/pipeline.svg" },
  { text: "Dashboard", imgPath: "assets/images/dashboard.svg" },
  { text: "Database", imgPath: "assets/images/database.svg" },
  { text: "AI/ML", imgPath: "assets/images/ai.svg" },
  { text: "Pipelines", imgPath: "assets/images/pipeline.svg" },
  { text: "Dashboard", imgPath: "assets/images/dashboard.svg" },
  { text: "Database", imgPath: "assets/images/database.svg" },
  { text: "AI/ML", imgPath: "assets/images/ai.svg" }
];

const counterItems = [
  { value: 2, suffix: "+", label: "Internship Experience" },
  { value: 15, suffix: "+", label: "Portofolio Projects" },
  { value: 10, suffix: "+", label: "Tech Stacks" },
  { value: 8, suffix: "+", label: "Certifications" },
];

const logoIconsList = [
  {
    imgPath: "assets/images/tools/python.png",
  },
  {
    imgPath: "assets/images/tools/java.png",
  },
  {
    imgPath: "assets/images/tools/vscode.png",
  },
  {
    imgPath: "assets/images/tools/github.png",
  },
  {
    imgPath: "assets/images/tools/sql.png",
  },
  {
    imgPath: "assets/images/tools/postgres.png",
  },
  {
    imgPath: "assets/images/tools/ssms.png",
  },
  {
    imgPath: "assets/images/tools/bash.png",
  },
  {
    imgPath: "assets/images/tools/powerbi.png",
  },
  {
    imgPath: "assets/images/tools/kafka.png",
  },
  {
    imgPath: "assets/images/tools/spark.png",
  },
  {
    imgPath: "assets/images/tools/dbt.png",
  },
  {
    imgPath: "assets/images/tools/terraform.png",
  },
  {
    imgPath: "assets/images/tools/gcp.png",
  },
  {
    imgPath: "assets/images/tools/airflow.png",
  },
  {
    imgPath: "assets/images/tools/java.png",
  },
  {
    imgPath: "assets/images/tools/vscode.png",
  },
  {
    imgPath: "assets/images/tools/github.png",
  },
  {
    imgPath: "assets/images/tools/sql.png",
  },
  {
    imgPath: "assets/images/tools/postgres.png",
  },
  {
    imgPath: "assets/images/tools/ssms.png",
  },
  {
    imgPath: "assets/images/tools/bash.png",
  },
  {
    imgPath: "assets/images/tools/powerbi.png",
  },
  {
    imgPath: "assets/images/tools/kafka.png",
  },
  {
    imgPath: "assets/images/tools/spark.png",
  },
  {
    imgPath: "assets/images/tools/dbt.png",
  },
  {
    imgPath: "assets/images/tools/terraform.png",
  },
  {
    imgPath: "assets/images/tools/gcp.png",
  },
  {
    imgPath: "assets/images/tools/airflow.png",
  },
  
];

const abilities = [
  {
    imgPath: "assets/images/seo.png",
    title: "Quality Focus and Always Learning",
    desc: "Consistently delivers well-structured, high-quality work while actively learning new tools, technologies, and best practices to continuously improve."
  },
  {
    imgPath: "assets/images/chat.png",
    title: "Reliable and Trusted",
    desc: "Dependable team member who takes ownership of tasks, communicates clearly, and can be trusted to complete responsibilities with minimal supervision."
  },
  {
    imgPath: "assets/images/time.png",
    title: "On-Time Delivery",
    desc: "Strong time management skills ensure tasks are completed efficiently, meeting deadlines without compromising accuracy or quality."
  },
];


const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      'Bagas was mentored during his internship in the Data team, where he demonstrated a strong willingness to learn and consistently completed tasks on time. He adapted quickly to the team, worked well with colleagues, and handled every assignment with responsibility and focus. Bagas shows strong potential for future opportunities.',
    imgPath: "assets/images/logo-grp.png",
    logoPath: "assets/images/exp-grp1.png",
    title: "Data Engineer Intern",
    date: "June 2025 - October 2025",
    responsibilities: [
    "Engineered and migrated 140+ ETL pipelines from SSIS to Talend, ensuring data integrity with a 100% match validation between source systems (FTP) and target environments.",
    "Optimized SQL stored procedures and implemented a dynamic data masking mechanism, reducing historical data retrieval complexity by 80% and enhancing query performance.",
    "Maintained data pipeline health by monitoring SLAs and performing daily data reconciliation between RPA processes and Power BI dashboards to ensure accurate reporting."
    ],
  },
  {
    review:
      "No Review.",
    imgPath: "assets/images/logo-codveda.png",
    logoPath: "assets/images/exp-codveda.png",
    title: "Data Analyst Intern",
    date: "March 2025 - April 2025",
    responsibilities: [
    "Conducted comprehensive data analysis, cleaning, and visualization using Python, Pandas, Seaborn, and Matplotlib.",
    "Developed predictive models for regression (house price prediction, R2 = 0.86) and classification (customer churn, 92% accuracy) with model evaluation and hyperparameter tuning.",
    "Performed time series analysis, clustering (K-Means), and dimensionality reduction (PCA) for data segmentation and pattern discovery.",
    "Created interactive dashboards with Tableau and executed sentiment analysis on social media using NLTK, TextBlob, and WordCloud."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "assets/images/logo-grp1.png",
  },
  {
    name: "logo2",
    imgPath: "assets/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "assets/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Argha Jiwa Kusuma",
    mentions: "PT. Gunung Raja Paksi Tbk.",
    review:
      "I had the opportunity to mentor Bagas during his internship in the Data team. He showed a strong willingness to learn and was always eager to improve his skills.Bagas was consistent in completing his tasks, making sure everything was done properly and on time. He adapted quickly to the team, easily getting along with his new colleagues and contributing positively to the work environment. He completed every assignment given to him with great responsibility and focus. I believe Bagas has great potential and will do well in any future opportunity",
    imgPath: "assets/images/person.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/bagasdrizal/",
    imgPath: "assets/images/insta.png",
  },
  {
    name: "github",
    url: "https://github.com/neinAlkem",
    imgPath: "assets/images/gtihub-white.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/baghas-rizaluddin",
    imgPath: "assets/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  navLinks,
};