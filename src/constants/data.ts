import DeepLearningCarPic from "/public/Projects/DeepLearningCars.png";
import CIMDPPic from "/public/Projects/Forcasting.png";
import RiftPic from "/public/Projects/Rift.png";
import TerminalMonopoyPic from "/public/Projects/Monopoly.png";
import { ProjectProp } from "@/types";

export const featuredProjects = [
  {
    title: "Deep Learning Car",
    description:
      "This project merges the NEAT algorithm with neural networks, allowing virtual cars to evolve driving skills across generations. Through trial, error, and adjustments, these cars gradually conquer a challenging track, offering a glimpse into the potential of reinforcement learning and AI adaptation",
    programmingLanguage: "Python",
    concepts: "Genetic Algorithm, Reinforcement Learning, Deep Learning",
    demo: "/InProgress",
    code: "https://github.com/Vaarun-Kamath/Deep-Learning-Cars",
    image: DeepLearningCarPic,
  },
  {
    title: "Cisco Inventory Management and Demand Prediction",
    description:
      "This is a hackathon project, whose problem statement was given by Cisco. Cisco had given us a dataset containing information regarding thier products, such as Business family, Booked quantity, Fiscal quarter, PLID etc. The goal of the project was to predict the demand in the upcoming fiscal quarter.",
    programmingLanguage: "Python (Google Colab and Jupyter Notebook)",
    concepts: "Machine Learning, EDA, Data Analysis, Data Visualization",
    demo: "/InProgress",
    code: "https://github.com/Vaarun-Kamath/HashCode-Cisco-Inventory-Management-and-Demand-Prediction",
    image: CIMDPPic,
  },
  {
    title: "Rift Website",
    description:
      "This is a social media site made specifically for gamers. A user can post any text or clip on this platform which is publically viewed by everyone on the platform. Website also has an option to direct message other online users.",
    programmingLanguage: "NodeJS, ReactJS, Javascript",
    concepts: "Web Development, MERN stack",
    demo: "/InProgress",
    code: "https://github.com/Vaarun-Kamath/Rift",
    image: RiftPic,
  },
  {
    title: "Terminal Monopoly",
    description:
      "This project is entirely made in C with no external libraries. It is a game of monopoly with a max of 4 players, each player rolls a dice and lands on a property, given an initial amount of money the player can choose to buy or not bye the property. If player chooses to buy then if other player lands on that property, the other player has to pay rent. Each property has its own cost and rent. Players must think strategically and choose which property to buy. Last player not bankrupt wins!",
    programmingLanguage: "C Programming",
    concepts: "Basic C programming",
    demo: "/InProgress",
    code: "https://github.com/Vaarun-Kamath/Monopoly-Game",
    image: TerminalMonopoyPic,
  },
];

export const projects: Array<ProjectProp> = [
  {
    name: "Distributed Load Testing Framework",
    language: "Python",
    concepts: "Apache Kafka, Javascript",
    image: "/Projects/LoadTesting.png",
    description: [
      "Architected a high-concurrency distributed load testing framework to evaluate application performance under extreme conditions.",
      "Streamlined multi-node orchestration and real-time metrics aggregation.",
      "Successfully conducted avalanche and tsunami load testing, demonstrating the server's capability to handle over 12,000 concurrent requests with an average response time of 120ms, providing actionable insights for optimizing performance",
    ],
    githubLink:
      "https://github.com/Vaarun-Kamath/DistributedLoadTesting/tree/presentation",
  },
  {
    name: "Real-Time F1 Data Streaming and Analytics System",
    language: "Python",
    concepts: "Apache Spark, Structured Streaming",
    image: "/Projects/F1Data.png",
    description: [
      "Developed an advanced real-time telemetry data streaming and analytics system for F1 driver performance.",
      "Established a sophisticated watermarking techniques to handle late data and performed complex aggregation operations.",
      "Delivered a low-latency telemetry data streaming system for F1, ensuring high accuracy in performance metrics and enabling real-time race strategy decisions",
    ],
    githubLink: "https://github.com/VishalMGodi/DBT_F1",
  },
  {
    name: "Automated LinkedIn and Glassdoor Data Extraction Engine",
    language: "Python",
    concepts: "Selenium, dotenv, Colorama",
    image: "/Projects/LinkedIn.png",
    description: [
      "Automated data scraping from Glassdoor and LinkedIn using Selenium for comprehensive job market research.",
      "Efficiently collected and stored over 10,000 data points, aiding in business intelligence and market analysis.",
    ],
    githubLink: "https://github.com/Vaarun-Kamath/LinkedIn-Scraper",
  },
  {
    name: "Intelligent Content-Based Course Recommendation System",
    language: "Python",
    concepts:
      "Pandas, scikit-learn, Recommendation System, Jupyter Notebook, Data Analysis",
    image: "/Projects/CourseRecommendation.png",
    description: [
      "Created a content-based recommendation system for Coursera courses, utilizing advanced text processing techniques.",
      "Analyzed over 5,000 course descriptions, delivering highly relevant course suggestions and improving user experience",
    ],
    githubLink: "https://github.com/Vaarun-Kamath/CourseRecommender",
  },
  {
    name: "Microservices Based E-Commerce Platform",
    language: "NextJS, Express, MongoDB, Docker, Kubernetes, Nginx",
    concepts: "Microservices, Scalability, Maintainability, Load Balancing",
    image: "/Projects/ECommerce.png",
    description: [
      "Engineered a robust and scalable online store using a microservice architecture to handle high user traffic and transactions.",
      "Achieved significant improvements in scalability and maintainability; enhanced user experience by 40% through efficient load balancing and optimized backend processes",
    ],
    githubLink: "https://github.com/Vaarun-Kamath/E-Commerce-Microservices",
  },
  {
    name: "Project Management System",
    language: "NextJS, Java Spring Boot, MongoDB",
    concepts: "Project Management, Real-time Updates, Actionable Insights",
    image: "/Projects/ProjectManagement.png",
    description: [
      "A comprehensive tool for collaborative project and task management to streamline teamwork flows.",
      "Increased team productivity by 50% through real-time updates and actionable project insights, leading to more efficient project delivery",
    ],
    githubLink: "https://github.com/Vaarun-Kamath/Project-Management-System",
  },
  {
    name: "AI-Based Personalized Learning Website",
    language: "NextJS, Express, Python, Flask, MongoDB",
    concepts: "Adaptive Learning, Personalized Tests, Content Recommendations",
    image: "/Projects/PersonalizedLearning.png",
    description: [
      "Designed an adaptive learning platform that offers personalized tests and content based on user performance metrics.",
      "Enhanced learning efficiency by 30%; the project was recognized by hackathon sponsors for its innovative approach and potential for further development",
    ],
    githubLink:
      "https://github.com/Vaarun-Kamath/AI-Based-Personalized-Learning",
  },
  {
    name: "NeuraLap: The Autonomous Racing Project",
    language: "Python",
    concepts: "Genetic Algorithm, Reinforcement Learning, Deep Learning",
    image: "/Projects/DeepLearningCars.png",
    description: [
      "Starts with 10 cars, best 2 cars are selected to generate the weights of the offspring",
      "Generation based algorithm",
      "Implemented neural networks",
      "Built GUI using Pygame",
    ],
    githubLink: "",
  },
  {
    name: "Cisco Inventory Management and Demand Prediction",
    language: "Python [Google Colab and Jupyter Notebook]",
    concepts: "Machine Learning, EDA, Data Analysis, Data Visualization",
    image: "/Projects/Forcasting.png",
    description: [
      "Hackathon Project",
      "Dataset contained multiple cisco product-id's, and the amount booked in each fiscal quarter",
      "Used multiple machine learning models and techniques",
      "Made GUI in pygame",
    ],
    githubLink: "",
  },
  {
    name: "Exploratory Data Analysis on Retail store",
    language: "Python [Google Colab]",
    concepts: "EDA, Data Visualization, Data Manipulation, Data Analysis",
    image: "/Projects/EDARS.png",
    description: [
      "Found valuable insights from the dataset to increase profit in retail",
      "Dataset contains 13 features",
      "Made a visual representation of all the insights",
    ],
    githubLink: "",
  },
];
