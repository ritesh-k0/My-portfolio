export interface ProjectItem {
  id: string;
  title: string;
  category: "Web Development" | "Full Stack" | "Java / DSA" | "Robotics";
  type: string;
  duration?: string;
  company?: string;
  shortDescription: string;
  description: string;
  disclaimer?: string;
  problemStatement: string;
  objectives: string[];
  technologies: string[];
  roles?: { role: string; details: string[] }[];
  keyFeatures: { title: string; description: string }[];
  howItWorks: string;
  workflow: string[];
  architecture: {
    title: string;
    description: string;
    flow: string[];
  };
  roboticsComponents?: {
    name: string;
    spec: string;
    description: string;
  }[];
  circuitDiagramNote?: string;
  arduinoCode?: string;
  screenshots: {
    title: string;
    description: string;
    placeholderNote: string;
  }[];
  developmentProcess: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  whatILearned: string[];
  futureImprovements: string[];
  projectResult: string;
  github: string;
  liveDemo: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "employee-management-system",
    title: "Employee Management System",
    category: "Web Development",
    type: "College Project",
    shortDescription: "A frontend-based Employee Management System developed using React.js, HTML, CSS, JavaScript and JSON.",
    description: "A comprehensive frontend task tracking and workflow management application designed to model administrative task assignment and employee activity logging. Built with React.js and structured JSON data handling.",
    problemStatement: "In academic environments and growing organizations, delegating and tracking assignments manually leads to confusion regarding task deadlines, active workloads, and completion statuses. This project addresses the need for a clean, intuitive task delegation interface separating supervisor operations from employee task updates.",
    objectives: [
      "Provide distinct operational workflows for administrative managers and team employees.",
      "Enable real-time task creation with details, priority flags, assignment targets, and categories.",
      "Give employees immediate visibility into their pending, active, completed, and failed tasks.",
      "Maintain a clear state hierarchy using React state and local structured JSON records."
    ],
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "JSON", "Vite"],
    roles: [
      {
        role: "Admin",
        details: [
          "Secure Admin Login portal",
          "Comprehensive administrative dashboard overview",
          "Create new tasks with title, date, assignee, and category tags",
          "Assign tasks directly to designated employee profiles",
          "Monitor aggregate task metrics across all active employees"
        ]
      },
      {
        role: "Employee",
        details: [
          "Individual Employee Login session",
          "Personalized employee dashboard with status counts",
          "Inspect assigned tasks and review task briefs",
          "Update task status (mark as Active, Completed, or Failed)",
          "Track personal productivity and completion statistics"
        ]
      }
    ],
    keyFeatures: [
      {
        title: "Admin Dashboard & Task Creator",
        description: "Enables administrators to construct new task payloads including assignment metadata, category tags, due dates, and initial statuses."
      },
      {
        title: "Employee Dashboard & Task Review",
        description: "Displays segmented cards for New Tasks, Active Tasks, Completed Tasks, and Failed Tasks with quick status toggle actions."
      },
      {
        title: "Status Tracking Pipeline",
        description: "Maintains real-time counters reflecting dynamic task transitions as employees accept, progress, or complete deliverables."
      },
      {
        title: "Structured JSON Data Layer",
        description: "Simulates persistent records using structured JSON schemas representing employee profiles and associated task objects."
      }
    ],
    howItWorks: "The system initializes from structured JSON seed data representing admins and employees. When an administrator authenticates, they access the creation panel to dispatch task items into the state. When an employee logs in, the view filters tasks matching their identifier, letting them update task lifecycles directly.",
    workflow: [
      "Admin Login",
      "Admin Dashboard",
      "Create Task",
      "Assign Task",
      "Employee Login",
      "Employee Views Task",
      "Employee Completes/Updates Task",
      "Task Status Updated"
    ],
    architecture: {
      title: "Component & State Flow Architecture",
      description: "Modular React component hierarchy managing state transitions via top-level handlers and structured JSON data models.",
      flow: [
        "Authentication Context / Session Guard",
        "Role Dispatcher (Admin View vs. Employee View)",
        "Task Management State Store (React Hooks + JSON persistence)",
        "Task Card Renderers with Action Callbacks"
      ]
    },
    screenshots: [
      {
        title: "Admin Dashboard Overview",
        description: "Administrative task dispatch interface and employee status summary.",
        placeholderNote: "Add Project Screenshot (Admin Dashboard)"
      },
      {
        title: "Employee Task Board",
        description: "Segmented columns tracking new, active, completed, and failed tasks.",
        placeholderNote: "Add Project Screenshot (Employee View)"
      },
      {
        title: "Task Creation Modal / Form",
        description: "Form validating assignment fields, deadline selection, and descriptions.",
        placeholderNote: "Add Project Screenshot (Task Form)"
      }
    ],
    developmentProcess: [
      "Designed the data schema in JSON modeling users (admin/employees) and task structures.",
      "Built authentication state simulation allowing switching between Admin and Employee roles.",
      "Constructed the Admin task creation interface with controlled form inputs.",
      "Developed the Employee dashboard displaying categorized status cards.",
      "Implemented state updating logic to record status transitions (Active/Completed/Failed) cleanly."
    ],
    challengesAndSolutions: [
      {
        challenge: "Managing shared state across different role views without a remote database.",
        solution: "Structured centralized state at the parent level and persisted updates using structured JSON patterns and browser storage."
      },
      {
        challenge: "Preventing accidental state mutations when updating task status arrays.",
        solution: "Used immutable update patterns with map and spread operators to ensure clean React re-renders."
      }
    ],
    whatILearned: [
      "Role-based UI rendering patterns in React applications.",
      "Handling complex nested state updates in functional React components.",
      "Structuring mock data schemas mirroring production database tables.",
      "Designing clean dashboard layouts with modern CSS and responsive utility classes."
    ],
    futureImprovements: [
      "Backend integration with Node.js and Express.js",
      "MongoDB database integration for persistent multi-device storage",
      "REST API design for decoupled client-server communications",
      "Real authentication using secure JWT and bcrypt password hashing",
      "Role-based authorization middleware on server routes",
      "Real-time notifications when new tasks are assigned",
      "Advanced search and multi-attribute filtering on the task table"
    ],
    projectResult: "Delivered a responsive task management prototype showcasing role-based dashboard design and stateful task lifecycle tracking.",
    github: "Add GitHub URL", // Placeholder: replace with repository URL
    liveDemo: "Add Live Demo URL" // Placeholder: replace with deployed app URL
  },
  {
    id: "real-chat-app",
    title: "Real Chat App",
    category: "Web Development",
    type: "Internship Project",
    company: "i2i",
    duration: "1 July 2025 – 31 July 2025",
    shortDescription: "A web development project built during the i2i internship focused on messaging and communication interfaces.",
    description: "Developed during the one-month web development internship at i2i. Focused on building a functional Real Chat App interface and exploring web development workflows for interactive user messaging.",
    problemStatement: "Modern web users expect lightweight, frictionless communication channels. This project was developed during the internship to understand user interaction patterns, message feed layout, and responsive communication design.",
    objectives: [
      "Gain direct practical experience in web development during the i2i internship.",
      "Develop the frontend and interactive architecture for the Real Chat App project.",
      "Implement conversation layouts, message bubbles, contact panels, and input controls.",
      "Learn professional development workflows and iterative code review practices."
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Web Development", "REST / JSON"],
    keyFeatures: [
      {
        title: "Chat Interface & Message Stream",
        description: "Clean conversational view displaying sent and received message streams with clear sender differentiation."
      },
      {
        title: "Contact / Conversation List",
        description: "Sidebar navigation panel allowing users to select active conversation threads."
      },
      {
        title: "Message Composition Bar",
        description: "Interactive input panel with submit triggers and form validation."
      },
      {
        title: "Responsive Mobile Layout",
        description: "Adaptive design adjusting smoothly between sidebar list view and active chat pane on mobile viewports."
      }
    ],
    howItWorks: "The application establishes an interactive UI allowing users to select conversations and compose messages into a live feed. Messages are appended to state and rendered through styled message components.",
    workflow: [
      "User selects active conversation from the contact roster",
      "Message history loads into the central view area",
      "User composes new message in the input field",
      "Message submits, appending to conversation state and updating timestamp"
    ],
    architecture: {
      title: "Chat Application Interface Flow",
      description: "Structured communication interface separating conversation rosters, message stream viewport, and message dispatcher.",
      flow: [
        "Conversation Directory & Contact Roster",
        "Active Thread State Manager",
        "Message Feed Renderer (Scroll & Timestamp management)",
        "Input Dispatcher & Message State Updater"
      ]
    },
    screenshots: [
      {
        title: "Active Chat Conversation Screen",
        description: "Message stream highlighting thread conversation and input dock.",
        placeholderNote: "Add Project Screenshot (Chat Interface)"
      },
      {
        title: "Contact & Recent Conversations List",
        description: "Sidebar list of recent chats with status previews.",
        placeholderNote: "Add Project Screenshot (Chat Roster)"
      }
    ],
    developmentProcess: [
      "Participated in internship orientation and project requirement gathering at i2i.",
      "Drafted wireframes for chat screen layouts, conversation lists, and message bubbles.",
      "Implemented responsive UI components using HTML, CSS, and modern JavaScript.",
      "Integrated message dispatch handlers and local state persistence.",
      "Conducted UI testing across different screen resolutions."
    ],
    challengesAndSolutions: [
      {
        challenge: "Handling message list auto-scrolling as new messages are submitted.",
        solution: "Implemented DOM scroll anchoring techniques ensuring the latest message remains in view upon submission."
      },
      {
        challenge: "Ensuring clean touch targets and chat readability on smaller mobile screens.",
        solution: "Created an adaptive layout that collapses the contact list when viewing active chat threads on mobile."
      }
    ],
    whatILearned: [
      "Practical corporate web development workflows during the i2i internship.",
      "Building responsive conversational interfaces and handling form events.",
      "Writing modular and maintainable frontend code under timeline milestones.",
      "Collaborative project delivery and requirement implementation."
    ],
    futureImprovements: [
      "WebSocket or Socket.io integration for instant bi-directional messaging",
      "User authentication and profile avatars",
      "Media attachments and voice message support",
      "Message delivery receipts and read indicators"
    ],
    projectResult: "Successfully completed internship project deliverable at i2i, demonstrating core web development skills in interactive chat UI design.",
    github: "Add GitHub URL",
    liveDemo: "Add Live Demo URL"
  },
  {
    id: "baking-app",
    title: "Baking App",
    category: "Full Stack",
    type: "Full-Stack Project",
    shortDescription: "A full-stack web application featuring Next.js frontend, Node/Express backend, MongoDB, and JWT authentication.",
    description: "A full-stack application developed to explore end-to-end web engineering, from responsive server-rendered client pages to secure RESTful API routes, database modeling with Mongoose, and token-based authentication.",
    problemStatement: "Exploring how real-world commercial web applications connect frontend client requests to secure backend architectures. The Baking App provides a practical playground for implementing authentication, protected database records, and structured API layers.",
    objectives: [
      "Implement a modern full-stack web architecture with a decoupled client and server.",
      "Secure user data using industry-standard bcrypt password hashing and JSON Web Tokens (JWT).",
      "Design structured MongoDB collections using Mongoose schemas.",
      "Build RESTful API endpoints and consume them reliably via Axios."
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT (JSON Web Tokens)",
      "bcrypt",
      "Axios",
      "REST API"
    ],
    keyFeatures: [
      {
        title: "Full-Stack Architecture",
        description: "Next.js frontend communicating with a dedicated Node.js and Express.js backend server over structured REST endpoints."
      },
      {
        title: "Secure Authentication Pipeline",
        description: "User registration and login secured with bcrypt salt hashing and JWT token issuance for session verification."
      },
      {
        title: "MongoDB & Mongoose Schemas",
        description: "Modeled database entities for users and baking catalog items with field validations and relationships."
      },
      {
        title: "RESTful API Layer",
        description: "Clean endpoint design handling CRUD requests, parameterized queries, and JSON response serialization via Axios."
      }
    ],
    howItWorks: "The client makes HTTP requests using Axios to the Express backend. Protected routes verify the incoming JWT token in the authorization header before allowing database operations through Mongoose onto MongoDB.",
    workflow: [
      "User registers / logs in through the Next.js client interface",
      "Credentials sent to Express server; password verified with bcrypt",
      "Server signs JWT and returns it to the client",
      "Client stores token and attaches it to subsequent Axios API requests",
      "Protected routes authenticate token and perform MongoDB queries via Mongoose",
      "JSON response returned to update client UI"
    ],
    architecture: {
      title: "End-to-End Full-Stack Data Flow",
      description: "Decoupled client-server design with token-secured API routing and document database persistence.",
      flow: [
        "Client Layer: Next.js + Axios HTTP Client",
        "Security Boundary: JWT Authorization Header & bcrypt Verification",
        "Server Layer: Express.js Routing & Controller Middleware",
        "Database Layer: Mongoose ODM & MongoDB Cluster"
      ]
    },
    screenshots: [
      {
        title: "Baking Catalog & Showcase",
        description: "Visual catalog grid displaying baking items and recipe/product cards.",
        placeholderNote: "Add Project Screenshot (Catalog Grid)"
      },
      {
        title: "Authentication & User Portal",
        description: "Sign-in and user dashboard showing session state and token validation.",
        placeholderNote: "Add Project Screenshot (Auth Portal)"
      }
    ],
    developmentProcess: [
      "Defined data models using Mongoose for user accounts and baking items.",
      "Implemented Express server routes for registration, login, and catalog retrieval.",
      "Integrated bcrypt for password hashing and JSON Web Tokens for authentication.",
      "Built the frontend client pages using Next.js components.",
      "Wired Axios HTTP calls to fetch and display dynamic database data with error handling."
    ],
    challengesAndSolutions: [
      {
        challenge: "Handling token expiry and maintaining secure authentication headers across client requests.",
        solution: "Configured Axios request interceptors to automatically attach the stored bearer token to outgoing requests."
      },
      {
        challenge: "Data schema validation and preventing invalid database writes.",
        solution: "Enforced strict Mongoose validation rules and backend request body inspection before database commits."
      }
    ],
    whatILearned: [
      "Structuring end-to-end full-stack applications with separated client and backend codebases.",
      "Implementing JWT authentication workflows and password hashing with bcrypt.",
      "Designing RESTful API endpoints following standard HTTP methods and status codes.",
      "Using Mongoose ODM for MongoDB schema definition, indexing, and queries."
    ],
    futureImprovements: [
      "Order placement and checkout processing workflow",
      "Image upload integration using cloud storage (e.g., Cloudinary or S3)",
      "Role-based administrative dashboard for managing menu inventory",
      "Pagination and search indexing for large recipe/product catalogs"
    ],
    projectResult: "Built a functional full-stack prototype demonstrating end-to-end integration between Next.js, Express, and MongoDB.",
    github: "Add GitHub URL",
    liveDemo: "Add Live Demo URL"
  },
  {
    id: "zerodha-clone",
    title: "Zerodha Clone",
    category: "Full Stack",
    type: "Educational Clone Project",
    disclaimer: "This project is an educational implementation created for learning purposes and is not affiliated with Zerodha.",
    shortDescription: "An educational clone project modeling key frontend and dashboard patterns of a modern trading platform.",
    description: "Developed as an educational case study to explore complex financial dashboards, market watch interfaces, order book layouts, and data visualization patterns found in leading trading applications.",
    problemStatement: "Trading interfaces demand high visual clarity, dense data presentation, and rapid navigation without overwhelming the user. Building this clone provided hands-on experience in structuring complex, multi-pane web applications.",
    objectives: [
      "Deconstruct and implement the visual architecture of a financial trading platform.",
      "Build a multi-pane dashboard featuring a market watchlist and detail panels.",
      "Practice responsive component composition for dense tabular and metric data.",
      "Understand state management in high-density user interface contexts."
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Vite"],
    keyFeatures: [
      {
        title: "Market Watchlist Panel",
        description: "Interactive stock and index list showing ticker names, price movements, and percentage shifts."
      },
      {
        title: "Trading Dashboard View",
        description: "Central dashboard displaying portfolio summary, funds allocation overview, and holdings summary."
      },
      {
        title: "Order Placement Interface",
        description: "Educational modal simulating buy/sell order inputs, quantity selections, and order type tabs."
      },
      {
        title: "Positions & Holdings Tables",
        description: "Structured data tables showing simulated invested values, current values, and net P&L metrics."
      }
    ],
    howItWorks: "The interface models an active brokerage dashboard. Users can toggle stock selections in the watchlist to inspect detailed views, simulate order entry workflows, and inspect portfolio balance representations.",
    workflow: [
      "User accesses trading dashboard overview",
      "Browses symbols in the Market Watchlist sidebar",
      "Selects a symbol to view detailed quote summary",
      "Opens order modal to simulate order configuration",
      "Reviews updated portfolio holdings and position views"
    ],
    architecture: {
      title: "Trading Dashboard UI Architecture",
      description: "Modular multi-column layout separating ticker navigation, central analytics, and modal action states.",
      flow: [
        "Sidebar Watchlist Navigator",
        "Central Analytics & Metric Showcase",
        "Order Book & Holdings Data Tables",
        "Action Modal & Dialog Controller"
      ]
    },
    screenshots: [
      {
        title: "Market Watch & Holdings Overview",
        description: "Split-view showing stock ticker list and portfolio breakdown.",
        placeholderNote: "Add Project Screenshot (Dashboard & Watchlist)"
      },
      {
        title: "Order Placement Modal",
        description: "Simulated order placement dialog with buy/sell toggles.",
        placeholderNote: "Add Project Screenshot (Order Interface)"
      }
    ],
    developmentProcess: [
      "Analyzed the layout structure and UX flow of modern trading platforms.",
      "Constructed reusable table and watchlist row components.",
      "Implemented tabbed switching between Holdings, Positions, Orders, and Funds.",
      "Added state handling for modal dialogs and watchlist selection triggers."
    ],
    challengesAndSolutions: [
      {
        challenge: "Rendering dense information cleanly on both standard screens and mobile viewports.",
        solution: "Created collapsible sidebars and responsive horizontal scrolling wrappers for data tables."
      },
      {
        challenge: "Maintaining visual consistency across numeric indicators and price tags.",
        solution: "Enforced monospace font rules and standard red/green directional color tokens."
      }
    ],
    whatILearned: [
      "Designing complex, multi-pane financial dashboard interfaces.",
      "Managing complex component hierarchies and cross-component state synchronization.",
      "Formatting financial data and status indicators cleanly.",
      "The value of building educational clones to deconstruct production software design."
    ],
    futureImprovements: [
      "Integration with live market data APIs (e.g., Alpha Vantage or Yahoo Finance)",
      "Interactive candlestick charts using charting libraries (e.g., Lightweight Charts or Chart.js)",
      "Persistent mock trading ledger with simulated trade history",
      "Dark/Light high-contrast trading theme support"
    ],
    projectResult: "Delivered an educational dashboard clone showcasing financial UI patterns, watchlist interactions, and structured tables.",
    github: "Add GitHub URL",
    liveDemo: "Add Live Demo URL"
  },
  {
    id: "wanderlust",
    title: "WanderLust",
    category: "Web Development",
    type: "Web Development Project",
    shortDescription: "A web development learning project created to practice modern web application development concepts.",
    description: "A travel and exploration web application developed as a learning project to practice core web development principles, responsive UI composition, listing cards, and interactive browsing features.",
    problemStatement: "Building modern discovery platforms requires mastery over responsive grid systems, card-based content presentation, search filtering ergonomics, and intuitive navigation patterns.",
    objectives: [
      "Practice modern web application development concepts through a real-world themed project.",
      "Design an engaging listing exploration interface for destinations and stays.",
      "Implement search and category filter bars with smooth client feedback.",
      "Ensure robust mobile responsiveness and cross-browser visual fidelity."
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Web Design", "Modern UI"],
    keyFeatures: [
      {
        title: "Destination Exploration Grid",
        description: "Card-based visual grid displaying travel destinations, pricing indicators, and location tags."
      },
      {
        title: "Category Navigation Bar",
        description: "Interactive category bar allowing quick filtering across trending destinations, cabins, and iconic cities."
      },
      {
        title: "Detailed Listing View",
        description: "Dedicated destination details interface with description, amenities highlights, and booking summary."
      },
      {
        title: "Responsive Navbar & Search",
        description: "Modern top navigation featuring expandable search filters and adaptive mobile drawer navigation."
      }
    ],
    howItWorks: "Users browse available destinations through an interactive grid. Clicking into a destination card reveals comprehensive details including location context, pricing, and photo gallery placeholders.",
    workflow: [
      "User lands on WanderLust discovery page",
      "Selects a destination category or filters listings",
      "Explores curated card grid with dynamic pricing tags",
      "Clicks a card to view detailed destination view and amenities"
    ],
    architecture: {
      title: "Discovery Platform UI Flow",
      description: "Clean consumer-facing discovery architecture prioritizing visual cards and intuitive navigation.",
      flow: [
        "Navigation & Search Controls",
        "Category Bar Filter Dispatcher",
        "Dynamic Listing Grid Container",
        "Destination Detail Showcase Modal/Page"
      ]
    },
    screenshots: [
      {
        title: "Destinations Exploration Grid",
        description: "Visual grid of travel stay cards with pricing and location badges.",
        placeholderNote: "Add Project Screenshot (Exploration Grid)"
      },
      {
        title: "Listing Detail Screen",
        description: "Detailed view with destination overview, highlights, and amenities.",
        placeholderNote: "Add Project Screenshot (Listing Details)"
      }
    ],
    developmentProcess: [
      "Drafted UI wireframes inspired by modern travel platforms.",
      "Constructed flexible CSS grid and flexbox layout structures.",
      "Added interactive filtering triggers for destination categories.",
      "Refined typography, spacing, and micro-interactions for an inviting user experience."
    ],
    challengesAndSolutions: [
      {
        challenge: "Maintaining consistent aspect ratios and card alignments across varied image dimensions.",
        solution: "Utilized CSS object-fit cover and aspect-ratio styling rules to guarantee uniform card heights."
      },
      {
        challenge: "Smooth category switching without layout jumps.",
        solution: "Structured container dimensions and CSS transitions to provide steady, flicker-free rendering."
      }
    ],
    whatILearned: [
      "Modern CSS layout techniques including Grid, Flexbox, and responsive media queries.",
      "Card-based UI architecture for content discovery platforms.",
      "Writing clean, semantic HTML and reusable CSS utility classes.",
      "Principles of visual hierarchy in consumer-facing web experiences."
    ],
    futureImprovements: [
      "Backend API integration with MongoDB for persistent dynamic listings",
      "Interactive map view using Leaflet or Google Maps Platform",
      "User review submission and rating calculations",
      "Date picker and reservation booking simulation"
    ],
    projectResult: "Delivered a clean, responsive travel discovery interface demonstrating modern frontend development concepts.",
    github: "Add GitHub URL",
    liveDemo: "Add Live Demo URL"
  },
  {
    id: "zoom-clone",
    title: "Zoom Clone",
    category: "Web Development",
    type: "Educational Clone Project",
    disclaimer: "This project is an educational implementation created for learning purposes and is not affiliated with Zoom.",
    shortDescription: "An educational clone project modeling real-time video conferencing UI and meeting room controls.",
    description: "Developed as an educational implementation to study the architecture of modern video conferencing platforms, meeting lobby workflows, participant video grids, and toolbar control interactions.",
    problemStatement: "Video conferencing platforms involve intricate UI layouts where participant grids dynamically adjust based on active participants, screen shares, and side drawers like in-call chat and attendee lists.",
    objectives: [
      "Study and implement the user interface patterns of modern video conferencing applications.",
      "Build a meeting room interface with dynamic video participant layout tiles.",
      "Develop meeting control toolbars (audio mute, video toggle, screen share, participant panel).",
      "Practice conditional state management and modal overlays in React/web interfaces."
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Vite"],
    keyFeatures: [
      {
        title: "Meeting Room Video Grid",
        description: "Adaptive grid layout presenting participant video tiles with active speaker badges and status icons."
      },
      {
        title: "Interactive Meeting Controls Bar",
        description: "Docked bottom toolbar with functional toggle controls for Microphone, Camera, Screen Share, and Chat."
      },
      {
        title: "In-Meeting Chat Drawer",
        description: "Collapsible side drawer allowing attendees to view and exchange messages during active calls."
      },
      {
        title: "Participant Roster Panel",
        description: "Sidebar roster displaying connected meeting members and their media connection states."
      }
    ],
    howItWorks: "The application simulates a live meeting session. Users can interact with the bottom control dock to toggle audio/video mute states, open the side chat drawer, or inspect participant rosters.",
    workflow: [
      "User enters the simulated meeting room interface",
      "Video participant grid adjusts dynamically to active tiles",
      "User toggles media controls (Mic Mute / Camera Off) with visual indicator feedback",
      "User toggles Chat or Participants drawer for auxiliary communication",
      "User selects End / Leave Meeting action"
    ],
    architecture: {
      title: "Video Conference UI Architecture",
      description: "Multi-layered meeting stage with floating dock, flexible participant grid, and collapsible auxiliary panels.",
      flow: [
        "Meeting Stage Viewport & Video Grid Manager",
        "Bottom Control Dock (Mute, Camera, Share, Chat, End)",
        "Collapsible Side Panel (Chat & Participant Roster)",
        "Media State Dispatcher (Simulation Hooks)"
      ]
    },
    screenshots: [
      {
        title: "Active Meeting Video Grid",
        description: "Grid view of meeting attendees with speaker indicators and control dock.",
        placeholderNote: "Add Project Screenshot (Meeting Grid)"
      },
      {
        title: "Meeting Controls & Chat Sidebar",
        description: "Side panel open alongside the video grid displaying in-call messages.",
        placeholderNote: "Add Project Screenshot (In-Call Chat)"
      }
    ],
    developmentProcess: [
      "Deconstructed the user experience flow of video meeting rooms.",
      "Engineered an auto-adjusting CSS grid for participant video tiles.",
      "Implemented state toggles for microphone, camera, and side drawer visibility.",
      "Styled a dark-mode video conferencing stage matching professional standards."
    ],
    challengesAndSolutions: [
      {
        challenge: "Creating a video grid that scales nicely from 1 to multiple participant tiles without breaking.",
        solution: "Employed CSS Grid auto-fit and minmax rules combined with dynamic class calculations."
      },
      {
        challenge: "Managing responsive layout shifts when opening side drawers like Chat on small viewports.",
        solution: "Configured absolute overlays on mobile and flexbox layout adjustments on desktop viewports."
      }
    ],
    whatILearned: [
      "Deconstructing complex real-time application user interfaces.",
      "Building responsive video tile grid systems with CSS Grid.",
      "Managing toggle states for audio/video media indicators in React.",
      "Creating seamless collapsible side drawers and floating toolbars."
    ],
    futureImprovements: [
      "WebRTC integration for real peer-to-peer audio and video streaming",
      "Signaling server using Socket.io or WebSockets",
      "Meeting room creation with unique shareable room codes",
      "Real screen capture API integration for live desktop sharing"
    ],
    projectResult: "Delivered an educational video conference interface prototype showcasing dynamic video grids and meeting controls.",
    github: "Add GitHub URL",
    liveDemo: "Add Live Demo URL"
  },
  {
    id: "obstacle-avoiding-car",
    title: "Obstacle Avoiding Car",
    category: "Robotics",
    type: "Robotics / College Project",
    shortDescription: "An Arduino-based obstacle avoiding robot/car designed to detect obstacles using an ultrasonic sensor and change its movement accordingly.",
    description: "An autonomous robotic vehicle project engineered using an Arduino microcontroller, ultrasonic distance sensor, motor driver, and servo motor. The robot scans its forward environment, measures clearance distances in real time, and automatically makes steering decisions to avoid collisions.",
    problemStatement: "Autonomous navigation in unstructured environments requires dependable real-time obstacle detection and deterministic path correction without human remote intervention. This project demonstrates embedded computing, sensor feedback loops, and motor control integration.",
    objectives: [
      "Build an autonomous robotic vehicle chassis driven by embedded microcontroller logic.",
      "Interface an ultrasonic sensor (HC-SR04) with an Arduino Uno to measure obstacle distances in real-time.",
      "Control dual DC motors using an L298N H-Bridge motor driver for forward, reverse, and turning motions.",
      "Mount the ultrasonic sensor on a servo motor to perform forward, left, and right panoramic sweeps.",
      "Implement a collision avoidance algorithm with audio alert feedback via a buzzer."
    ],
    technologies: ["Arduino", "Embedded C / C++", "Ultrasonic Sensor", "L298N Motor Driver", "Servo Motor", "Buzzer", "Robotics Hardware"],
    roboticsComponents: [
      {
        name: "Arduino Microcontroller",
        spec: "Arduino Uno (ATmega328P)",
        description: "The central processing unit that executes the distance measurement logic, sensor sweeps, and motor direction algorithm."
      },
      {
        name: "Ultrasonic Sensor",
        spec: "HC-SR04 Ultrasonic Distance Sensor",
        description: "Emits ultrasonic sound pulses and measures time of flight to calculate precise distance (cm) to obstacles ahead."
      },
      {
        name: "Motor Driver",
        spec: "L298N Dual H-Bridge Motor Driver Module",
        description: "Amplifies control signals from the Arduino to drive higher-current DC motors for forward, reverse, and rotational steering."
      },
      {
        name: "Servo Motor",
        spec: "SG90 Micro Servo Motor",
        description: "Rotates the ultrasonic sensor 180 degrees (Left, Center, Right) to scan surroundings when forward obstacles are detected."
      },
      {
        name: "Buzzer Module",
        spec: "Piezo Buzzer Alert",
        description: "Provides audible audio alerts when an obstacle is within the safety threshold distance."
      }
    ],
    circuitDiagramNote: "Hardware Circuit Diagram: Arduino Uno connected to L298N motor driver inputs (IN1-IN4, ENA, ENB), HC-SR04 Trigger and Echo pins, SG90 Servo PWM signal pin, and active buzzer output pin.",
    howItWorks: "The HC-SR04 ultrasonic sensor continuously emits high-frequency sound waves. If an obstacle reflects the sound, the echo pin records duration, which Arduino translates to distance. When distance is greater than the safety threshold (e.g. 25cm), the car proceeds forward. If distance drops below threshold, the buzzer sounds, the car stops, reverses slightly, commands the servo to scan left and right, and steers toward the clearer direction.",
    workflow: [
      "Ultrasonic Sensor emits pulses",
      "Distance Detection (Time of Flight calculation)",
      "Arduino Processing & Threshold Evaluation",
      "Decision Making (Path Clear vs. Obstacle Ahead)",
      "Motor Driver Command (Forward, Reverse, Left Turn, Right Turn)",
      "Car Movement adjusted autonomously"
    ],
    architecture: {
      title: "Embedded Hardware-Software Architecture",
      description: "Real-time control loop coupling distance telemetry, decision heuristics, and motor driver actuation.",
      flow: [
        "Sensory Input: HC-SR04 Ultrasonic Sensor + Servo Panoramic Sweep",
        "Processing Unit: Arduino Microcontroller (Embedded C loop)",
        "Actuation Stage: L298N Dual H-Bridge Driver + DC Gear Motors",
        "Feedback Output: Vehicle Kinematics + Piezo Buzzer Acoustic Alert"
      ]
    },
    arduinoCode: `// Arduino Obstacle Avoiding Robot - Core Algorithm
#include <Servo.h>

Servo lookServo;
const int trigPin = 9;
const int echoPin = 10;
const int buzzerPin = 8;

// L298N Motor Driver Pins
const int in1 = 4;
const int in2 = 5;
const int in3 = 6;
const int in4 = 7;

const int OBSTACLE_DISTANCE_CM = 25;

long getDistance() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  long duration = pulseIn(echoPin, HIGH);
  return duration * 0.034 / 2;
}

void moveForward() {
  digitalWrite(in1, HIGH); digitalWrite(in2, LOW);
  digitalWrite(in3, HIGH); digitalWrite(in4, LOW);
}

void stopCar() {
  digitalWrite(in1, LOW); digitalWrite(in2, LOW);
  digitalWrite(in3, LOW); digitalWrite(in4, LOW);
}

void moveBackward() {
  digitalWrite(in1, LOW); digitalWrite(in2, HIGH);
  digitalWrite(in3, LOW); digitalWrite(in4, HIGH);
}

void turnRight() {
  digitalWrite(in1, HIGH); digitalWrite(in2, LOW);
  digitalWrite(in3, LOW); digitalWrite(in4, HIGH);
}

void turnLeft() {
  digitalWrite(in1, LOW); digitalWrite(in2, HIGH);
  digitalWrite(in3, HIGH); digitalWrite(in4, LOW);
}

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(buzzerPin, OUTPUT);
  pinMode(in1, OUTPUT); pinMode(in2, OUTPUT);
  pinMode(in3, OUTPUT); pinMode(in4, OUTPUT);
  lookServo.attach(11);
  lookServo.write(90); // Forward center
  delay(1000);
}

void loop() {
  long distance = getDistance();
  
  if (distance > OBSTACLE_DISTANCE_CM) {
    digitalWrite(buzzerPin, LOW);
    moveForward();
  } else {
    digitalWrite(buzzerPin, HIGH);
    stopCar();
    delay(300);
    moveBackward();
    delay(400);
    stopCar();
    
    // Scan Right
    lookServo.write(20);
    delay(500);
    long rightDist = getDistance();
    
    // Scan Left
    lookServo.write(160);
    delay(500);
    long leftDist = getDistance();
    
    // Reset to Center
    lookServo.write(90);
    delay(300);
    
    if (rightDist > leftDist) {
      turnRight();
      delay(450);
    } else {
      turnLeft();
      delay(450);
    }
    stopCar();
  }
}`,
    keyFeatures: [
      {
        title: "Autonomous Collision Avoidance",
        description: "Detects walls, furniture, and obstacles ahead without requiring any remote control or human guidance."
      },
      {
        title: "Panoramic Servo Scanner",
        description: "Mounts the ultrasonic transducer on a servo motor to evaluate left and right clearances before making turns."
      },
      {
        title: "L298N Dual H-Bridge Motor Control",
        description: "Enables bi-directional differential drive control for smooth forward travel, reversing, and on-the-spot pivots."
      },
      {
        title: "Audio Alert System",
        description: "Integrates a buzzer indicator to provide immediate auditory alerts when an obstacle is within threshold proximity."
      }
    ],
    screenshots: [
      {
        title: "Robot Chassis & Hardware Assembly",
        description: "Physical chassis showing Arduino Uno, L298N driver, battery pack, and DC gear wheels.",
        placeholderNote: "Add Hardware Photo / Screenshot (Chassis Assembly)"
      },
      {
        title: "Ultrasonic Sensor & Servo Mount",
        description: "Front-mounted HC-SR04 sensor attached to SG90 servo motor for directional sweeping.",
        placeholderNote: "Add Hardware Photo (Ultrasonic & Servo Mount)"
      },
      {
        title: "Circuit Connection Overview",
        description: "Schematic wiring diagram connecting micro-controller, motor driver, and power rails.",
        placeholderNote: "Add Circuit Schematic Diagram"
      }
    ],
    developmentProcess: [
      "Assembled the 2WD/4WD robotic chassis with geared DC motors and caster wheel.",
      "Wired the L298N motor driver to Arduino digital output pins and tested direction control.",
      "Interfaced the HC-SR04 ultrasonic sensor and calibrated distance measurement timings.",
      "Mounted the sensor onto an SG90 servo and programmed 180-degree sweep routines.",
      "Integrated audio buzzer feedback and refined the threshold collision avoidance loop."
    ],
    challengesAndSolutions: [
      {
        challenge: "Managing power isolation between the high-noise DC motors and sensitive Arduino logic.",
        solution: "Configured separate power distribution lines and shared common ground to prevent microcontroller resets caused by motor voltage spikes."
      },
      {
        challenge: "Handling false ultrasonic reflections from angled surfaces or soft materials.",
        solution: "Added a brief multi-reading verification filter in code before triggering the collision avoidance routine."
      }
    ],
    whatILearned: [
      "Arduino microcontroller programming in Embedded C / C++.",
      "Working with ultrasonic sensors and pulse-width timing calculations.",
      "Motor control fundamentals using dual H-Bridge drivers (L298N).",
      "Embedded systems integration connecting hardware sensors, actuators, and software logic.",
      "Power management and noise decoupling in robotics circuits."
    ],
    futureImprovements: [
      "Bluetooth / WiFi module integration (HC-05 or ESP32) for hybrid manual override via mobile app",
      "Infrared line-tracking sensors for dual-mode line following capabilities",
      "Speed control using Pulse Width Modulation (PWM) on motor driver enable pins",
      "Rechargeable lithium-ion battery management circuit with onboard status display"
    ],
    projectResult: "Successfully constructed and demonstrated an autonomous obstacle avoiding robotic vehicle with real-time distance perception and steering logic.",
    github: "Add GitHub URL",
    liveDemo: "Add Live Demo URL"
  }
];
