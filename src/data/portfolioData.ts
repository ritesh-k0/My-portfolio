export interface PersonalInfo {
  name: string;
  role: string;
  subtitle: string;
  tagline: string;
  description: string;
  aboutText: string;
  education: {
    degree: string;
    field: string;
    institution: string;
    department: string;
    currentYear: string;
    expectedGraduation: string;
    location: string;
  };
  careerGoal: string;
  longTermGoal: string;
  location: string;
  email: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUsername: string;
  linkedinUrl: string;
  resumeUrl: string;
  avatarUrl: string;
}

export const personalInfo: PersonalInfo = {
  name: "Ritesh Kumar",
  role: "Aspiring Software Engineer / Full-Stack Developer",
  avatarUrl: "/assets/images/ritesh-profile.jpg",
  subtitle: "B.Tech CSE Student | Aspiring Software Engineer | Full-Stack Developer",
  tagline: "Building practical web applications and strengthening core software engineering fundamentals.",
  description: "I'm a Computer Science Engineering student passionate about software development, problem solving, web technologies and building practical projects. I enjoy learning new technologies and improving my programming and development skills.",
  aboutText: "I'm a Computer Science Engineering student who enjoys turning ideas into practical applications. My current focus is strengthening my Java, DSA and full-stack development skills while building projects that help me understand real-world software development.",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    field: "Computer Science and Engineering",
    institution: "Sandip University, Sijoul",
    department: "School of Computer Science and Engineering",
    currentYear: "4th Year",
    expectedGraduation: "2027",
    location: "India"
  },
  careerGoal: "Aspiring Software Engineer / Full-Stack Developer",
  longTermGoal: "To become a Software Engineer and work at a top technology company such as Google.",
  location: "India",
  email: "riteshkumarrai313@gmail.com",
  githubUsername: "ritesh-K0",
  githubUrl: "https://github.com/ritesh-K0", // Placeholder: replace with exact profile URL if different
  linkedinUsername: "Ritesh kumar",
  linkedinUrl: "https://www.linkedin.com/feed/",
  resumeUrl: "#RESUME_URL" // Editable placeholder for Resume PDF link
};

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; note?: string }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for problem solving and software logic",
    skills: [
      { name: "Java" },
      { name: "Python" },
      { name: "C" },
      { name: "C++" },
      { name: "JavaScript" }
    ]
  },
  {
    title: "Core Computer Science",
    description: "Fundamental principles and theoretical foundation",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Object-Oriented Programming (OOP)" },
      { name: "DBMS" },
      { name: "SQL" },
      { name: "Problem Solving" }
    ]
  },
  {
    title: "Frontend Development",
    description: "Building responsive, modern user interfaces",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript (ES6+)" },
      { name: "React.js" },
      { name: "Vite" }
    ]
  },
  {
    title: "Backend Development",
    description: "Server architecture and API development",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" }
    ]
  },
  {
    title: "Database Management",
    description: "Relational and document storage solutions",
    skills: [
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "SQL" },
      { name: "MySQL" }
    ]
  },
  {
    title: "Tools & Libraries",
    description: "Development workflows, version control and utilities",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "JWT" },
      { name: "bcrypt" },
      { name: "JSON" }
    ]
  }
];

export interface JavaDsaTopic {
  category: "Java" | "DSA" | "Practice";
  title: string;
  topics: string[];
  description: string;
}

export const javaDsaData: JavaDsaTopic[] = [
  {
    category: "Java",
    title: "Java & Object-Oriented Principles",
    description: "Comprehensive understanding of object-oriented programming paradigms in Java.",
    topics: [
      "Java Basics & Syntax",
      "Classes and Objects",
      "Constructors",
      "Encapsulation",
      "Abstraction",
      "Inheritance",
      "Polymorphism",
      "Data Hiding",
      "Static Members",
      "Memory Concepts",
      "Garbage Collection"
    ]
  },
  {
    category: "DSA",
    title: "Data Structures & Algorithmic Patterns",
    description: "Core structural and algorithmic concepts practiced for technical interviews.",
    topics: [
      "Arrays & Matrices",
      "Strings & Parsing",
      "HashMap & Hash Sets",
      "Hashing Techniques",
      "Sorting Algorithms",
      "Heaps & Priority Queues",
      "Tries",
      "Graphs & Traversals",
      "Problem Solving Strategies"
    ]
  },
  {
    category: "Practice",
    title: "Coding Practice & Milestones",
    description: "Ongoing structured coding exercises and problem-solving platforms.",
    topics: [
      "HackerRank Java Practice",
      "Consistent Problem Solving",
      "Algorithmic Complexity Analysis (Time & Space)",
      "Technical Problem Formulation"
    ]
  }
];

export interface InternshipExperience {
  role: string;
  company: string;
  area: string;
  project: string;
  duration: string;
  description: string;
  projectSlug: string;
  highlights: string[];
}

export const experienceData: InternshipExperience[] = [
  {
    role: "Web Development Intern",
    company: "i2i",
    area: "Web Development",
    project: "Real Chat App",
    duration: "1 July 2025 – 31 July 2025",
    description: "Worked on web development during the internship and worked on a Real Chat App project.",
    projectSlug: "real-chat-app",
    highlights: [
      "Assigned to the web development division working on real-time interface and application modules.",
      "Collaborated on building the Real Chat App project as part of internship deliverables.",
      "Gained practical exposure to web development practices and project workflows."
    ]
  }
];

export interface CertificationItem {
  id: string;
  title: string;
  issuerOrProgram: string;
  status: string;
  description: string;
  certificateImagePlaceholder: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "c-lang-vap",
    title: "C Language Value Added Program",
    issuerOrProgram: "Value Added Program",
    status: "Completed",
    description: "Specialized program focused on foundational procedural programming, memory handling, pointers, and data structures in C.",
    certificateImagePlaceholder: "Add Certificate Image"
  },
  {
    id: "chatgpt-ai-cert",
    title: "ChatGPT & AI-Related Certification",
    issuerOrProgram: "AI Learning Program",
    status: "Completed",
    description: "Explored generative AI capabilities, prompt engineering techniques, and practical developer workflows using modern AI tools.",
    certificateImagePlaceholder: "Add Certificate Image"
  },
  {
    id: "robotics-internship-cert",
    title: "Robotics Internship / Certificate",
    issuerOrProgram: "Robotics Training Program",
    status: "Completed",
    description: "Hands-on experience with embedded systems, microcontroller logic, sensor integration, and motor actuation in robotics.",
    certificateImagePlaceholder: "Add Certificate Image"
  },
  {
    id: "fullstack-robotics-apna-college",
    title: "Full Stack Robotics Course / Certificate",
    issuerOrProgram: "Apna College",
    status: "Completed",
    description: "Comprehensive coursework covering robotics fundamentals, sensor-actuator interfacing, and engineering applications.",
    certificateImagePlaceholder: "Add Certificate Image"
  },
  {
    id: "java-dsa-learning",
    title: "Java & Data Structures Learning Achievement",
    issuerOrProgram: "DSA & Programming Practice",
    status: "Active / Completed Milestones",
    description: "Dedicated curriculum in object-oriented Java programming and algorithmic problem-solving across core data structures.",
    certificateImagePlaceholder: "Add Certificate Image"
  }
];

export interface AchievementItem {
  title: string;
  category: string;
  description: string;
  status: string;
}

export const achievementsData: AchievementItem[] = [
  {
    title: "HackerRank Java & DSA Learning Milestones",
    category: "Coding & Problem Solving",
    description: "Consistent problem solving in Java covering object-oriented programming concepts, arrays, strings, and standard algorithms on HackerRank.",
    status: "Ongoing Practice"
  },
  {
    title: "TCS NQT Preparation Milestones",
    category: "Placement Readiness",
    description: "Systematic preparation covering quantitative aptitude, logical reasoning, verbal ability, and advanced programming logic for TCS NQT.",
    status: "In Progress"
  },
  {
    title: "Comprehensive Campus Placement Preparation",
    category: "Career Development",
    description: "Structured interview preparation covering Computer Science fundamentals including DBMS, OOP, Operating Systems, and full-stack coding.",
    status: "Active Focus"
  },
  {
    title: "Robotics Project Development",
    category: "Hardware & Embedded Systems",
    description: "Successfully built an autonomous obstacle avoiding robotic vehicle integrating ultrasonic sensing, Arduino microcontroller, and motor drivers.",
    status: "Completed Hardware Project"
  },
  {
    title: "Hands-on Full-Stack Application Delivery",
    category: "Software Development",
    description: "Built modular web applications including the Employee Management System, Baking App, and clone architectures for hands-on learning.",
    status: "Project Showcase"
  }
];

export const currentFocusList: string[] = [
  "Improving Java and Data Structures & Algorithms (DSA)",
  "Preparing for software engineering interviews",
  "Practicing aptitude and reasoning",
  "Preparing for TCS NQT and IT company placements",
  "Building React projects",
  "Building full-stack projects",
  "Improving problem-solving and coding speed",
  "Learning backend development and API architectures",
  "Preparing for upcoming software engineering graduate opportunities"
];
